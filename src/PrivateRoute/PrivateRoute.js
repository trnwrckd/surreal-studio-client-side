import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useAuth } from '../Hooks/useAuth';
import Loading from '../Shared/Loading/Loading';


const PrivateRoute = ({children , ...rest}) => {
    const { user , isLoading } = useAuth();

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <Route
            {...rest}
            render={
                ({ location }) =>
                    user.email ? children :
                        <Redirect
                            to={{
                                pathname: '/login',
                                state : {from : location}
                            }}
                        >
                        </Redirect>
            }
        >

        </Route>
    );
};

export default PrivateRoute;