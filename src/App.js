
import './App.css';
import { Box } from '@mui/material'
//componets
import Header from './components/header/Header';
import Home from './components/home/Home';
import DetailView from './components/details/DetailView';
import Cart from './components/cart/Cart';

import DataProvider from './context/dataProvider';


import { BrowserRouter, Routes,Route } from 'react-router-dom';


function App() {
  return (
    <DataProvider >
      <BrowserRouter>
        <Header  style={{ zIndex:100,position:'absolute',top:0,left:0 }} />
        <Box style={{ marginTop: 75 }}>
          <Routes>
            <Route path='/' element={ <Home/> }/>
            < Route path='/product/:id' element={<DetailView/>}/>
            <Route path='cart'  element={<Cart/>}/>
          </Routes>
        </Box>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
