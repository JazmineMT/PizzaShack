import React from 'react'
import * as Yup from 'yup';
import formSchema from '../validation/RegisterSchema'
import {useState, useEffect} from 'react'
import {Header, AccountInfo, YourInfo, Container, TextFieldBox, Border, Container2, ButtonBox} from '../styles/RegisterStyles'
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
    firstname:'',
    lastname:'',
    email: '',
    confirm: '',
    phone: '',
    zipCode: '',
    password:'',
    showPassword: false,
  } 

  const initailFormErrors = {
    firstName:'',
    lastName:'',
    email: '',
    phone:'',
    confirm: '',
    zipCode: '',
    password:'',
    ShowPassword: false
  }

  const useStyles = makeStyles((theme) => ({
    textBox: {
        margin: '3%',

    },
  }));



export default function Register(props){
const [values , setValues] = useState(initailFormValues)
const [formErrors , setFormErrors] = useState(initailFormErrors)
const classes = useStyles();
    const onClick = (evt) => {

        setValues(initailFormValues)
        setFormErrors(initailFormErrors)
    }
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
                    <h1> Create Account</h1>
                    <h3><LocalPizzaIcon/> Earn Free Pizza with Shack Savings</h3>
            </Header>
            <AccountInfo>
                    <Border> <h3>Account Information</h3> <hr className='thin'/> </Border>
                    <TextFieldBox>   
                        <h3 className='regTitle'>Email</h3>                     
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
                        <h3 className='regTitle'> Password</h3>
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
                        <FormHelperText id="outlined-helper-text">{formErrors.password}</FormHelperText>
                    </TextFieldBox>

              

            </AccountInfo>
            <YourInfo>
            <Border> <h3>Your Information</h3><hr className='thin'/> </Border>
            <TextFieldBox>   
                        <h3  className='regTitle'>First Name </h3>                     
                    <TextField
                        className={classes.textBox}
                        type='text'
                        name='firstname'
                        value={values.firstname}
                        onChange={handleChange}
                        helperText={formErrors.firstName}
                        variant='filled'
                        placeholder="Jane"
                        fullWidth = {true}
                        />
                        <h3  className='regTitle'>Last Name</h3>
                    <TextField
                        className={classes.textBox}
                        type='text'
                        name='lastname'
                        value={values.lastname}
                        onChange={handleChange}
                        helperText={formErrors.lastName}
                        variant='filled'
                        placeholder="Dough"
                        fullWidth = {true}
                        />
                        <h3  className='regTitle'>Phone</h3>
                    <TextField
                        className={classes.textBox}
                        type='text'
                        name='phone'
                        value={values.phone}
                        onChange={handleChange}
                        helperText={formErrors.phone}
                        variant='filled'
                        placeholder="(XXX)-XXX-XXXX"
                        fullWidth = {true}
                        />
                    <h3  className='regTitle'>Zip Code</h3>
                    <TextField
                        className={classes.textBox}
                        type='text'
                        name='zipCode'
                        value={values.zipCode}
                        onChange={handleChange}
                        helperText={formErrors.zipCode}
                        variant='filled'
                        placeholder="XXXXX"
                        fullWidth = {true}
                        />
                    </TextFieldBox>

            </YourInfo>
            <ButtonBox className='buttonBox'>
                <buton  onClick ={onClick}className='button'> Create Account</buton>
            </ButtonBox>
            </Container2>

        </Container>
    )
}