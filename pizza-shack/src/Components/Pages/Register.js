import React from 'react'
import {useState, useEffect} from 'react'
import {Header, AccountInfo, YourInfo, Container, TextFieldBox, Border, Container2, ButtonBox} from '../styles/RegisterStyles'
import LocalPizzaIcon from '@material-ui/icons/LocalPizza';
import LockIcon from '@material-ui/icons/Lock'
import IconButton from '@material-ui/core/IconButton';
import FilledInput from '@material-ui/core/FilledInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import {TextField , Button, FormControl} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

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

    const handleChange = (evt) => {
        const {name , value} = evt.target

        setValues({
            ...values,
            [name]:value,
            
          });
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
                        variant='outlined'
                        placeholder="Email"
                        fullWidth = {true}
                        />
                        <h3 className='regTitle'> Password</h3>
                    <TextField
                        className={classes.textBox}
                        type='text'
                        name='password'
                        value={values.password}
                        onChange={handleChange}
                        helperText={formErrors.password}
                        variant='outlined'
                        placeholder="Password"
                        fullWidth = {true}
                        />
                        <h3 className='regTitle'> Confirm Password</h3>
                    <TextField
                        className={classes.textBox}
                        type='text'
                        name='confirm'
                        value={values.confirm}
                        onChange={handleChange}
                        helperText={formErrors.confirm}
                        variant='outlined'
                        placeholder="Confirm Password"
                        fullWidth = {true}
                        />
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
                        variant='outlined'
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
                        variant='outlined'
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
                        variant='outlined'
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
                        variant='outlined'
                        placeholder="XXXXX"
                        fullWidth = {true}
                        />
                    </TextFieldBox>

            </YourInfo>
            <ButtonBox className='buttonBox'>
                <buton className='button'> Create Account</buton>
            </ButtonBox>
            </Container2>

        </Container>
    )
}