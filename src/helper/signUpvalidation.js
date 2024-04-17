import * as Yup from 'yup'
export const signUpvalidationSchema = Yup.object().shape({
  firstname: Yup.string().required('First name is required'),
  lastname: Yup.string().required('Last name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
  gender: Yup.string().required('Gender is required'),
  dob: Yup.date().required('Date of birth is required'),
})
