import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Store from '../components/store/Store';
import Navbar from '../components/core/Navbar';

const AppRouter: React.FC = () => (
    <BrowserRouter>
        <Navbar />
        <Switch>
            <Route exact match="/" component={Store} />
            <Route match="/cart" component={() => <p>cart</p>} />
            <Route match="/checkout" component={() => <p>checkout</p>} />
        </Switch>
    </BrowserRouter>
);

export default AppRouter;