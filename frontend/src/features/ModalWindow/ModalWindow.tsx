import React from 'react'
import Quest from '../Quest/types/Quest'

function ModalWindow({questBlock}: {questBlock:Quest}):JSX.Element {
  return (
    <div>
      <div>{questBlock.question}</div>
      <input></input>
      <button>Answer</button>
    </div>
  )
}

export default ModalWindow