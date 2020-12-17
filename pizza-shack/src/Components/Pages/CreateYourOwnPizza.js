import React ,{useState, useEffect, useRef} from 'react'
import {ToppingTitle, ToppingBox, LargeBox, ButtonAndTotal, Box, RadioBox, ToppingsBox, Boxes, Pizza, Container} from '../styles/PizzaStyles'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { Button } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import { FormHelperText } from '@material-ui/core';

const initailFormValues ={
          
  name: 'specail',
  size: 'Medium',
  sauce:'Marinara',
  crust: 'Regular',
  date: new Date(),
  price: 0 ,
  cheese:{
      extraCheese: false
  },
  toppings:{
      mushroom: false,
    pepperoni: false,
    sausage: false,
    onions: false,
    pineapple:false,
    greenPeppers: false,
    olives: false,
    jalepenos: false
  },


}

  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(0),
      borderRadius: '10px',
      minWidth: 300,
      backgroundColor: '#FFF5D0',

    },
    toppings: {
        width: '40%',
        padding: '4%',
        textAlign: 'center',

 
    },
    cheese: {
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '3%',
    }
  }));


export default function CreateYourOwnPizza(props){
    const classes = useStyles();
    const [values, setValues] = useState(initailFormValues);
    const [total, setTotal] = useState(0);
    const [size , setSize] = useState("scale(.7)")
    const [crust , setCrust] = useState("Regular")
    const [sauce , setSauce ] = useState("Marinara")
    const item = [values, total]
    const [olives , setOlives] = useState(false)
    const [mushrooms , setMushrooms] = useState(false)
    const [pepperoni , setPepperoni] = useState(false)
    const [sausage , setSausage] = useState(false)
    const [onions , setOnions] = useState(false)
    const [pineapple , setPineapple] = useState(false)
    const [greenPeppers , setGreenPeppers] = useState(false)
    const [jalepenos , setJalepenos] = useState(false)
    const [extraCheddar , setExtraCheddar] = useState(false)

    

    useEffect(() => {
        setTotal(15)

    },[])


   
    const handleChange = (evt) => {
        const {name , value} = evt.target
  
        
      if(value === 'Marinara'){
        setSauce('Marinara')
      }else if( value === 'White'){
        setSauce('White')
      }else if(value === 'BBQ'){
        setSauce('BBQ')
      }else if( value === 'Buffalo'){
        setSauce('Buffalo')
      }


        if( value === 'Small' && values.size === 'Medium'){
            setTotal(total - 5)
            setSize("scale(.6)")
        }else if(value === 'Small' && values.size === 'Large'){
          setTotal(total - 10)
          setSize("scale(.6)")
        }else if(value === 'Small' && values.size === 'Extra-Large'){
          setTotal(total - 15)
          setSize("scale(.6)")
        }
        
        
        
        
        if(value === 'Medium' && values.size === 'Small'){
            setTotal(total + 5)
            setSize("scale(.7)")
        }else if(value === 'Medium' && values.size === 'Large'){
            setTotal(total - 5)
            setSize("scale(.7)")
        }else if(value === 'Medium' && values.size === 'Extra-Large'){
          setTotal(total - 10)
          setSize("scale(.7)")
      }
        
        
        if(value === 'Large' && values.size === 'Small'){
            setTotal(total + 10)
            setSize("scale(.8)")
        }else if(value === 'Large' && values.size ==='Medium '){
          setTotal(total + 5)
          setSize("scale(.8)")
        }else if(value === 'Large' && values.size === 'Extra-Large'){
          setTotal(total - 5)
          setSize("scale(.8)")
        }

        
        if( value === 'Extra-Large' && values.size === 'Small'){
            setTotal(total + 15)
            setSize("scale(.9)")
        }else if(value === 'Extra-Large' && values.size === 'Medium'){
          setTotal(total + 10)
          setSize("scale(.9)")
        }else if (value === 'Extra-Large' && values.size === 'Large'){
          setTotal(total + 5)
          setSize("scale(.9)")
        }

        if( value === 'Garlic'){
            setCrust("Garlic")
        }else if(value === 'Pretzel'){
          setCrust("Pretzel")
        }else if(value === 'Cheese Filled'){
          setCrust("Regular")
        }else if(value === 'Regular'){
          setCrust("Regular")
        }


        setValues({
            ...values,
            [name]:value,
            
          });
      };


        const onCheeseChange = evt => {
        const { name, checked } = evt.target

        if(checked === true){
            setTotal(total + 1.50)
            setExtraCheddar(true)
        }else if(checked === false){
            setTotal(total - 1.50)
            setExtraCheddar(false)
        }
        
        setValues({
            ...values,
            cheese: {
            ...values.extraCheese,
            [name]: checked,
            }
        })
        }

        const onCheckBoxChange = evt => {

            const { name, checked } = evt.target
            if( name === 'pepperoni' && checked === true || 'sausage' && checked === true){
                setTotal(total + .50)
            }else if( name === 'pepperoni' && checked === false || 'sausage' && checked === false){
                setTotal(total - .50)
            }


            if (name === 'olives' && olives === false){
              setOlives(true)
              
            }else if (name === 'olives' && olives === true){
              setOlives(false)
            }

            if (name === 'mushroom' && mushrooms === false){
              setMushrooms(true)
              
            }else if (name === 'mushroom' && mushrooms=== true){
              setMushrooms(false)
            }

            if (name === 'pepperoni' && pepperoni === false){
              setPepperoni(true)
              
            }else if (name === 'pepperoni' && pepperoni === true){
              setPepperoni(false)
            }

            if (name === 'sausage' && sausage === false){
              setSausage(true)
              
            }else if (name === 'sausage' && sausage === true){
              setSausage(false)
            }

            if (name === 'onions' && onions === false){
              setOnions(true)
              
            }else if (name === 'onions' && onions === true){
              setOnions(false)
            }

            if (name === 'pineapple' && pineapple === false){
              setPineapple(true)
              
            }else if (name === 'pineapple' && pineapple === true){
              setPineapple(false)
            }

            if (name === 'greenPeppers' && greenPeppers === false){
              setGreenPeppers(true)
              
            }else if (name === 'greenPeppers' && greenPeppers === true){
              setGreenPeppers(false)
            }

            if (name === 'jalepenos' && jalepenos === false){
              setJalepenos(true)
              
            }else if (name === 'jalepenos' && jalepenos === true){
              setJalepenos(false)
            }

















            setValues({
                ...values,
                toppings: {
                ...values.toppings,
                [name]: checked,
                }
            })
            }

            const onClick = (evt )=> {
              evt.preventDefault()
              props.addToCart(
                {
                  name: 'specail',
                  size: values.size,
                  sauce: values.sauce,
                  crust: values.crust,
                  date: Date.now(),
                  price: total ,
                  cheese:Object.keys(values.cheese)
                  .filter(extra =>(values.cheese[extra] === true))
                ,
                  toppings: Object.keys(values.toppings)
                  .filter(toppingName =>(values.toppings[toppingName] === true))
                },
              )
              setValues(initailFormValues)
              setTotal(15)
              setOlives(false)
              setMushrooms(false)
              setPepperoni(false)
              setSausage(false)
              setOnions(false)
              setPineapple(false)
              setGreenPeppers(false)
              setJalepenos(false)
              setExtraCheddar(false)
            

              
            }

    return(
        <LargeBox>
      
          <Pizza  style={{transform: `${size}`}}>

        {extraCheddar ?
          <>
                    <section class="extraCheese one"></section>
      <section class="extraCheese two"></section>
      <section class="extraCheese three"></section>
      <section class="extraCheese four"></section>
      <section class="extraCheese five"></section>
      <section class="extraCheese six"></section>
      <section class="extraCheese seven"></section>
      <section class="extraCheese eight"></section>
      <section class="extraCheese nine"></section>
      <section class="extraCheese ten"></section>

      <section class="extraCheese eleven"></section>
      <section class="extraCheese twelve"></section>
      <section class="extraCheese thirteen"></section>
      <section class="extraCheese fourteen"></section>
      <section class="extraCheese fifteen"></section>
      <section class="extraCheese sixteen"></section>
      <section class="extraCheese seventeen"></section>
      <section class="extraCheese eightteen"></section>
      <section class="extraCheese nineteen"></section>
      <section class="extraCheese twenty"></section>
      <section class="extraCheese twenty-one"></section>

          </>
        : null}        

        {jalepenos ? 
        <>
          <section class="jalepenos one"></section>
          <section class="jalepenos two"></section>
          <section class="jalepenos three"></section>
          <section class="jalepenos four"></section>
          <section class="jalepenos five"></section>
          <section class="jalepenos six"></section>
          <section class="jalepenos seven"></section>
          <section class="jalepenos eight"></section>
          <section class="jalepenos nine"></section>
          <section class="jalepenos ten"></section>

          <section class="jalepenos eleven"></section>
          <section class="jalepenos twelve"></section>
          <section class="jalepenos thirteen"></section>
          <section class="jalepenos fourteen"></section>
          <section class="jalepenos fifteen"></section>
          <section class="jalepenos sixteen"></section>
          <section class="jalepenos seventeen"></section>
          <section class="jalepenos eightteen"></section>
          <section class="jalepenos nineteen"></section>
          <section class="jalepenos twenty"></section>
          <section class="jalepenos twenty-one"></section>

        </>
      : null}    
      
        {onions ? 
        <>
        <section class="onions one"></section>
      <section class="onions two"></section>
      <section class="onions three"></section>
      <section class="onions four"></section>
      <section class="onions five"></section>
      <section class="onions six"></section>
      <section class="onions seven"></section>
      <section class="onions eight"></section>
      <section class="onions nine"></section>
      <section class="onions ten"></section>

      <section class="onions eleven"></section>
      <section class="onions twelve"></section>
      <section class="onions thirteen"></section>
      <section class="onions fourteen"></section>
      <section class="onions fifteen"></section>
      <section class="onions sixteen"></section>
      <section class="onions seventeen"></section>
      <section class="onions eightteen"></section>
      <section class="onions nineteen"></section>
      <section class="onions twenty"></section>
      <section class="onions twenty-one"></section>

        </>
      
          : null }

      { olives ? 
      <>
            <section class="olives one"></section>
            <section class="olives two"></section>
            <section class="olives three"></section>
            <section class="olives four"></section>
            <section class="olives five"></section>
            <section class="olives six"></section>
            <section class="olives seven"></section>
            <section class="olives eight"></section>
            <section class="olives nine"></section>
            <section class="olives ten"></section>

            <section class="olives eleven"></section>
            <section class="olives twelve"></section>
            <section class="olives thirteen"></section>
            <section class="olives fourteen"></section>
            <section class="olives fifteen"></section>
            <section class="olives sixteen"></section>
            <section class="olives seventeen"></section>
            <section class="olives eightteen"></section>
            <section class="olives nineteen"></section>
            <section class="olives twenty"></section>

            <section class="olives twenty-one"></section> 
        </>
      :null }


          { greenPeppers ?
          <>
          <section class="green-pepper one"></section>
      <section class="green-pepper two"></section>
      <section class="green-pepper three"></section>
      <section class="green-pepper four"></section>
      <section class="green-pepper five"></section>
      <section class="green-pepper six"></section>
      <section class="green-pepper seven"></section>
      <section class="green-pepper eight"></section>
      <section class="green-pepper nine"></section>
      <section class="green-pepper ten"></section>

      <section class="green-pepper eleven"></section>
      <section class="green-pepper twelve"></section>
      <section class="green-pepper thirteen"></section>
      <section class="green-pepper fourteen"></section>
      <section class="green-pepper fifteen"></section>
      <section class="green-pepper sixteen"></section>
      <section class="green-pepper seventeen"></section>
      <section class="green-pepper eightteen"></section>
      <section class="green-pepper nineteen"></section>
      <section class="green-pepper twenty"></section>

      <section class="green-pepper twenty-one"></section>
          </>  
        
        
        :null }
    
    
      { mushrooms ?
      
        <>
         <section class="mushroom one">
        <div class="cap">1</div>
        <div class="stem"></div>
      </section>

      <section class="mushroom two">
        <div class="cap">2</div>
        <div class="stem"></div>
      </section>

      <section class="mushroom three">
        <div class="cap">3</div>
        <div class="stem"></div>
      </section>

      <section class="mushroom four">
        <div class="cap">4</div>
        <div class="stem"></div>
      </section>

      <section class="mushroom five">
        <div class="cap">5</div>
        <div class="stem"></div>
      </section>

      <section class="mushroom six">
        <div class="cap">6</div>
        <div class="stem"></div>
      </section>

      <section class="mushroom seven">
        <div class="cap">7</div>
        <div class="stem"></div>
      </section>

      <section class="mushroom eight">
        <div class="cap">8</div>
        <div class="stem"></div>
      </section>

      <section class="mushroom nine">
        <div class="cap">9</div>
        <div class="stem"></div>
      </section>

      <section class="mushroom ten">
        <div class="cap">10</div>
        <div class="stem"></div>
      </section>

      <section class="mushroom eleven">
        <div class="cap">11</div>
        <div class="stem"></div>
      </section>

      <section class="mushroom twelve">
        <div class="cap">12</div>
        <div class="stem"></div>
      </section>

      <section class="mushroom thirteen">
        <div class="cap">13</div>
        <div class="stem"></div>
      </section>

      <section class="mushroom fourteen">
        <div class="cap">14</div>
        <div class="stem"></div>
      </section>

      <section class="mushroom fifteen">
        <div class="cap">15</div>
        <div class="stem"></div>
      </section>

      <section class="mushroom sixteen">
        <div class="cap">16</div>
        <div class="stem"></div>
      </section>

      <section class="mushroom seventeen">
        <div class="cap">17</div>
        <div class="stem"></div>
      </section>

      <section class="mushroom eighteen">
        <div class="cap">18</div>
        <div class="stem"></div>
      </section>

      <section class="mushroom nineteen">
        <div class="cap">19</div>
        <div class="stem"></div>
      </section>

      <section class="mushroom twenty">
        <div class="cap">20</div>
        <div class="stem"></div>
      </section>

      <section class="mushroom twenty-one">
        <div class="cap">21</div>
        <div class="stem"></div>
      </section>

      <section class="mushroom twenty-two">
        <div class="cap">22</div>
        <div class="stem"></div>
      </section>

      <section class="mushroom twenty-three">
        <div class="cap">23</div>
        <div class="stem"></div>
      </section>

      <section class="mushroom twenty-four">
        <div class="cap">24</div>
        <div class="stem"></div>
      </section>

      <section class="mushroom twenty-five">
        <div class="cap">25</div>
        <div class="stem"></div>
      </section>

      <section class="mushroom twenty-six">
        <div class="cap">26</div>
        <div class="stem"></div>
      </section>

      <section class="mushroom twenty-seven">
        <div class="cap">27</div>
        <div class="stem"></div>
      </section>

      <section class="mushroom twenty-eight">
        <div class="cap">28</div>
        <div class="stem"></div>
      </section>

      <section class="mushroom twenty-nine">
        <div class="cap">29</div>
        <div class="stem"></div>
      </section>

      <section class="mushroom thirty">
        <div class="cap">30</div>
        <div class="stem"></div>
      </section>

      <section class="mushroom thirty-one">
        <div class="cap">31</div>
        <div class="stem"></div>
      </section>

      <section class="mushroom thirty-two">
        <div class="cap">31</div>
        <div class="stem"></div>
      </section>
        </>
    
          : null  }

        {pepperoni ? 
          <>
            <section class="pep one">1</section>
      <section class="pep two">2</section>
      <section class="pep three">3</section>
      <section class="pep four">4</section>
      <section class="pep five">5</section>
      <section class="pep six">6</section>
      <section class="pep seven">7</section>
      <section class="pep eight">8</section>
      <section class="pep nine">9</section>
      <section class="pep ten">10</section>

      <section class="pep eleven">11</section>
      <section class="pep twelve">12</section>
      <section class="pep thirteen">13</section>
      <section class="pep fourteen">14</section>
      <section class="pep fifteen">15</section>
      <section class="pep sixteen">16</section>
      <section class="pep seventeen">17</section>
      <section class="pep eightteen">18</section>
      <section class="pep nineteen">19</section>
      <section class="pep twenty">20</section>

      <section class="pep twenty-one">21</section>
      <section class="pep twenty-two">22</section>
      <section class="pep twenty-three">23</section>
      <section class="pep twenty-four">24</section>
      <section class="pep twenty-five">25</section>
      <section class="pep twenty-six">26</section>
      <section class="pep twenty-seven">27</section>
      <section class="pep twenty-eight">28</section>
      <section class="pep twenty-nine">29</section>
      <section class="pep thirty">30</section>

      <section class="pep thirty-one">31</section>
      <section class="pep thirty-three">33</section>
          </>
      
      : null }

          {sausage ?
          <>

<section class="sausage one">1</section>
      <section class="sausage two">2</section>
      <section class="sausage three">3</section>
      <section class="sausage four">4</section>
      <section class="sausage five">5</section>
      <section class="sausage six">6</section>
      <section class="sausage seven">7</section>
      <section class="sausage eight">8</section>
      <section class="sausage nine">9</section>
      <section class="sausage ten">10</section>

      <section class="sausage eleven">11</section>
      <section class="sausage twelve">12</section>
      <section class="sausage thirteen">13</section>
      <section class="sausage fourteen">14</section>
      <section class="sausage fifteen">15</section>
      <section class="sausage sixteen">16</section>
      <section class="sausage seventeen">17</section>
      <section class="sausage eightteen">18</section>
      <section class="sausage nineteen">19</section>
      <section class="sausage twenty">20</section>

      <section class="sausage twenty-one">21</section>
      <section class="sausage twenty-two">22</section>
      <section class="sausage twenty-three">23</section>
      <section class="sausage twenty-four">24</section>
      <section class="sausage twenty-five">25</section>
      <section class="sausage twenty-six">26</section>
      <section class="sausage twenty-seven">27</section>
      <section class="sausage twenty-eight">28</section>
      <section class="sausage twenty-nine">29</section>
      <section class="sausage thirty">30</section>

      <section class="sausage thirty-one">31</section>
      <section class="sausage thirty-three">33</section>

          </>
        
        
        : null }

     
      {pineapple ? 
        <>
         <section class="pineapple one"></section>
      <section class="pineapple two"></section>
      <section class="pineapple three"></section>
      <section class="pineapple four"></section>
      <section class="pineapple five"></section>
      <section class="pineapple six"></section>
      <section class="pineapple seven"></section>
      <section class="pineapple eight"></section>
      <section class="pineapple nine"></section>
      <section class="pineapple ten"></section>

      <section class="pineapple eleven"></section>
      <section class="pineapple twelve"></section>
      <section class="pineapple thirteen"></section>
      <section class="pineapple fourteen"></section>
      <section class="pineapple fifteen"></section>
      <section class="pineapple sixteen"></section>
      <section class="pineapple seventeen"></section>
      <section class="pineapple eightteen"></section>
      <section class="pineapple nineteen"></section>
      <section class="pineapple twenty"></section>

      <section class="pineapple twenty-one"></section>
        </>
    
        :null }

        { crust === "Regular" &&

          <section class="crust ">
           {sauce === 'Marinara' && 
               <section class='sauce'></section>
          }
          {sauce === 'White' &&
            <section class="sauce sauce-white"></section>
          }

          {sauce === 'BBQ' && 
            <section class="sauce sauce-bbq"></section>
          }

          {sauce === 'Buffalo' && 
            <section class="sauce sauce-buffalo"></section>
          
          }
          <section class="cheese"></section>
          </section>
        }
      

        { crust === "Garlic" && 
        
        <section class="crust crust-garlic ">
          {sauce === 'Marinara' && 
               <section class='sauce'></section>
          }
          {sauce === 'White' &&
            <section class="sauce sauce-white"></section>
          }

          {sauce === 'BBQ' && 
            <section class="sauce sauce-bbq"></section>
          }

          {sauce === 'Buffalo' && 
            <section class="sauce sauce-buffalo"></section>
          
          }
        <section class="cheese"></section>
         </section>

        
        }

        {crust === "Pretzel" && 
        
        
        <section class="crust crust-pretzel ">
          {sauce === 'Marinara' && 
               <section class='sauce'></section>
          }
          {sauce === 'White' &&
            <section class="sauce sauce-white"></section>
          }

          {sauce === 'BBQ' && 
            <section class="sauce sauce-bbq"></section>
          }

          {sauce === 'Buffalo' && 
            <section class="sauce sauce-buffalo"></section>
          
          }
        <section class="cheese"></section>
        </section>
        
        
        }





          </Pizza>
        <Container>
        <ToppingBox>
         <ToppingTitle> <h3> Size </h3></ToppingTitle>
                    <FormControl component="fieldset" >
                    <RadioGroup aria-label="gender" name="size" value={values.size} onChange={handleChange}>
                    <RadioBox>
                        <FormControlLabel   value="Small" control={<Radio />} label="Small" />
                        <FormControlLabel  value="Medium" control={<Radio />} label="Medium" />
                        <FormControlLabel value="Large" control={<Radio />} label="Large" />
                        <FormControlLabel value="Extra-Large" control={<Radio />} label="Extra-Large" />
                    </RadioBox>
                </RadioGroup>
                </FormControl>
         </ToppingBox>
         <ToppingBox>
         <ToppingTitle> <h3> Crust </h3></ToppingTitle>
         <Boxes>
         <h3> Select a Crust Type</h3>
         <FormControl className={classes.formControl} >
        <Select
          
          value={values.crust}
          onChange={handleChange}
          name="crust"
        >
          <MenuItem  value="Regular">Regular</MenuItem>
          <MenuItem value='Garlic'>Garlic</MenuItem>
          <MenuItem value='Pretzel'>Pretzel</MenuItem>
          <MenuItem value='Cheese Filled'>Cheese Filled</MenuItem>
        </Select>
      </FormControl >
      </Boxes>
         </ToppingBox>
         <ToppingBox>
         <ToppingTitle> <h3> Sauce </h3></ToppingTitle>
                    <FormControl component="fieldset"  >
                    <RadioGroup  aria-label="gender" name="sauce" value={values.sauce} onChange={handleChange} >
                    <RadioBox>
                    <FormControlLabel value="Marinara" control={<Radio />} label="Marinara" />
                    <FormControlLabel value="White" control={<Radio />} label="White" />
                    <FormControlLabel value="BBQ" control={<Radio />} label="BBQ" />
                    <FormControlLabel value="Buffalo" control={<Radio />} label="Buffalo" />
                    </RadioBox>
                    </RadioGroup>
                    </FormControl>
         </ToppingBox>
         <ToppingBox>
         <ToppingTitle> <h3> Cheese </h3></ToppingTitle>
         
         <FormControlLabel
         className={classes.cheese}

        control={<Checkbox checked={values.cheese.extraCheese} onChange={onCheeseChange} name="extraCheese" />}
        label="Extra-Cheese? (+ $1.50)"
      />
         </ToppingBox>
         <ToppingBox>
         <ToppingTitle> <h3> Toppings (+ .50 per topping) </h3></ToppingTitle>
         <ToppingsBox>
         <FormControlLabel
         className={classes.toppings}
        control={<Checkbox  checked={values.toppings.mushroom} onChange={onCheckBoxChange} name="mushroom" />}
        label="Mushrooms"
      />
               <FormControlLabel
               className={classes.toppings}
        control={<Checkbox checked={values.toppings.pepperoni} onChange={onCheckBoxChange} name="pepperoni" />}
        label="Pepperoni"
      />
               <FormControlLabel
               className={classes.toppings}
        control={<Checkbox checked={values.toppings.sausage} onChange={onCheckBoxChange} name="sausage" />}
        label="Sausage"
      />
               <FormControlLabel
               className={classes.toppings}
        control={<Checkbox checked={values.toppings.onions} onChange={onCheckBoxChange} name="onions" />}
        label="Onions"
      />
               <FormControlLabel
               className={classes.toppings}
        control={<Checkbox checked={values.toppings.pineapple} onChange={onCheckBoxChange} name="pineapple" />}
        label="Pineapple"
      />
               <FormControlLabel
               className={classes.toppings}
        control={<Checkbox checked={values.toppings.greenPeppers} onChange={onCheckBoxChange} name="greenPeppers" />}
        label="Green Peppers"
      />
               <FormControlLabel
               className={classes.toppings}
        control={<Checkbox checked={values.toppings.olives} onChange={onCheckBoxChange} name="olives" />}
        label="Olives"
      />
               <FormControlLabel
               className={classes.toppings}
        control={<Checkbox checked={values.toppings.jalepenos} onChange={onCheckBoxChange} name="jalepenos" />}
        label="Jalepeno's"
      />
      </ToppingsBox>
         </ToppingBox>
         <ButtonAndTotal>   
             <Box>     
              <button
                name='price'
                value={total}
              onClick={onClick} className="button"> Add to Cart </button>
              </Box>
              <Box>
                <h3> Total ${total.toFixed(2)}</h3>
            </Box>
        </ButtonAndTotal>
        </Container>
        </LargeBox>
    )
}