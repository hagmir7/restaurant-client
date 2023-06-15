import React from 'react';
import { Button, Input, Alert} from 'antd';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';

export default function Register() {
  const { register, alert, spinner } = useContext(AuthContext);
  return (
    <div className='container' >
        <div className="row justify-content-center align-items-center vh-100">
            <div className="col-md-6 p-4 card">
                <h1 className='h4 mb-3'>Login new user</h1>
                <form onSubmit={register}>
                    { alert && <Alert message={alert.message} type="error" showIcon /> } 
                    <Input name='firstName'  placeholder='First name' className='mt-3' required/>
                    <Input name='lastName' className='mt-3' placeholder='Last name' required />
                    <Input name='email' type='email' className='mt-3' placeholder='Email' required />
                    <Input.Password name='password' className='mt-3' placeholder="Password" required/>
                    <Input.Password name='password_1' className='mt-3' placeholder="Confirm Password" required/>
                    <Button htmlType='submit' type='primary' className='w-100 mt-3'>Create account</Button>
                    <div className='mt-3'>
                    <Link to='/login'>Alrady I have an account?</Link>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}
