import React from 'react';
import Carousal from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import { Button, Box, styled, Typography, Divider } from '@mui/material';
import Countdown from 'react-countdown';

import { Link } from 'react-router-dom';

const responsive = {

    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};


const Component = styled(Box)`
  margin-top:10px;
  background:#fff;`

const Deal = styled(Box)`
  padding:15px 10px;
  display:flex;
  `

const Image = styled('img')({
    width: 25,
    height: 25,
    margin: '0 5px 0 10px'
})

const ButtonAll = styled(Button)`
  height:30px;
  margin-left:auto;`

const ProductImage = styled('img')({
    width: 'auto',
    height: 150
})

const Text = styled(Typography)`
  font-size:14px;
  margin:2px 0 2px 0;`


const Slide = ({ products, title, timer }) => {
    const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';
    return (
        <Component>
            <Deal>
                <Typography style={{ fontWeight: 700 }}>{title}</Typography>
                {
                    timer &&
                    <>
                        <Image src={timerURL} alt="timer" />
                        <Countdown date={Date.now() + 5.04e+7} />
                    </>
                }
                <ButtonAll variant='contained' color='primary'>View All</ButtonAll>
            </Deal>
            <Divider />
            <Carousal
                swipeable={false}
                draggable={false}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={4000}
                keyBoardControl={true}
                itemClass="carousel-item-padding-40-px"
                responsive={responsive}>
                {
                    products.map((product,index) => (
                        <Link key={index} to={`product/${product.id}`} style={{textDecoration:'none'}}>
                            <Box textAlign="center" style={{ padding: '20px 20px',border:'3.5px solid gray' , margin:5,borderRadius:12}}>
                                <React.Fragment key={product.id}>
                                <ProductImage src={product.url} alt="products" />
                                </React.Fragment>
                                <Text style={{ fontWeight: 600, color: '#212121' }}> {product.title.shortTitle}</Text>
                                <Text style={{ color: 'green' }}> {product.discount}</Text>
                                <Text style={{ color: '#212121', opacity: 0.6 }}> {product.tagline}</Text>
                            </Box>
                        </Link>
                    ))
                }

            </Carousal>
        </Component>
    )
}


export default Slide;