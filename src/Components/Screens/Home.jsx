import React, { useEffect, useRef } from 'react'
import '../../Styles/Home.css'
import * as LottiePlayer from '@lottiefiles/lottie-player'
import { Navigate, useNavigate } from 'react-router-dom'
import Button from '../../Components/Button'
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
            h = 0
            greenref.current.style.height = "0px"
        }
        else {
            h += 3
            console.log(h)
            greenref.current.style.height = h + 'px'
            if (h > 60) {
                greenref.current.style.height = '0px'
                navigator('/about_us')
            }
        }

    }
    return (
        <div className='home main-section' id="Home" ref={Homeref} onWheel={wheelhandler}>
              
            <div className='home-content'>
                <div className='home-content-text'>
                    <h1>A National level Technical Symposium conducted by CSE department of CIT.    </h1>
                    <Button text="Check out the Events"/>
                </div>
                <div>
                    <lottie-player
                        autoplay
                        loop
                        mode="normal"
                        src="https://assets5.lottiefiles.com/packages/lf20_as1vcloj.json"
                    ></lottie-player>
                </div>

            </div>
            <div className='add-green bg-gradient-to-tr from-green-600 to-green-300 ' ref={greenref} />





        </div>
    )
}

export default Home
