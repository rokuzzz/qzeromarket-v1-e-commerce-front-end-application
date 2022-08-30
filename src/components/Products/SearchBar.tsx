import { Button, IconButton, InputBase, Paper } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search'


function SearchBar() {
  return (
    <Paper 
      component='form'
      sx={{
            p: '2px 4px',
            display: 'flex',
            alignItems: 'center', 
            width: '40%', 
            height: 'fit-content'
          }}
    >
      <InputBase
        sx={{ml: 1, flex: 1}}
        placeholder='Search'
        inputProps={{'aria-label': 'search'}}
      />
      <Button disabled>Clear</Button>
      <IconButton type="submit" sx={{p: '10px'}} aria-label="search">
        <SearchIcon/>
      </IconButton>
    </Paper>
  )
}

export default SearchBar