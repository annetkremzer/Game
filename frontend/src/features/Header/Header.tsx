import React, { useEffect } from 'react'
import './Header.css';
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { RootState } from '../reducers/store'
import { logout } from '../../App/api';
import { Res } from '../reducers/userReducer/types/User';

function Header() {
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) =>
    state.userState
  )

  const navigate = useNavigate();
  useEffect(() => navigate('/main'), [])

  const handleLogout = () => {
    logout().then((res: Res) => res.message === 'Session destroy' && dispatch({ type: 'LOGOUT' }))
    navigate('/main')
  }


  return (
    <div className="app__container">
      <nav className="header__nav">
        <div className="header__container">
          <ul className="header__menu">
            <li>
              <NavLink className="header__item" to="/main">
                Home
              </NavLink>
            </li>
            {!user ? (
              <>
                <li>
                  <NavLink className="header__item" to="/auth/registration">
                    Registration
                  </NavLink>
                </li>
                <li>
                  <NavLink className="header__item" to="/auth/login">
                    Login
                  </NavLink>
                </li>
              </>
            ) : (
              <li>
                <button style={{background:'none', border:'none', padding:'none'}} onClick={handleLogout} className="header__item">
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
      </nav>
      <Outlet />
    </div>
  )
}

export default Header