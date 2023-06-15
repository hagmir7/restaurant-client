import React from 'react';
import { Alert, Button, Input, Space, Spin } from 'antd';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import { LoadingOutlined } from '@ant-design/icons';

export default function Login() {

    const { login, spinner, alert } = useContext(AuthContext);

    const antIcon = ( <LoadingOutlined style={{ fontSize: 20, color: 'white' }} /> );
  return (
    <div className='container' >
        <div className="row justify-content-center align-items-center vh-100">
            <div className="col-md-6 p-4 card">
                <h1 className='h4 mb-3'>Login User</h1>
                <form onSubmit={login}>
                     { alert && <Alert message={alert} type="error" showIcon /> } 
                    <label htmlFor="email">Email</label>
                    <Input type='email' name='email' required placeholder='Enter you email' />
                    <label htmlFor="password">Password</label>
                    <Input.Password name='password' placeholder="Enter you password" />
                    <Button htmlType='submit' type='primary' className='w-100 mt-3'>{ spinner ? <Spin indicator={antIcon} /> : "Loing" }</Button>
                    <Link to="/register" className='btn btn-success mt-3 w-100'>Create new account</Link>
                </form>
            </div>
        </div>
    </div>
  )
}
