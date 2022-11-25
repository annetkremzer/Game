import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { RootState } from '../reducers/store'
import TopicList from '../TopicList/TopicList'
import './Main.css'
import regimg from './regimg.jpg'

function Main() {
  const { user } = useSelector((state: RootState) => state.userState);

  return (
    <>
      {!user ? (
      <div className='container'>
        <h2>Для начала зарегистрируйся, падаван!</h2>
        <div className='img_cont'>
          <img src={regimg} alt='teamkrs' width='400px' height='300px' />
        </div>
        <p>Ну или залогинься...</p>
      </div>
      ) : (
        <TopicList />
      )}
    </>

  )
}

export default Main