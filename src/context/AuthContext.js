import React from "react";
import Request from "../utils/Request";
import { message } from 'antd';
import { useNavigate } from 'react-router-dom';


const AuthContext = React.createContext({});


export const AuthProvider = ({ children }) => {

    const [spinner, setSpinner] = React.useState(false);
    const [alert, setAlert] = React.useState(false);
    const [user, setUser] = React.useState(false);
   
    
    const history = useNavigate();

    const token = localStorage.getItem('token') ? localStorage.getItem('token').replace(/"/g, '') : null;
    
    const authUser = async () => {
        if (token !== null) {
            await Request.get("/user/auth", {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(response => {
                setUser(response.data);
            }).catch(error => {
                message.error('Not Auth')
                localStorage.removeItem('token');
                setUser(null);
            })
        }else{
            setUser(null);
        }
    }


    


    const login = async (e) => {
        e.preventDefault();
        setSpinner(true);

        await Request.post('/user/login', {
            email: e.target.email.value,
            password: e.target.password.value

        }).then(response => {
            console.log(response)
            localStorage.setItem('token', JSON.stringify(response.data.token))
            setSpinner(false);
            history('/dashboard');
        }).catch(error => {
            message.error(error.response.data.message);
            setAlert(error.response.data.message)
            setSpinner(false);
            e.target.password.value = '';
        })
    }


    const register = async (e) => {
        e.preventDefault();
        setAlert(false);
        setSpinner(true);
        e.target.reset();
        if (e.target.password.value === e.target.password_1.value) {
            await Request.post('/user/register', {
                firstName: e.target.firstName.value,
                lastName: e.target.lastName.value,
                email: e.target.email.value,
                password: e.target.password.value,
            }).then(response => {
                localStorage.setItem('token', JSON.stringify(response.data.token))
                setSpinner(false);
                history('/');
            }).catch(error => {
                setSpinner(false);
                setAlert({ message: error.response.data.message, type: false })
            })
        } else {
            setAlert({ message: "Password is not much.", type: false })
        }

    }


    const logout = ()=>{
        localStorage.removeItem('token');
        setUser(null);
    }


    React.useEffect(()=>{
        authUser();
    }, [history]);


    const context = {
        login,
        register,
        spinner,
        alert,
        logout,
        user,
    }

    return (
        <AuthContext.Provider value={context}>
            {children}
        </AuthContext.Provider>

    )
}


export default AuthContext;







