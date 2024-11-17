import { Typography, Box, styled, Table, TableBody, TableCell, TableRow } from '@mui/material';
// import LocalOfferIcon from '@mui/icons-material/LocalOffer';
// import StartIcon from '@mui/icons-material/Start';
// import AddBoxIcon from '@mui/icons-material/AddBox';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import DiscountIcon from '@mui/icons-material/Discount';




const Textsmall = styled(Box)`
matgin-top:10px;
vertical-align:baseline;
&>p{
    font-size:14px;
}
`

const ProductDetails = ({ product }) => {

    const date = new Date(new Date().getTime() + (5 * 24 * 60 * 1000));

    return (<Box style={{
        backgroundImage: 'white'
    }}>
        <Typography style={{ fontSize: '30px' }}>{product.title.longTitle}</Typography>
        <Typography style={{ marginTop: 5, color: '#085880', fontSize: 14 }}>
            8 Rating && 2 Reviews
        </Typography>
        <Typography style={{ display: 'flex', flexDirection: 'row',alignItems:'center', marginBottom: 5 }}>
            <Box component="span" style={{ color: '#42b36b', marginRight:'20px' }} >You save -&nbsp;{product.price.discount}</Box>
            <Box component="span" style={{ fontSize: 28, marginRight:'20px' }} >₹{product.price.cost}</Box>
            <Box component="span" style={{ color: '#878787', marginRight:'10px' }} >Original price &nbsp;₹<strike>{product.price.mrp}</strike></Box>

        </Typography>
        <Typography style={{display:'flex',alignItems:'center',fontWeight:600,marginBottom:10}} > <DiscountIcon  style={{marginRight:20}} />Offer for You</Typography>
        <Textsmall>
           
            <Typography><AccountBalanceIcon style={{ marginRight: 10, color: '#c49647', fontSize: 15 }} /> Get extra 20% off upto ₹50 on UPI</Typography>
            <Typography><AccountBalanceIcon style={{ marginRight: 10, color: '#c49647', fontSize: 15 }} />₹2000 Off On Axis Bank Credit Card Non EMI Transactions.</Typography>
            <Typography><AccountBalanceIcon style={{ marginRight: 10, color: '#c49647', fontSize: 15 }} />₹2000 Off On HDFC Bank Credit Card Non EMI Transactions</Typography>
            <Typography><AccountBalanceIcon style={{ marginRight: 10, color: '#c49647', fontSize: 15 }} />Get extra ₹3000 off (price inclusive of cashback/coupon)</Typography>
        </Textsmall>
        <Table style={{ marginTop: 10 }}>
            <TableBody>
                <TableRow>
                    <TableCell style={{ color: '#878787', fontSize: 14 }}> Delivery-</TableCell>
                    <TableCell style={{ fontWeight: '600', fontSize: 14 }}> Delivery by {date.toDateString()} | ₹20</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell style={{ color: '#878787', fontSize: 14 }}> Warrenty-</TableCell>
                    <TableCell style={{ fontWeight: '600', fontSize: 14 }}>No Warrenty </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell style={{ color: '#878787', fontSize: 14 }}> Seller-</TableCell>
                    <TableCell style={{ fontWeight: '600', color: '#ee2548', fontSize: 17 }}> TEIFIC </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell style={{ color: '#878787', fontSize: 14 }}>Return</TableCell>
                    <TableCell style={{ fontWeight: '600', fontSize: 15 }}>14 Day Return Policy</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell style={{ color: '#878787', fontSize: 14, marginTop: 5, padding: 0 }}> Description-</TableCell>
                    <TableCell > {product.description} </TableCell>
                </TableRow>

            </TableBody>
        </Table>
    </Box>
    )
}


export default ProductDetails;