import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as api from './api'
import './App.css'
import { RootState } from '../features/reducers/store';
import { Route, Routes } from 'react-router-dom';
import Auth from '../features/auth/Auth';
import Header from '../features/Header/Header';

function App() {

  const dispatch = useDispatch()
  useEffect(() => {
    api.loadTopics().then((res) => dispatch({ type: 'INIT_TOPIC', payload: res }))
  }, [])


  const { topicState } = useSelector((state: RootState) => state)
  console.log(topicState, '----------')
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        {/* <Route path="main" element={<Main />} /> */}
        <Route path="auth/:name" element={<Auth />} />
      </Route>
    </Routes>
  );
}

export default App;
