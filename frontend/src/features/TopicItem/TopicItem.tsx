import React from 'react'
import QuestItem from '../QuestItem/QuestItem'
import Topic from './types/Topic'

function TopicItem({topic} : {topic: Topic}):JSX.Element {
  
  return (
    <div style={{display: 'flex',  flexDirection:'row'}}>
      <div>{topic.title}</div>
      {topic.quests.map((quest, i) => <QuestItem key={i} questBlock={quest}/>)}
    </div>
  )
}

export default TopicItem