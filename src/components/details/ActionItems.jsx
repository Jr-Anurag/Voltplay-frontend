import { Box, Button, styled } from "@mui/material";
// import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


import { useState } from "react";


import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/cartAction";

import { payUsingPaytm } from "../../service/api";

import { post } from "../../util/paytm";

const LeftContainer = styled(Box)`
min-width:40%;
padding:40px 40px 0 40px;
object-fit: cover;`

const Image = styled('img')({

    width: '92%'
})

const StyledButton = styled(Button)(({ theme }) => ({
    width: '94%',
    height: 36,
    borderRadius: 9,
    // [theme.breakpoints.down('lg')]: {
    //     fontSize: 10.5
    // }
}))

const ActionItem = ({ product }) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { id } = product;

    const [quantity, setQuantity] = useState(1);

    const addItemToCart = () => {
        dispatch(addToCart(id, quantity));
        navigate('/cart')
    }

    const buyNow = async () => {
        let response = await payUsingPaytm({ amount: 500, email: 'www.spidypool@gmail.com' });
        let information = {
            action: 'http://securegw-stage.paytm.in/order/process',
            params: response
        }
        post(information);
    }

    return (
        <LeftContainer> <Box style={{ padding: '2px', border: '2px solid #5e1209', }}>
            <Image src={product.detailUrl} alt="products" />
        </Box>
            <Box style={{ display: 'flex', flexDirection:'column', alignItems: 'center', justifyContent: 'center', marginTop: 5 }}>
                <StyledButton variant="contained" onClick={() => addItemToCart()} style={{ marginBottom: 10, background: '#808080' }}><ShoppingCartIcon /> Add to Cart</StyledButton>
                <StyledButton variant="contained" onClick={() => buyNow()} style={{ background: '#5e1209' }}><ElectricBoltIcon />Buy Now</StyledButton>
            </Box>
            
        </LeftContainer>
    )
}


export default ActionItem;