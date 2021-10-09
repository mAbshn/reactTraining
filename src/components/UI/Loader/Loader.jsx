import React from 'react';
import cl from './Loader.module.css'

const Loader = ({style}) => {
    return (
        <div className={cl.loader} style={style}>
            
        </div>
    );
};

export default Loader;