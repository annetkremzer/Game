const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

router.post('/registration', async (req, res) => {
  const { password, login } = req.body;
  if (password && login) {
    const user = await User.findOne({ where: { login } });
    if (user) {
      res.json({ message: 'такой login есть' });
    } else {
      const hash = await bcrypt.hash(password, 10);
      const newUser = await User.create({ password: hash, login });
      req.session.userId = newUser.id;
      res.status(200).json({ message: 'все ок', user: newUser.login });
    }
  }
});

router.post('/login', async (req, res) => {
  const { password, login } = req.body;
  if (password && login) {
    const user = await User.findOne({ where: { login } });
    if (user) {
      const isSame = await bcrypt.compare(password, user.password);
      if (isSame) {
        req.session.userId = user.id;
        res.json({ message: 'успех', user });
      }
    } else {
      res.json({ message: 'Ваш login или password указаны не верно' });
    }
  }
});

router.get('/logout', (req, res) => {
  req.session.destroy(() => res.clearCookie('user_sid').json({ message: 'Session destroy' }));
});

module.exports = router;
