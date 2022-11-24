import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as api from '../../App/api';
import { Res } from '../reducers/userReducer/types/User';



function Auth() :JSX.Element {
    const { name } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    if (name === 'logout') {
      api[name]().then((res:Res) => res.message === 'Session destroy' && dispatch({ type: 'LOGOUT' }));
    }

    const auth = (e:React.FormEvent):void => {
      e.preventDefault();
      if (name === 'registration') {
        api[name]({ login, password }).then((res:Res) => {
          if (res.message === 'такой login есть') {
            navigate('/auth/login');
          } else {
            dispatch({ type: 'AUTH', payload: res });
            navigate('/');
          }
         });
      }
    };
  return (
    <>
    <h2>{name?.toUpperCase()}</h2>
      <div>
    <form onSubmit={auth}>
      <div className="mb-3">
        <label>
          login
          <input
            onChange={(e) => setLogin(e.target.value)}
            value={login}
            name="login"
            type="login"
            className="form-control"
          />
        </label>
      </div>
      <div className="mb-3">
        <label className="form-label">
          Password
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            name="password"
            type="password"
            className="form-control"
          />
        </label>
      </div>
      <button className="btn btn-secondary" type="submit">
        {name?.toUpperCase()}
      </button>
    </form>
      </div>
    </>
  );
}

export default Auth;
