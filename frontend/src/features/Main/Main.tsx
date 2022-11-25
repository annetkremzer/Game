import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { RootState } from '../reducers/store'
import TopicList from '../TopicList/TopicList'

function Main() {
  const { user } = useSelector((state: RootState) => state.userState);

  return (
    <>
      {!user ? (
      <div>
        <h1>Для того, чтобы начать играть, Вам надо зарегестрироваться</h1>
      </div>
      ) : (
        <TopicList />
      )}
    </>

  )
}

export default Main