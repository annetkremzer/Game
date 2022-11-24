import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as api from './api'
import { RootState } from '../features/reducers/store';

function App() {

  const dispatch = useDispatch()
  useEffect(() => {
    api.loadTopics().then((res) => dispatch({ type: 'INIT_TOPIC', payload: res }))
  }, [])
  const {topicState} = useSelector((state:RootState) => state)
  console.log(topicState, '----------')
  return (
    <div className="App">
    </div>
  );
}

export default App;
