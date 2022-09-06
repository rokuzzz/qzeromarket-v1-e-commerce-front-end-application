import { styled, Typography, TextField } from '@mui/material';


export const FooterTitle = styled(Typography)(() => ({
  textTransform: 'uppercase',
  marginBottom: '1em'
}))

export const SubscribeTextField = styled(TextField)(() => ({
  '.MuiInputLabel-root': {
    color: 'white'
  },

  '.MuiInput-root::before': {
    borderBottom: '1px solid white'
  },
}))