import React from 'react'
import './Header.css';
import { useSelector } from 'react-redux'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { RootState } from '../reducers/store'

function Header() {
  const { user } = useSelector((state: RootState) =>
    state.userState
  )
  const navigate = useNavigate();
  useEffect(() => navigate('/main'), [])


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
                <NavLink className="header__item" to="/auth/logout">
                  Logout
                </NavLink>
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