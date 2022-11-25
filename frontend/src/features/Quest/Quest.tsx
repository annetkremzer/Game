import React from 'react'
import ModalWindow from '../ModalWindow/ModalWindow'
import Quest from './types/Quest'

function QuestItem({questBlock} : {questBlock:Quest}):JSX.Element {
  return (
    <div>
      {questBlock.score}
      <ModalWindow questBlock={questBlock}/>
    </div>
  )
}

export default QuestItem