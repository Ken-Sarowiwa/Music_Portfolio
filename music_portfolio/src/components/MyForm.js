import React from 'react'
import { useFormik} from 'formik';
import Button from 'react-bootstrap/Button';
import * as Yup from "yup";
export default function Subscriber() {
    const formik = useFormik({
        initialValues:{
            email: ""
        },
        onSubmit:(values)=>{
            console.log(values);
        },
        validationSchema:Yup.object({
            email:Yup.string().max(200, "Can only type twenty characters or less").required("Sorry this field is Required").email("Invalid email"),
        }),
    });
    

  return (
    <div className='container'>
        <hr></hr>
        <strong><p>Please share your Email address we want to you stay updated with Kenafrica's latest albums and beautiful songs</p></strong>
        <form onSubmit={formik.handleSubmit}>
            <input
                id='email'
                type="text"
                placeholder='Email'
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onSubmit={formik.handleSubmit}

            />
            {formik.errors.email ? <p>{formik.errors.email}</p> :null }
            <div>
                <Button variant="success" type="submit">Submit</Button>
            </div>
        </form>
    </div>  
  )
}
