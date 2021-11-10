import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useAuth } from '../Hooks/useAuth';
import Loading from '../Shared/Loading/Loading';

const AdminRoute = ({children , ...rest}) => {
    const { user , admin , isLoading } = useAuth();

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <Route
            {...rest}
            render={
                ({ location }) =>
                    user.email && admin ? children :
                        <Redirect
                            to={{
                                pathname: '/notfound',
                                state : {from : location}
                            }}
                        >
                        </Redirect>
            }
        >

        </Route>
    );
};

export default AdminRoute;