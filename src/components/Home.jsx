import {useContext, useEffect, useState, useRef} from 'react'

function Home(props) {



    return (
        <>
            <div className="square-1 square">rotate 45deg</div>
            <div className="square-2 square">scale y 0.5</div>
            <div className="square-3 square"> skew x 20deg</div>
            <div className="square-4 square">translate x 50px</div>
            <div className="square-5 square">chain: skew x 20deg & translate x 100px</div>
            <p>transitions</p>
            <div className="square-6 square">bg-color and rotate 90deg on hover</div>
        </>
    )
}

export default Home
