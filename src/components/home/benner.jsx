  import Carousal from 'react-multi-carousel';
  import { bannerData } from '../../constants/data';
  import "react-multi-carousel/lib/styles.css";


import { styled } from '@mui/material';


  const Image =styled('img')(({theme})=>({
    width:'100vw',
    height:240,
    [theme.breakpoints.down('md')]:{
      objectFit:'cover',
      height:190
    }
  }));

  const responsive = {
   
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  const Bennner =()=>{
    return(
        <Carousal 
        swipeable={false}
        draggable={false}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        keyBoardControl={true}
        itemClass="carousel-item-padding-40-px"
        responsive={responsive}
        >
        {
            bannerData.map((data,index)=>
                <Image key={index} src={data.url} alt="banner" />
                )
        }

        </Carousal>
    )
  }


  export default Bennner;