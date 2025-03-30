import React from 'react';
import NavBar from "../component/Navbar"
import Cards from '../component/Cards';

function Home(){
    return <>
    <NavBar></NavBar>

    <div className="d-flex justify-content-center">
        <h1>UnknownGod</h1>
    </div>

    <Cards></Cards>
    </>
}


export default Home