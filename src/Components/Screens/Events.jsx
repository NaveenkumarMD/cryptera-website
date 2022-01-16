import React, { useRef, useState } from 'react'
import Eventcard from '../Eventcard'
import '../../Styles/Events.css'
import { useNavigate } from 'react-router-dom'

function Events() {
    const navigate=useNavigate()
    const [curr, setcurr] = useState(0)
    const technicalref = useRef(null)
    const nontechnicalref = useRef(null)
    const flagshipref = useRef(null)
    const bodyref = useRef(null)
    const greenref = useRef(null)
    let h=0
    const scrollhandler = (event) => {
        event.preventDefault()
        bodyref.current.scrollLeft += event.deltaY
        if (event.deltaY < 0) {
            h=0
            greenref.current.style.width = "0px"
        }
        else {
            h += 3
            console.log(h)
            greenref.current.style.width = h + 'px'
            if (h > 100) {
                greenref.current.style.width = '0px'
                navigate('/timeline')
            }
        }

    }

    const clearstyles = () => {
        nontechnicalref.current.style.color = "transparent"
        flagshipref.current.style.color = "transparent"
        technicalref.current.style.color = "transparent"
        technicalref.current.classList.remove("activex")
        nontechnicalref.current.classList.remove("activex")
        flagshipref.current.classList.remove("activex")
    }
    const technicalclick = () => {
        clearstyles()
        setcurr(0)
        technicalref.current.style.color = "var(--fg-white)"
        technicalref.current.classList.add("activex")
    }
    const nontechnicalclick = () => {
        clearstyles()
        setcurr(1)
        nontechnicalref.current.style.color = "var(--fg-white)"
        nontechnicalref.current.classList.add("activex")
    }
    const flagshipclick = () => {
        clearstyles()
        setcurr(2)
        flagshipref.current.style.color = "var(--fg-white)"
        flagshipref.current.classList.add("activex")
    }
    return (
        <div className="events">
            <div className='add-green-events bg-gradient-to-tr from-green-600 to-green-300 ' ref={greenref}>

            </div>
            <div className='events-header'>
                <h1 ref={technicalref} onClick={technicalclick} className='activex'>Technical </h1>
                <h1 ref={nontechnicalref} onClick={nontechnicalclick} >Non-Technical</h1>
                <h1 ref={flagshipref} onClick={flagshipclick}>Flagship</h1>
            </div>
            <div className='events-body' onWheel={scrollhandler} ref={bodyref} >
                <Eventcard primary="#24B47E" />
                <Eventcard primary="red" />
                <Eventcard primary="orange" />
                <Eventcard primary="#24B47E" />
            </div>
        </div>
    )
}

export default Events

const Technical = () => {
    return (
        <div className="technical">
            Technicla
        </div>
    )
}

const Nontechnical = () => {
    return (
        <div>
            Non technical
        </div>
    )
}
export { Technical, Nontechnical }