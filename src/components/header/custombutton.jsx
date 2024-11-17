import { Box, styled, Button, Typography, Badge, dialogContentClasses } from "@mui/material";
import ShoppingCart from '@mui/icons-material/ShoppingCart';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonPinIcon from '@mui/icons-material/PersonPin';

import { useState, useContext } from "react";
import { DataContext } from "../../context/dataProvider";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";



import LoginDialog from "../login/LoginDialog";
import Profile from './profile';




const Loginbar = styled(Box)(({ theme }) => ({
    display: 'flex',
    margin: '0 auto 0 auto',
    alignItems: 'center',
    '& > *': {
        marginRight: 90
    },
    [theme.breakpoints.down('md')]: {
        display: 'block'
    }
}))

const Loginbutton = styled(Button)(({ theme }) => ({
    boxShadow: 'none',
    borderRadius: 7,
    fontWeight: 600,
    color:'black',
    background: '#60bed1',
    [theme.breakpoints.down('md')]: {
        width: 30,
        marginLeft: 5
    }
}))


const Loginnerbar = styled(Box)(({ theme }) => ({
    display: 'flex',
    marginRight:0,
    [theme.breakpoints.down('md')]: {
        display: 'block'
    }
}));

const Hidden = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // '& > *':{
    //     marginRight:100
    // },
    [theme.breakpoints.down('md')]: {
        display: 'none'
    }
}))







const Custombuttom = () => {

    const [open, setOpen] = useState(false);

    const { account, setAccount } = useContext(DataContext);

    const {cartItems} =useSelector(state=>state.cart);

    const openDialog = () => {
        setOpen(true);
    }



    return (
        <Loginbar>
          
            <Hidden>
                <Typography style={{ marginLeft: 90, marginRight: 70 }}>Contact us</Typography>
                <Typography style={{ marginRight: 90 }}>More</Typography>
                <Loginnerbar style={{ marginRight: 90 }}>
                    <Link style={{ display: 'flex', textDecoration: 'none', color: 'inherit' }} to="/cart">
                        <Badge badgeContent={cartItems?.length} color="secondary">
                            <ShoppingCart />
                        </Badge>
                        <Typography style={{marginLeft:7}}>Cart</Typography>
                    </Link>
                </Loginnerbar>
            </Hidden>
            <LoginDialog open={open} setOpen={setOpen} />
            {
                account ? <><PersonPinIcon style={{marginRight:'-5'}} /><Profile account={account} setAccount={setAccount} /></>
                    :
                    <Loginbutton variant="contained" onClick={() => openDialog()}> Login</Loginbutton>
            }
        </Loginbar>
    )
}

export default Custombuttom;


