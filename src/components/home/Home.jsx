import { Fragment, useEffect } from 'react';
import { Box, styled } from '@mui/material'

import NavBars from './NavBar';
import Bennner from './benner';
import Slide from './Slide';

import { getProducts } from '../../redux/actions/productActions';
import { useDispatch ,useSelector} from 'react-redux';

const Component = styled(Box)`
padding: 10px 10px;
background:#f6f6f6;
`

const Home = () => {

   const {products} = useSelector(state => state.getProducts)

    const dispatch = useDispatch();
    console.log(products);

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

    return (
        <Fragment>
            <NavBars />
            <Component>
                <Bennner />
                <Slide products={products} title="Deal of the day" timer={true}/>
                <Slide products={products} title="Trending offer" timer={false}/>
                <Slide products={products} title="Season tops" timer={false}/>
                <Slide products={products} title="Best discount on Items" timer={false}/>
            </Component>

        </Fragment>

    )
}

export default Home;