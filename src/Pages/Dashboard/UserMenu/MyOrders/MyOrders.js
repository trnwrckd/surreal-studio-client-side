import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import './MyOrders.css';

import React, { useEffect, useState } from 'react';
import { useAuth } from '../../../../Hooks/useAuth';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}


const MyOrders = () => {

    const { user } = useAuth();

    const [orders, setOrders] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:5000/orders/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setOrders(data);
                setLoaded(true);
            });
    }, [user.email]);

    return (
        <div className="fit py-2">
            <h2> My Orders</h2>
            
            
            
            
        </div>
    );
};

export default MyOrders;