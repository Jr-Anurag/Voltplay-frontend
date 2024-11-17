import { Box, Typography,MenuItem,Menu,styled } from '@mui/material';
import { useState } from 'react';




const LoginName= styled(Typography)`
font-size:20px;
font-weight:700;
color:yellow;
margin:0 auto 0 10px;
cursor:pointer;
text-transform:uppercase;
`

const Logoutbutton=styled(MenuItem)`
curser:pointer;`


const Profile = ({ account ,setAccount}) => {

const [open,setOpen]= useState(false);

const handleClick=(event)=>{
    setOpen(event.currentTarget);
}

const handleClose=()=>{
    setOpen(false);
}

const Logout =()=>{
setAccount('');
}

    return (
        <>
            <Box onClick={handleClick}><LoginName>  {account}</LoginName></Box>
            <Menu
                anchorEl={open}
                open={Boolean(open)}
                onClose={handleClose}
            >
                {/* <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem> */}
                <Logoutbutton onClick={()=>{handleClose();Logout()}}>Logout</Logoutbutton>
            </Menu>
        </>
    )
}

export default Profile;