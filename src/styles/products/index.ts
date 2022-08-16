import { styled, Box } from "@mui/system";

 
export const Product = styled(Box)(({theme}) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center', 
  flexDirections: 'column',
  [theme.breakpoints.up('md')]: {
    position: 'relative'
  }
}))

export const ProductImage = styled('img')(({ src, theme }) => ({

  src: `url(${src})`,
  width: '100%',
  padding: '10px',
  [theme.breakpoints.down('md')] : {
    width: '80%',
    padding: '24px'
  }
}))