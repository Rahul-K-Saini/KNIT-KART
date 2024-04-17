import React from 'react';
import illustatus from "../../assets/illustrations/illustatus.svg";
const Page404 = () => {
    return (
        <>
            <div className="page-not-found" style={{ display: "grid", placeItems: "center", width:"100dhw" }}>
                <img className='404' style={{ fontFamily: 'Maven Pro', border: "10px solid #7215f4", borderRadius: "30px", margin: "50px" }} width={"70%"} src={illustatus} alt="svg404" />
            </div>
        </>
    )
}

export default Page404;