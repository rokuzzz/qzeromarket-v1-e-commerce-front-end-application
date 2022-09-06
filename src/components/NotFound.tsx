import { Grid, Typography } from '@mui/material';

function ErrorNotFound() {
  return (
    <Grid
      container
      direction={'column'}
      alignContent={'center'}
      justifyContent={'center'}
      style={{
        minWidth: '100%',
        height: '89vh',
      }}
    >
      <Typography
        variant='h1'
        alignSelf={'center'}
        gutterBottom
        component='div'
      >
        404
      </Typography>
      <Typography
        variant='h4'
        alignSelf={'center'}
        gutterBottom
        component='div'
      >
        Sorry, the page not found
      </Typography>
      <Typography variant='h6' alignSelf={'center'} component='div'>
        The link you followed probably broken
      </Typography>
      <Typography variant='h6' component='div' alignSelf={'center'}>
        or the page has been removed
      </Typography>
    </Grid>
  );
}

export default ErrorNotFound;
