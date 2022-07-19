import React from 'react';
//Gif
import spinner from '../gif/Spinner-1s-200px.svg'

const Loader = () => {
    return (
        <div>
            <img src={spinner} alt="Loading"/>
          
        </div>
    );
};

export default Loader;