import React from 'react';

import './index.css';

const Home  = ({setLoginUser}) => {
    return(
        <div className='home-container'>
            <h1>hello Home</h1>
            <button className='button' onClick={() => setLoginUser({})}>Logout</button>
        </div>
    )
}

export default Home;