import { Button } from '@mui/material';
import React from 'react'
import Searchbox from '../../components/Searchbox';
import SearchedJobs from './SearchedJobs';
import { Cradsearch, Div } from './style';
import FolderIcon from '@mui/icons-material/Folder';
const SearchCard = () => {


  return (

<Cradsearch>
    <Div>

    <Searchbox width="530px"/>
    <Button color="success" variant='outlined' style={{borderRadius:"40px",marginTop:"10px"}}  startIcon={<FolderIcon />}>Save Seach</Button>
    </Div>
    <SearchedJobs/>
</Cradsearch>
    )
}



export default SearchCard