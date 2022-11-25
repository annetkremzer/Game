import { Box, Button, Modal, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import Quest from './types/Quest'

function QuestItem({ questBlock }: { questBlock: Quest }): JSX.Element {
  const [open, setOpen] = useState(false);
  const [score, setScore] = useState(String(questBlock.score));
  const [answer, setAnswer] = useState('');
  const [checkAnswer, setCheckAnswer] = useState('');

  const handleOpen = () => setOpen(true);

  const handleClose = () => {
    setOpen(false);
    setScore('');
  };

  const handleAnswer = () => {
    if(answer.toLowerCase() === questBlock.answer.toLowerCase()) {
      setCheckAnswer('Правильный ответ! Умничка! Еще чуть-чуть и ты Хокаге!')
    } else {
      setCheckAnswer(`Не правильно! Правильный ответ: ${questBlock.answer}`)
    }
  }

  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1000,
    height: 500,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  };

  return (
    <div>
      {score ? <Button onClick={handleOpen}>{score}</Button> : <Button disabled></Button>}
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h3" component="h2" >
            {questBlock.question}
          </Typography>
          <TextField id="standard-basic" label="Answer" variant="standard" onChange={(e) => setAnswer(e.target.value)} value={answer}/>
          <Button onClick={handleAnswer}>Answer</Button>
          <p>{checkAnswer}</p>
        </Box>
      </Modal>

    </div>
  )
}

export default QuestItem