import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';

const Home = () => {

  const {user} = useContext(AuthContext)
  console.log(user);

    return (
        <div>
          <h2>This is Home</h2>  
          {user && <p>{user.displayName}</p> }
        </div>
    );
};

export default Home;