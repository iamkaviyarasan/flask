import React,{useState} from "react";
import { Form,Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import {useForm} from 'react-hook-form';



const SignUpPage=()=>{

  

    const {register,watch,handleSubmit,formState:{errors}}=useForm();

    const submitForm=(data)=>{
        console.log(data)

    }
    console.log(watch("username"))
    console.log(watch("email"))

    
        

    
    return(
        <div className="container">
            <div className="form">
               <h1>Sign Up Page</h1>
               <form>
                  <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter Username" {...register("username",{required:true,maxLength:25})} />
                  </Form.Group>
                  <br></br>

                  <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter Email" {...register("email",{required:true,maxLength:80})} />
                  </Form.Group>
                  <br></br>

                  <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter password"{...register("password",{required:true,minLength:8})}/>
                  </Form.Group>
                  <br></br>

                  <Form.Group>
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter password" {...register("confirmPassword",{required:true,minLength:8})}  />
                  </Form.Group>
                  <br></br>

                  <Form.Group>
                    <Button as="sub" variant="primary" onClick={handleSubmit(submitForm)}>SignUp</Button>
                  </Form.Group>
                  <br></br>
                  <Form.Group>
                     <small>Already have an account<Link to='/login'>log In</Link></small>
                  </Form.Group>


               </form>
              


            </div>

            
        </div>
    )
}   
export default SignUpPage;