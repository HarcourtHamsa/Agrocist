import * as Yup from 'yup';

export const create_account_validation = Yup.object().shape({
  business_individual_name: Yup.string()
    .required('Business/Individual Name is required')
    .label('Business / Individual Name'),
  email: Yup.string().email('Please enter valid email').label('Email'),
  password: Yup.string()
    .min(4, ({min}) => `Password must be ${min} digits`)
    .max(4, ({max}) => `Password must be ${max} digits`)
    .required('Password is required')
    .label('Password'),
  confirm_password: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required')
    .label('Confirm Password'),
});

export const mobile_validation = Yup.object().shape({
  phonenumber: Yup.string()
    .length(11, 'Phone Number must be 11 characters')
    .required('Phone Number is required')
    .label('Phone Number'),
});
