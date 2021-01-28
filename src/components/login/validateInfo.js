export default function validateInfo(values){
    let errors = {};

    if ( !values.username.trim() ) {
        errors.username = "username required";
    }

    if (!values.email){
        errors.email= "email required";
    }

    if (!values.password){
        errors.password = "password required";
    }

    if (!values.password2) {
        errors.password2 = 'Password is required';
      } else if (values.password2 !== values.password) {
        errors.password2 = 'Passwords do not match';
      }

      return errors;
}