import { Box, Button, Modal, TextField, Typography } from '@mui/material'
import React from 'react'
import Quest from './types/Quest'

function QuestItem({ questBlock }: { questBlock: Quest }): JSX.Element {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <div>
      <Button onClick={handleOpen}>{questBlock.score}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {questBlock.question}
          </Typography>
          <TextField id="standard-basic" label="Answer" variant="standard" />
          <Button >Answer</Button>

        </Box>
      </Modal>

    </div>
  )
}

export default QuestItem