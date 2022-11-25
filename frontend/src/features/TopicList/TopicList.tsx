import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../reducers/store'
import TopicItem from '../TopicItem/TopicItem';

function TopicList() {

  const { topicState } = useSelector((state: RootState) => state);
console.log(topicState);


  return (
    <div style={{display: 'flex', flexDirection:'column', fontSize: '70px', textAlign:'center', minWidth: '300px'}}>
      {topicState.topics.map((topic, i) => <TopicItem key={i} topic={topic}/>)}
    </div>
  )
}

export default TopicList