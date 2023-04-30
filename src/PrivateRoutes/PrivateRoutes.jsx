import React, { useContext } from 'react';
import Orders from '../Components/Orders';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
const {user,loading} = useContext(AuthContext);
 
if(loading){
    return <div className='flex justify-center items-center h-screen'><progress className="progress w-60"></progress></div>
}

if(user){
    return children ;                    
}
console.log(user);
    return <Navigate to='/login'></Navigate>
};

export default PrivateRoutes;<Orders></Orders>