import React, { useRef } from 'react'
import '../../Styles/WebDevs.css'
import profile1 from '../../Assets/1905098.png'
import { useNavigate } from 'react-router-dom'
function WebDevs() {
    const navigate = useNavigate()
    const greenTopref = useRef(null)
    const greenBottomref = useRef(null)
    const contentref = useRef(null)
    let h = 10
    let i = 10

    const wheelhandler = (event) => {
        console.log('wheel')
        console.log(event.deltaY)
        if (event.deltaY < 0) {
            h = 0
            greenBottomref.current.style.height = "0px"
            console.log(
                contentref.current.offsetHeight,
                contentref.current.scrollTop,
                contentref.current.scrollHeight
            )
            if (contentref.current.scrollTop == 0) {
                i += 3
                greenTopref.current.style.height = `${i}px`
                if (i > 60) {
                    greenTopref.current.style.height = `0px`
                    navigate('/timeline')
                }
            }
        }
        else {
            greenTopref.current.style.height = "0px"
            i = 0
            if (contentref.current.offsetHeight + contentref.current.scrollTop >= contentref.current.scrollHeight) {
                h += 3
                console.log(h)
                greenBottomref.current.style.height = h + 'px'
                if (h > 60) {
                    greenBottomref.current.style.height = '0px'
                    navigate('/commitee')
                }
            }

        }

    }
    return (
        <div className='webdevs' ref={contentref} onWheel={wheelhandler} >
            <div className='add-green bg-gradient-to-tr from-green-600 to-green-300 ' ref={greenBottomref} />
            <div className='add-green top-fixed bg-gradient-to-tr from-green-600 to-green-300 ' ref={greenTopref} />

            <div className='webdevs-container'>
                <div >
                    <h1 className='webdevs-title'>Web Developers</h1>
                    <p className='webdevs-tilte-description'>Join the community around the world</p>
                </div>
                <div className='content-container'>
                    <div className='web-card'>
                        <div className='web-card-image'>
                            <img src={profile1} alt='webdevs-1' />
                        </div>
                        <div className='web-card-content'>
                            <div className='name'>Naveenkumar M</div>
                            <div className='description'>I am a web developer from bombay is it yes thats true i am from bombay</div>
                            <div className='media-container'>
                                <i class="fab fa-instagram"></i>
                                <i class="fab fa-github"></i>
                                <i class="fab fa-medium"></i>
                                <i class="fab fa-linkedin"></i>
                            </div>
                        </div>

                    </div>
                    <div className='web-card'>
                        <div className='web-card-image'>
                            <img src={profile1} alt='webdevs-1' />
                        </div>
                        <div className='web-card-content'>
                            <div className='name'>Naveenkumar M</div>
                            <div className='description'>I am a web developer from bombay is it yes thats true i am from bombay</div>
                            <div className='media-container'>
                                <i class="fab fa-instagram"></i>
                                <i class="fab fa-github"></i>
                                <i class="fab fa-medium"></i>
                                <i class="fab fa-linkedin"></i>
                            </div>
                        </div>

                    </div>
                    <div className='web-card'>
                        <div className='web-card-image'>
                            <img src={profile1} alt='webdevs-1' />
                        </div>
                        <div className='web-card-content'>
                            <div className='name'>Naveenkumar M</div>
                            <div className='description'>I am a web developer from bombay is it yes thats true i am from bombay</div>
                            <div className='media-container'>
                                <i class="fab fa-instagram"></i>
                                <i class="fab fa-github"></i>
                                <i class="fab fa-medium"></i>
                                <i class="fab fa-linkedin"></i>
                            </div>
                        </div>

                    </div>
                    <div className='web-card'>
                        <div className='web-card-image'>
                            <img src={profile1} alt='webdevs-1' />
                        </div>
                        <div className='web-card-content'>
                            <div className='name'>Naveenkumar M</div>
                            <div className='description'>I am a web developer from bombay is it yes thats true i am from bombay</div>
                            <div className='media-container'>
                                <i class="fab fa-instagram"></i>
                                <i class="fab fa-github"></i>
                                <i class="fab fa-medium"></i>
                                <i class="fab fa-linkedin"></i>
                            </div>
                        </div>

                    </div>
                    <div className='web-card'>
                        <div className='web-card-image'>
                            <img src={profile1} alt='webdevs-1' />
                        </div>
                        <div className='web-card-content'>
                            <div className='name'>Naveenkumar M</div>
                            <div className='description'>I am a web developer from bombay is it yes thats true i am from bombay</div>
                            <div className='media-container'>
                                <i class="fab fa-instagram"></i>
                                <i class="fab fa-github"></i>
                                <i class="fab fa-medium"></i>
                                <i class="fab fa-linkedin"></i>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default WebDevs
