import React from 'react';

const Container = (chilldren) => {
    return (
        <div className='xl:max-w-screen-2xl lg:max-w-screen-lg md:max-w-screen-md px-5 lg:px-0 mx-auto'>
            
            {chilldren}

        </div>
    );
};

export default Container;