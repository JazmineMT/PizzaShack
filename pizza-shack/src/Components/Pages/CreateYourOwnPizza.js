import React ,{useState} from 'react'
import {ToppingTitle, ToppingBox, LargeBox, ButtonAndTotal, Box, RadioBox, ToppingsBox, Boxes} from '../styles/PizzaStyles'
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

const initailFormValues = {
    name: 'specail',
    size: '',
    sauce:'',
    crust: '',
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
      spinach: false,
      olives: false,
      jalepenos: false
    },
  }

  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(0),
      minWidth: 300,

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
    const item = [values, total]

    
    const handleChange = (evt) => {
        const {name , value} = evt.target
  
        
        if( value === 'Small'){
            setTotal(10)
        }else if(value === 'Medium'){
            setTotal(15)
        }else if(value === 'Large'){
            setTotal(20)
        }
        else if( value === 'Extra-Large'){
            setTotal(25)
        }

        // if( value === 'Garlic'){
        //     setTotal(total + .50)
        // }else if(value === 'Pretzel'){
        //     setTotal(total + 1)
        // }else if(value === 'Cheese Filled'){
        //     setTotal(total + 2 )
        // }


        setValues({
            ...values,
            [name]:value,
            
          });
      };


        const onCheeseChange = evt => {
        const { name, checked } = evt.target

        if(checked === true){
            setTotal(total + 1.50)
        }else if(checked === false){
            setTotal(total - 1.50)
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
                  price: total ,
                  cheese:Object.keys(values.cheese)
                  .filter(extra =>(values.cheese[extra] === true))
                ,
                  toppings: Object.keys(values.toppings)
                  .filter(toppingName =>(values.toppings[toppingName] === true))
                },
              )
              setValues(initailFormValues)
              setTotal(0)
              
            }

    return(
        <LargeBox>
        <ToppingBox>
         <ToppingTitle> <h3> Size </h3></ToppingTitle>
                    <FormControl component="fieldset" >
                    <RadioGroup aria-label="gender" name="size" value={values.size} onChange={handleChange}>
                    <RadioBox>
                        <FormControlLabel   value="Small" control={<Radio />} label="Small" />
                        <FormControlLabel value="Medium" control={<Radio />} label="Medium" />
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
         <ToppingTitle> <h3> Toppings </h3></ToppingTitle>
         <ToppingsBox>
         <FormControlLabel
         className={classes.toppings}
        control={<Checkbox  checked={values.toppings.mushroom} onChange={onCheckBoxChange} name="mushroom" />}
        label="Mushrooms"
      />
               <FormControlLabel
               className={classes.toppings}
        control={<Checkbox checked={values.toppings.pepperoni} onChange={onCheckBoxChange} name="pepperoni" />}
        label="Pepperoni (+ $.50)"
      />
               <FormControlLabel
               className={classes.toppings}
        control={<Checkbox checked={values.toppings.sausage} onChange={onCheckBoxChange} name="sausage" />}
        label="Sausage (+ $.50)"
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
        control={<Checkbox checked={values.toppings.spinach} onChange={onCheckBoxChange} name="spinach" />}
        label="Spinach"
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

        </LargeBox>
    )
}