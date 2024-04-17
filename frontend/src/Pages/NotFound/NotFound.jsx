import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer'
import illustatus from "../assets/illustrations/illustatus.svg";

const Page404 = () => {
    return (
        <>
            <Navbar />
            <div className="page-not-found" style={{ display: "grid", placeItems: "center", width:"100dhw" }}>
                <img className='404' style={{ border: "10px solid #7215f4", borderRadius: "30px", margin: "50px" }} width={"70%"} src={illustatus} alt="svg404" />
            </div>
            <Footer />
        </>
    )
}

export default Page404;