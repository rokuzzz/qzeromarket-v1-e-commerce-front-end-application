import { Paper } from "@mui/material";
import { styled } from "@mui/system";

export const LoginForm = styled(Paper)(({theme}) => ({
  boxSizing: 'border-box',
  [theme.breakpoints.up('sm')]: {
    width: '350px',
    padding: 45,
  },
  [theme.breakpoints.up('md')]: {
    width: '450px',
    padding: 60,
  },
  [theme.breakpoints.down('sm')]: {
    width: '90%',
    padding: 30,
  },
  height: '70vh',
  margin: 'auto'

}))