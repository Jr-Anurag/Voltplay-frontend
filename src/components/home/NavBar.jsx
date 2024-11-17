import { Box, Typography ,styled} from '@mui/material'
import { navData } from '../../constants/data';


const Navbox =styled(Box)(({theme})=>({
display:'flex',
margin:'65px 130px 0 130px',
justifyContent:'space-between',
overflow:'hidden',
[theme.breakpoints.down('lg')]:{
margin:'25px 0px 0 10px'
}
}));

const Text =styled(Typography)`
font-size:14px;
font-weight:600;
font-family:inherit`


const NavBars = () => {
    return (
        <Navbox>
            {
                navData.map((data,index) => (
                    <Box key={index} style={{textAlign:'center'}}>
                        <img src={data.url} alt="item" style={{width:67}} />
                        <Text> {data.text}</Text>
                    </Box>
                ))
            }
        </Navbox>
    )
}


export default NavBars;