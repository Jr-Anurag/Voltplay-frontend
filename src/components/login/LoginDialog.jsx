import { Dialog, Box, Typography, TextField, Button, styled } from '@mui/material'
import { useState, useContext } from 'react';
import { authenticateSignup, authenticateLogin } from '../../service/api';
import { Link } from 'react-router-dom';

import logo from './logo.png';
import upperlogo from './upperlogo.png';

import { DataContext } from '../../context/dataProvider';

const NewBox = styled(Box)(({ theme }) => ({
    height: '100vh',
    width: '100vw',
    margin: 0,
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: 'white',
    border: '2.9px solid black',
    [theme.breakpoints.down('md')]: {
        height: '100%',
        width: '100%',
    }
}));

const Newyou = styled(Typography)`
font-size:19px;
font-weight:700;
height:100%;
color: rgb(4, 40, 91);
`
const Newlog = styled(Box)`
display:flex;
flex-direction:column;
justify-content: center;
height:70%;
background:white;
padding:10px;
align-items:center;
width:70%;
margin:30px 0 auto 0;`

const Textinner = styled(TextField)`
font-weight:600;
margin;auto 0 20px 0;
color:black;`

const Policytext = styled(Typography)`
font-size:12px;
font-weight:600;
margin:20px 0 20px 0;`

const Loginbutton = styled(Button)`
font-size:17px;
font-weight:700;
color:white;
background:#5e1209`


const Newaccount = styled(Typography)`
color:rgb(8, 106, 252);
cursor:pointer;`

const Error = styled(Typography)`
font-size:11px;
color:#ff6161;
line-height:0;
margin-top:10px;
font-weight:600;`


const accountint = {
    login: {
        view: 'login'
    },
    signup: {
        view: 'signup'
    }
}

const signInt = {
    firstname: '',
    lastname: '',
    username: '',
    password: '',
    email: '',
    phone: ''

}

const loginint = {
    username: '',
    password: ''
}

const Logobox = styled(Link)`
height:70px;
margin:0;
padding:0;
width:75px;
object-fit: cover;
background: #5e1209
`




const LoginDialog = ({ open, setOpen }) => {

    const [account, toggleAccount] = useState(accountint.login);
    const [signup, setSignup] = useState(signInt);
    const [login, setLogin] = useState(loginint);
    const { setAccount } = useContext(DataContext);
    const [error, setError] = useState(false);


    const handleClose = () => {
        setOpen(false);
        toggleAccount(accountint.login);
        setError(false);
    }

    const toggle = () => {
        toggleAccount(accountint.signup)
    }

    const togglelogin = () => {
        toggleAccount(accountint.login)
    }

    const onInputchnage = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value });
    }


    const signupuser = async () => {
        let response = await authenticateSignup(signup);
        if (!response) return;
        handleClose();
        setAccount(signup.firstname);
    }

    const onvaluechange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
    }


    const LoginUser = async () => {
        try {
            let response = await authenticateLogin(login);
            console.log(response);
            if (response.status === 200) {
                handleClose();
                setAccount(response.data.data.firstname);
            } else {
                setError(true);
            }
        } catch (error) {

            console.log("erron in login details", error.message);
        }
    }

    const openit = () => {
        window.location.href = "/";

    }



    return (
        <Dialog PaperProps={{ style: { margin: 0, maxHeight: '100vh', maxWidth: '100vw', padding: 0, overflow: 'hidden' } }} open={open} onClose={() => handleClose()}>
            <NewBox style={{ margin: 0, padding: 0 }}>
                {
                    account.view === 'login' ? <>

                        <Logobox to='/'>
                            <img onClick={() => openit()} src={upperlogo} alt="logo" style={{ width: 75, height: 70, position: 'relative', mixBlendMode: 'normal', zIndex: 101 }} className="upperlogo" />
                            <img onClick={() => openit()} src={logo} alt="logo" style={{ width: 75, height: 70, position: 'relative', mixBlendMode: 'normal', zIndex: 101 }} className="logo" />
                        </Logobox>
                        <Box>
                            <Newyou>Nice to see you again....</Newyou>
                        </Box>

                        <Newlog>

                            <Textinner style={{ width: '100%' }} variant='standard' name='username' onChange={(e) => onvaluechange(e)} label="Enter Username" />
                            {error && <Error> Please enter valid user name or password</Error>
                            }
                            <Textinner style={{ width: '100%' }} variant='standard' name='password' onChange={(e) => onvaluechange(e)} label="Enter Password" />
                            <Policytext>By continuing, You are agree to our Voltplay Policies.</Policytext>
                            <Loginbutton onClick={() => LoginUser()}>Login</Loginbutton>
                            <Policytext> OR </Policytext>
                            <Newaccount onClick={() => toggle()}>Click Here.. if you are new to Voltplay </Newaccount>
                        </Newlog></>
                        : <>
                            <Logobox to='/'>
                                <img onClick={() => openit()} src={upperlogo} alt="logo" style={{ width: 75, height: 70, position: 'relative', mixBlendMode: 'normal', zIndex: 101 }} className="upperlogo" />
                                <img onClick={() => openit()} src={logo} alt="logo" style={{ width: 75, height: 70, position: 'relative', mixBlendMode: 'normal', zIndex: 101 }} className="logo" />
                            </Logobox>
                            <Box>
                                <Newyou>Nice to see you here..</Newyou>
                            </Box>
                            <Newlog>
                                <Textinner style={{ width: '100%' }} variant='standard' name='firstname' onChange={(e) => onInputchnage(e)} label="Enter Firt name" />
                                <Textinner style={{ width: '100%' }} variant='standard' name='lastname' onChange={(e) => onInputchnage(e)} label="Enter Last name " />
                                <Textinner style={{ width: '100%' }} variant='standard' name='username' onChange={(e) => onInputchnage(e)} label="Enter Username" />
                                <Textinner style={{ width: '100%' }} variant='standard' name='password' onChange={(e) => onInputchnage(e)} label="Enter Password" />
                                <Textinner style={{ width: '100%' }} variant='standard' name='email' onChange={(e) => onInputchnage(e)} label="Enter Email" />
                                <Textinner style={{ width: '100%' }} variant='standard' name='phone' onChange={(e) => onInputchnage(e)} label="Enter Phone Number" />
                                <Policytext>By continuing, You are agree to our Voltplay Policies.</Policytext>
                                <Loginbutton onClick={() => signupuser()}>Create account</Loginbutton>
                                <Newaccount onClick={() => togglelogin()}>Click Here..To Login</Newaccount>
                            </Newlog></>

                }


            </NewBox>


        </Dialog>
    )
}


export default LoginDialog;