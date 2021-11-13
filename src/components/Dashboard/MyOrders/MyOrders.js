import { Container } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import MyOrder from '../MyOrder/MyOrder';

const MyOrders = () => {
    
    const {user} = useAuth();

    const [orders, setOrders] = useState([]);

    useEffect( () => {
        fetch(`https://damp-island-81806.herokuapp.com/purchase/${user.email}`)
        .then(res => res.json())
        .then(data => setOrders(data))
    },[]);


    const handleRemoveProduct = id =>{

        const proceed = window.confirm('Are you sure, you want to delete');

        if(proceed){
            
            fetch(`https://damp-island-81806.herokuapp.com/purchase/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if(data.deletedCount > 0){
                        const remainingOrders = orders.filter(order => order._id != id);
                        setOrders(remainingOrders);
                    }
                })

        }
    };


    return (
        <div>

            <Container>
            <h3 style={{textAlign:'center', marginTop:'-50px'}}>MY ORDER</h3>

            {
             
             orders.map(order => <MyOrder
             
               key = {order._id}
               order = {order} 
               handleRemoveProduct = {handleRemoveProduct }
             >
        
             </MyOrder>)

            }

            </Container>
            
        </div>
    );
};

export default MyOrders;