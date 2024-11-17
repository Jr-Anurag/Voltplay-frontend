import { AppBar, Toolbar, styled, Box, Drawer, List, ListItem, ListItemButton } from '@mui/material';
import Search from './search'
import Custombuttom from './custombutton';
import logo from './logo.png';
import upperlogo from './upperlogo.png';
import { Link } from 'react-router-dom';
// import { Menu } from '@mui/icons-material';
import { useState } from 'react';
import './img.css';

const Styleheader = styled(AppBar)`
background: #5e1209;
display: flex;
justify-content: center;
height: 70px;
`
const Logobox = styled(Link)`
height:70px;
margin:0;
padding:0;
width:75px;
object-fit: cover;
background: #5e1209
`

const CustomButtonWap = styled(Box)(({ theme }) => ({
  margin: '0 5% 0 auto',
  [theme.breakpoints.down('md')]: {
    display: 'flex',
    margin: '0 7px 0 auto'
  }
}));


// const MenuButton = styled(IconButton)(({ theme }) => ({
//   display: 'none',
//   color: 'inherit',
//   [theme.breakpoints.down('md')]: {
//     display: 'block'
//   }
// }));



const Header = () => {
  // const logo1URL='https://drive.google.com/file/d/1PSKZoqIzRHGz_xU3rfees9W93q1GjRE7/view?usp=drivesdk'
  // const lightURL='https://drive.google.com/file/d/1PjQDPzVvXlIFnV45Y45nRTNDB7re_Rxz/view?usp=drivesdk'
  const [open, setOpen] = useState(false);
  // const [logo,setLogo] = useState()

  // const handleOpen = () => {
  //   setOpen(true);
  // }

  const handleClose = () => {
    setOpen(false);
  }

  const list = () => {
    return (<Box style={{ width: 300 }} onClick={handleClose}>
      <List>
        <ListItem>
          <ListItemButton>
            <Custombuttom />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>)
  }

  return (
    <Styleheader>
      <Toolbar style={{paddingRight:0,paddingLeft:0}}>
        <Logobox  to='/'>
           <img src={upperlogo} alt="logo" style={{ width: 75, height: 70 ,position:'relative',mixBlendMode:'normal' ,zIndex:101}} className="upperlogo"/>
          <img src={logo} alt="logo" style={{ width: 75, height: 70,position:'relative',mixBlendMode:'normal', zIndex:101 }}  className="logo"/>
        </Logobox>
        <Search />
        <CustomButtonWap>
          <Custombuttom />
        </CustomButtonWap>

        {/* <MenuButton onClick={handleOpen}>
          <Menu />
        </MenuButton> */}

        <Drawer open={open} onClose={handleClose}>
          {list()}
        </Drawer>

      </Toolbar>
    </Styleheader>
  )
}



export default Header;