import * as Yup from 'yup';

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // regex for email
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/; // regex for password

export const validationSchemas = {
  'sign-in': Yup.object().shape({
    username: Yup.string()
        .required('Username is required')
    ,
    password: Yup.string()
        .required('Password is required')
        .matches(passwordRegex, 'Invalid Password')
    ,
  }),
  'sign-up': Yup.object().shape({
    username: Yup.string().required('Username is required'),
    email: Yup.string()
      .email('Invalid email')
      .required('Email is required')
      .matches(emailRegex, "Invalid Email")
      ,
    password: Yup.string()
        .required('Password is required')
        .matches(passwordRegex, 'Invalid Password')}),
};
