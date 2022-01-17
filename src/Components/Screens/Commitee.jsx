import React,{useRef} from 'react'
import profile1 from '../../Assets/1905098.png'
import '../../Styles/Commmitee.css'
import {useNavigate} from 'react-router-dom'
function Commitee() {
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
                    navigate('/web_devs')
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
                    navigate('/contact_us')
                }
            }

        }

    }
    return (
        <div className='webdevs'  ref={contentref} onWheel={wheelhandler}>
                        <div className='add-green bg-gradient-to-tr from-green-600 to-green-300 ' ref={greenBottomref} />
            <div className='add-green top-fixed bg-gradient-to-tr from-green-600 to-green-300 ' ref={greenTopref} />

            <div className='webdevs-container'>
                <div >
                    <h1 className='webdevs-title'>Commitee members</h1>
                    <p className='webdevs-tilte-description'>Join the community around the world</p>
                </div>
                <div className='content-container' style={{maxWidth:"800px",margin:"auto",marginTop:"7%"}}>
                    <Commiteemember />  
                    <Commiteemember />  
                    <Commiteemember />  
                    <Commiteemember />  
                    <Commiteemember />  
                    <Commiteemember />  
                    <Commiteemember />  
                    <Commiteemember />  
                    <Commiteemember />  
                    <Commiteemember />  
                    <Commiteemember />  
                    <Commiteemember />  
                    <Commiteemember />  
                    <Commiteemember />  
                    <Commiteemember />  
                    <Commiteemember />  
                    <Commiteemember />  
                    <Commiteemember />  
                    <Commiteemember />  
                    <Commiteemember />  
                    <Commiteemember />  

                </div>
            </div>
        </div>
    )
}

export default Commitee

const Commiteemember = () => {
    return (
        <div className='content-container-item'>
            <div className='content-container-item-image'>
                <img src={profile1} alt='profile' />
                <div className='insta-hover-container'>
                    Secreatary
                </div>
            </div>
            <div className='content-container-item-description'>
                <div className='commitee-name-x'>
                    <div>
                        <h1>Naveenkumar M</h1>
                        <p>Third year</p>
                    </div>
                    <p>Secretary</p>
                </div>
            </div>
        </div>
    )
}