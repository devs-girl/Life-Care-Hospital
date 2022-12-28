import React from 'react';
import Banner from '../Banner/Banner';
import Blogs from '../Blogs/Blogs';
import Brand from '../Brand/Brand';
import Services from '../Services/Services'

 

 

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Services></Services>
            <Blogs></Blogs>
            <Brand></Brand>
        </div>
    );
};

export default Home;