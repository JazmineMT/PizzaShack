import * as Yup from 'yup'


const formSchema = Yup.object().shape({

    firstname: Yup
      .string()
      .min(2, "Name must be at least 2 characters long."),
      
    lastname: Yup
    .string()
    .min(2, "Name must be at least 2 characters long."),

    email: Yup
      .string()
      .email("Must be a valid email address"),  

    zipCode: Yup
    .string()
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(5, 'Must be exactly 5 digits')
    .max(5, 'Must be exactly 5 digits'),

    phone: Yup
      .string()
      .matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        "Must be a valid phone number"
      ),
      

    password: Yup
      .string()
      .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{7,})/,
        "Must Contain 7 Characters  One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
      
      


      

  })
  
  export default formSchema