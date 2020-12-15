import {useState} from 'react'
import { useHistory } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom'
import LandingPage from './Components/Pages/LandingPage'
import FAQs from './Components/Pages/FAQs'
import AboutUs from './Components/Pages/AboutUs'
import Pizza from './Components/Pages/Pizza'
import Wings from './Components/Pages/Wings'
import ShoppingCart from './Components/Pages/ShoppingCart'
import Register from './Components/Pages/Register'
import SignIn from './Components/Pages/SignIn'
import LocationFinder from './Components/Pages/LocationFinder'
import Pasta from './Components/Pages/Pasta'
import Drinks from './Components/Pages/Drinks'
import Deals from './Components/Pages/Deals'
import Desserts from './Components/Pages/Desserts'
import Sides from './Components/Pages/Sides'
import logo from './Components/Data/pics/logo.jpg'
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);



const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));


function App() {
  let history = useHistory();
  const [cart , setCart] = useState([]) 
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const addToCart = (item) => {
    setCart([...cart, item])
  }

  const removeFromCart = (item) => {
    setCart(cart.filter((i) => i.name !== item.name));
  };
  const removeSpecialFromCart = (item) => {
    setCart(cart.filter((i) => i.date !== item.date));
  };



  return (
    <div className="App">
      <Router>
        <div className='topMenu '>
          <img className='logo' src={logo}/>
        <div className="first"> 
        <button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        className='button'
        color="primary"
        onClick={handleClick}
      >
        Menu
      </button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem>

        <NavLink className='link' exact to='/pizza'>Pizza</NavLink>
        </StyledMenuItem>
        <StyledMenuItem>
        <NavLink className='link' exact to='/wings'>Wings</NavLink>
        </StyledMenuItem>
        <StyledMenuItem>
        <NavLink className='link' exact to='/sides'>Sides</NavLink> 
        </StyledMenuItem>
        <StyledMenuItem>
        <NavLink className='link' exact to='/pasta'>Pasta</NavLink>
        </StyledMenuItem>
        <StyledMenuItem>
        <NavLink className='link' exact to='/dessert'>Dessert</NavLink> 
        </StyledMenuItem>
        <StyledMenuItem>
        <NavLink className='link' exact to='/drinks'>Drinks</NavLink>
        </StyledMenuItem>
        <StyledMenuItem>
        <NavLink className='link' exact to='/locationfinder'> Pizza Shack Finder</NavLink> 
      </StyledMenuItem>
      </StyledMenu>
        
        <button   className='button'><NavLink className='linkb' exact to='/home'>Home</NavLink></button>
          <button   className='button'> <NavLink className='linkb' exact to='/deals'>Deals</NavLink> </button>
           <button  className='button'> <NavLink className='linkb' exact to='/cart'><div> My Cart ({cart.length})</div></NavLink></button>
        </div>
        </div>
        <div className="secondHeader">
          <div className='welcome'>
         <h3 className="textforborder" >Welcome to Pizza Shack!</h3>
          <NavLink className='signIn' exact to ='/signIn'>(Sign In)</NavLink>
          </div>
          <div className='join'>
            <h3 className="textforborder">Not a Member of Shack Savings?</h3>
          <NavLink className='signIn' exact to='/register'>Join</NavLink>
          </div>
        </div>
        <Switch>
          <Route exact path ='/home'>
            <LandingPage addToCart={addToCart}/>
          </Route>
            <Route exact path ='/pizza'>
              <Pizza  addToCart={addToCart}/>
            
            </Route>
            <Route exact path ='/wings'>
              <Wings addToCart={addToCart}/>
            </Route>
            <Route exact path ='/sides'>
              <Sides  addToCart={addToCart}/>
            </Route>
            <Route exact path ='/pasta'>
            <Pasta  addToCart={addToCart}/>
            </Route>
            <Route exact path ='/dessert'>
              <Desserts  addToCart={addToCart}/>
            </Route>
            <Route exact path ='/drinks'>
              <Drinks  addToCart={addToCart}/>
            </Route>
            <Route exact path ='/deals'>
              <Deals addToCart={addToCart}/>
            </Route>
            <Route exact path ='/cart'>
              <ShoppingCart  removeSpecail ={removeSpecialFromCart} remove={removeFromCart} order={cart}/>
            
            </Route>
            <Route exact path ='/locationfinder'>
                <LocationFinder/>
            </Route>
            <Route exact path ='/signin'>
              <SignIn/>
            
            </Route>
            <Route exact path ='/register'>
              <Register/>
            
            </Route>
            <Route exact path ='/aboutUs'>
              <AboutUs/>
            </Route>
            <Route exact path ='/FAQs'>
                <FAQs/>
            </Route>
        </Switch>
        <footer className='footer'>
          <div className='footermenu'>
          <h3> Menu</h3>
                  <NavLink className='link' exact to='/pizza'>Pizza</NavLink>  
                  <NavLink className='link' exact to='/wings'>Wings</NavLink>  
                  <NavLink className='link' exact to='/sides'>Sides</NavLink>  
                  <NavLink className='link' exact to='/pasta'>Pasta</NavLink>  
                  <NavLink className='link' exact to='/dessert'>Dessert</NavLink>  
                  <NavLink className='link' exact to='/drinks'>Drinks</NavLink>
          </div>  
          <div className='footer AboutUs'>
            <h3> About Us</h3>
            <NavLink className='link' exact to='/aboutUs'> Our Story </NavLink>

          </div>
          <div className='footer customer'>
            <h3> About Us</h3>
            <NavLink className='link' exact to='/FAQs'> FAQs </NavLink>

          </div>

        </footer>
        <p className='copyright'> @ Pizza Shack , LLC 2020</p>
      </Router>



    </div>
  );
}

export default App;
