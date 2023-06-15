import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from '../pages/About';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Dashboard from '../pages/Dashboard';
import UsersList from './users/UsersList';
import ProductList from '../pages/ProductList';
import HubList from '../pages/HubList';
import RoleList from '../pages/RoleList';
import CategoryList from '../pages/CategoryList';
import ReservationList from '../pages/ReservationList';
import Dash from '../pages/Dash';
import UpdateProduct from '../pages/UpdateProduct';
import UserUpdate from './users/UserUpdate';
import OrderList from './orders/OrderList';
import OrderConfirmed from './orders/OrderConfirmed';
import OrderCanceled from './orders/OrderCanceled';
import OrderNew from './orders/OrderNew';

export default function Routs() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/dashboard' element={<Dash />} />
                <Route path='/users/list' element={<UsersList />} />
                <Route path='/products/list' element={<ProductList />} />
                <Route path='/hubs/list' element={<HubList />} />
                <Route path='/roles/list' element={<RoleList />} />
                <Route path='/categories/list' element={<CategoryList />} />
                <Route path='/reservations/list' element={<ReservationList />} />
                <Route path='/product/update/:id' element={<UpdateProduct />} />

                <Route path='/user/update/:id' element={<UserUpdate />} />

                {/* Orders */}
                <Route path='/ordre/list' element={<OrderList />} />
                <Route path='/ordre/confirmed' element={<OrderConfirmed />} />
                <Route path='/ordre/canceled' element={<OrderCanceled />} />
                <Route path='/ordre/new' element={<OrderNew />} />
            </Routes>
        </div>
    )
}
