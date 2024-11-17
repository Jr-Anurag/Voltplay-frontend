import { InputBase, Box, styled, ListItem, List } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

import { useState, useEffect } from "react";


import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../../redux/actions/productActions';

import { Link } from "react-router-dom";

const Container = styled(Box)(({ theme }) => ({
    background: '#fff',
    width: '36%',
    borderRadius: 15,
    padding: 0,
    display: 'flex',
    [theme.breakpoints.down('md')]: {
        width: '70%'
    }
}))
const Inner = styled(InputBase)`
width:100%;
padding-left:10px;
`
const Icon = styled(Box)`
color: red;
margin-top: 4px;
margin-right: 7px;
`


const Listwap = styled(List)`
position:absolute;
background:#ffffff;
color:#000;
margin-top:36px;`

const Search = () => {

    const [text, setText] = useState('');

    const { products } = useSelector(state => state.getProducts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

    const getText = (text) => {
        setText(text);
    }

    return (
        <Container>
            <Inner placeholder="Seach for Products"
                onChange={(e) => getText(e.target.value)} 
                value={text} />
            <Icon>
                <SearchIcon />
            </Icon>
            {
                text &&
                <Listwap>
                    {
                        products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLocaleLowerCase())).map((product,index) => (
                            <Link key={index} to={`/product/${product.id}`} onClick={()=>setText('')} style={{textDecoration:'none',color:'inherit'}}>
                                <ListItem>{product.title.longTitle}</ListItem>
                            </Link>
                        ))
                    }
                </Listwap>
            }
        </Container>
    )
}

export default Search;