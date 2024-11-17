import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";


import { getProductDetails } from "../../redux/actions/productActions";
import ProductDetails from "./ProductDetails";
import ActionItem from "./ActionItems";

import { Box, styled, Grid } from '@mui/material';



const DetailView = () => {

    const dispatch = useDispatch();
    const { id } = useParams();

    const { loading, product } = useSelector(state => state.getProductDetails);

    useEffect(() => {
        if (product && id !== product.id)
            dispatch(getProductDetails(id))
    }, [dispatch, id, product, loading])


    const Component = styled(Box)`
    background:#f6f6f6;
    margin-top:55px;`

    const Contain = styled(Grid)(({ theme }) => ({
        background: '#fffff',
        display: 'flex',
        [theme.breakpoints.down('md')]: {
            margin: 0
        }
    }))





    const RightContaner = styled(Grid)`
margin-top:0px;
padding:0px;`


    console.log(product);

    return (
        <Component>{
            product && Object.keys(product).length &&
            <Contain container>
                <Grid item lg={4} md={4} sm={8} xs={12}>
                    <ActionItem product={product} />
                </Grid>
                <RightContaner item lg={8} md={8} sm={8} xs={12}>

                    <ProductDetails product={product} />
                </RightContaner>
            </Contain>

        }
        </Component>
    )

}





export default DetailView;