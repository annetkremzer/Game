import React from 'react'
import QuestItem from '../QuestItem/QuestItem'
import Topic from './types/Topic'

function TopicItem({ topic }: { topic: Topic }): JSX.Element {

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <div style={{ display: 'flex', width: '460px', color: 'rgb(38, 246, 253)', textAlign: 'center', alignItems: 'center', justifyContent: 'center' }}>
        <span>{topic.title}</span>
      </div>
      {topic.quests.map((quest, i) => <QuestItem key={i} questBlock={quest} />)}
    </div>
  )
}

export default TopicItem