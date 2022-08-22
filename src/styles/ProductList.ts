import { Grid, styled } from '@mui/material'

export const RelativeGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    maxWidth: '80%',
  },
  paddingBottom: 5,
  paddingRight: 2,
  marginTop: 1,
  marginLeft: "auto",
  marginRight: "auto",
}))