import { Box, Button, Modal, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import Quest from './types/Quest'
import './QuestItem.css'

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
    <div className='ul9'>
      {score ? <Button onClick={handleOpen} sx={{fontSize: '100px', textAlign:'center', minWidth: '300px', backgroundColor: 'rgb(59, 252, 0)', margin: '5px', borderRadius: '15px'}}>{score}</Button> : <Button className='ul9' sx={{fontSize: '100px', textAlign:'center', minWidth: '300px'}} disabled></Button>}
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h2" component="h2">
            {questBlock.question}
          </Typography>
          <TextField id="standard-basic" label="Answer" variant="standard" onChange={(e) => setAnswer(e.target.value)} value={answer}/>
          <Button onClick={handleAnswer} sx={{fontSize: '30px'}}>Answer</Button>
          <p style={{fontSize: '30px'}}>{checkAnswer}</p>
        </Box>
      </Modal>

    </div>
  )
}

export default QuestItem