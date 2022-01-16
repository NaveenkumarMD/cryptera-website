import React, { useEffect, useRef } from 'react'
import '../../Styles/Home.css'
import { Navigate, useNavigate } from 'react-router-dom'
function Home() {
    const navigator = useNavigate()
    const [flag, setFlag] = React.useState(false)
    const Homeref = useRef(null)
    const greenref = useRef(null)
    let h = 10

    const wheelhandler = (event) => {
        console.log('wheel')
        console.log(event.deltaY)
        if (event.deltaY < 0) {
            h=0
            greenref.current.style.height = "0px"
        }
        else {
            h += 3
            console.log(h)
            greenref.current.style.height = h + 'px'
            if (h > 100) {
                greenref.current.style.height = '0px'
                navigator('/about_us')
            }
        }

    }
    return (
        <div className='home main-section' id="Home" ref={Homeref} onWheel={wheelhandler}>
            <div className='py-56'>hello </div>
            <div className='py-56'>hello </div>

            <div className='add-green bg-gradient-to-tr from-green-600 to-green-300 ' ref={greenref}>

            </div>



        </div>
    )
}

export default Home
