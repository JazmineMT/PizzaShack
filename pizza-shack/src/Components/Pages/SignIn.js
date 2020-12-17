import React from 'react'
import {useState, useEffect} from 'react'
import * as Yup from 'yup';
import formSchema from '../validation/RegisterSchema'
import {Header, LoginInfo, YourInfo, Container, TextFieldBox2, Border, Container2, ButtonBox} from '../styles/RegisterStyles'
import LocalPizzaIcon from '@material-ui/icons/LocalPizza';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import {TextField , Button, FormControl} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import FilledInput from '@material-ui/core/FilledInput';

const initailFormValues = {
    email: '',
    password:'',
    showPassword: false,
  } 

  const initailFormErrors = {
    email: '',
    password:'',
    ShowPassword: false
  }

  const useStyles = makeStyles((theme) => ({
    textBox: {
        margin: '3%',

    },
  }));



export default function SignIn(props){
const [values , setValues] = useState(initailFormValues)
const [formErrors , setFormErrors] = useState(initailFormErrors)
const classes = useStyles();

    const handleChange = (evt) => {
        const {name , value} = evt.target
        Yup
        .reach(formSchema,name)
        .validate(value)
        .then(()=>{
            setFormErrors({
                ...formErrors,
                [name]:''
            });
        })
        .catch(err =>{
            setFormErrors({
                ...formErrors,
                [name]: err.errors[0] 
            })
        })

        setValues({
            ...values,
            [name]:value,
            
          });
      };

      const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };

    return(
        <Container>
            <Container2>
            <Header>
                    <h1> Sign In </h1>
                    <h3><LocalPizzaIcon/> Sign in to your Shack Savings Account</h3>
            </Header>
            <LoginInfo>
                    <TextFieldBox2>                   
                    <TextField
                        className={classes.textBox}
                        type='email'
                        name='email'
                        value={values.email}
                        onChange={handleChange}
                        helperText={formErrors.email}
                        variant='filled'
                        placeholder="Email"
                        fullWidth = {true}
                        />

                        <FilledInput
                        className={classes.textBox}
                        placeholder='Password '
                        type={values.showPassword ? 'text' : 'password'}
                        name='password'
                        value={values.password}
                        onChange={handleChange}
                        variant='filled'
                        fullWidth = {true}
                        endAdornment={
                            <InputAdornment position='end'>
                            <IconButton
                            aria-label='toggle passowrd visibility'
                            onClick={handleClickShowPassword}
                            onMouse={handleMouseDownPassword}
                            edge='end'
                            >
                            {values.showPassword ? <Visibility/> : <VisibilityOff/>}
                            </IconButton>
                            </InputAdornment>
                            }
                        labelWidth={70}
                        />
                    </TextFieldBox2>

              

            </LoginInfo>
            <ButtonBox className='buttonBox'>
                <buton className='button'> Create Account</buton>
            </ButtonBox>
            </Container2>

        </Container>
    )
}