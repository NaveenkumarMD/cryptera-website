import React, { useRef, useState } from 'react'
import '../Styles/ComponentsStyles/Navmobile.css'
import Logo from '../Assets/logo.png'
import { Link, useLocation, useNavigate } from 'react-router-dom'
function Navmobile() {
    const sidenavref = useRef()
    const [open, setopen] = useState(false)
    const location = useLocation()
    const navigate = useNavigate()
    const homeref = useRef(null)
    const timelineref = useRef(null)
    const aboutref = useRef(null)
    const contactref = useRef(null)
    const eventref = useRef(null)
    const webref = useRef(null)
    const commiteeref = useRef(null)
    const hintref = useRef(null)
    const linkxref = useRef(null)
    const clickhandler = () => {
        sidenavref.current.classList.toggle('activeo')
        setopen(!open)
        if (open) {
            linkxref.current.style.display = "none"
        }
        else {
            setTimeout(() => {
                linkxref.current.style.display = "flex"
            }, [500])

        }
    }
    const closenav = () => {
        clickhandler()
    }
    return (
        <>
            <div>
                <div className='sidenav' ref={sidenavref}>
                    <div className='close-btn-x' onClick={closenav}>
                        <i class="fas fa-times"></i>
                    </div>

                    <div className='linkx' ref={linkxref}>
                        <Link to="/" ref={homeref} className=" navbar-linkx" id="Home-link">       <i className="fa fa-home"></i><span>Home</span></Link>
                        <Link to="about_us" ref={aboutref} id="about_us" className="navbar-linkx" id="about_us-link"><i className="fa fa-info-circle"></i><span>About us</span></Link>
                        <Link to="events" ref={eventref} className=" navbar-linkx"> <i className="fa fa-calendar-minus"></i><span>Events</span></Link>
                        <Link to="timeline" ref={timelineref} className=" navbar-linkx"> <i className="fa fa-user-clock"></i><span>Timeline</span></Link>
                        <Link to="web_devs" ref={webref} className="navbar-linkx"><i className="fa fa-wifi"></i><span>Web devs</span></Link>
                        <Link to="commitee" ref={commiteeref} className=" navbar-linkx"><i className="fa fa-users"></i><span>Commitee</span></Link>
                        <Link to="contact_us" ref={contactref} className=" navbar-linkx"><i className="fa fa-headset"></i><span>Contact Us</span></Link>
                    </div>
                </div>
            </div>
            <div className='nav-mobile'>

                <div className='logo-x'>
                    <img src={Logo} alt='logo' />
                </div>
                <div onClick={clickhandler} className='close-btn'>
                    <i class="fas fa-bars"></i>
                </div>

            </div>
        </>
    )
}

export default Navmobile
