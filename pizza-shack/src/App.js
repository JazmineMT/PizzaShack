import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom'
import {Dropdown, Navbar} from 'react-bootstrap'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

function App() {
  return (
    <div className="App">
      <Router>
        <div className='topMenu '>
        <div className="first">
          <h3>Menu</h3>
            <Dropdown classname="menu" >
              <div>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                <ArrowDropDownIcon/>
              </Dropdown.Toggle>
              </div>

              <Dropdown.Menu className='dropdownmenu'>
                
                <Dropdown.Item className="dropdown">  <NavLink className='link' exact to='/pizza'>Pizza</NavLink>  </Dropdown.Item>
                <Dropdown.Item className="dropdown" >  <NavLink className='link' exact to='/wings'>Wings</NavLink>  </Dropdown.Item>
                <Dropdown.Item className="dropdown" >  <NavLink className='link' exact to='/sides'>Sides</NavLink>  </Dropdown.Item>
                <Dropdown.Item className="dropdown" >  <NavLink className='link' exact to='/pasta'>Pasta</NavLink>  </Dropdown.Item>
                <Dropdown.Item className="dropdown" >  <NavLink className='link' exact to='/dessert'>Dessert</NavLink>  </Dropdown.Item>
                <Dropdown.Item className="dropdown">  <NavLink className='link' exact to='/drinks'>Drinks</NavLink>  </Dropdown.Item>
              </Dropdown.Menu>
          </Dropdown>
          <NavLink className="links" exact to='/deals'> Deals</NavLink>
          </div>
          <h1 className="title">Pizza Shack</h1>
        <div className="first">
          <NavLink className="links" exact to='/home'> Home</NavLink>
          <NavLink className="links" exact to='/cart'><ShoppingCartIcon color="secondary"/></NavLink>
        </div>
        </div>
        <div className="secondHeader">
          <div className='welcome'>
         <h3>Welcome to Pizza Shack!</h3>
          <NavLink className='signIn' exact to ='/signIn'>(Sign In)</NavLink>
          </div>
          <div className='join'>
            <h3 className="textforborder">Not a Member of Shack Savings?</h3>
          <NavLink className='signIn' exact to='/register'>Join</NavLink>
          </div>
        </div>
        <Switch>
          <Route exact path ='/home'>

          </Route>
            <Route exact path ='/pizza'>
            
            </Route>
            <Route exact path ='/wings'>
            
            </Route>
            <Route exact path ='/sides'>
            
            </Route>
            <Route exact path ='/pasta'>
            
            </Route>
            <Route exact path ='/dessert'>
            
            </Route>
            <Route exact path ='/drinks'>
            
            </Route>
            <Route exact path ='/cart'>
            
            </Route>
            <Route exact path ='/signin'>
            
            </Route>
            <Route exact path ='/register'>
            
            </Route>
            <Route exact path ='/aboutUs'>
            
            </Route>
            <Route exact path ='/FAQs'>
            
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