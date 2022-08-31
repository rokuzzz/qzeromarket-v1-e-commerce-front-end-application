import { Box, Grid, styled } from '@mui/material'

export const StyledGrid = styled(Grid)(({ theme }) => ({
  paddingBottom: 5,
  paddingRight: 2,
  marginTop: 1,
  marginLeft: "auto",
  marginRight: "auto",
}))

export const RelativeBox = styled(Box)(({theme}) => ({
  [theme.breakpoints.up(600)]: {
    maxWidth: '86%',
  },
}))