import React, { useEffect,useRef } from 'react'
import Image1 from './assets/bg.png'
import Image2 from './assets/blend-layer.png'
import Image3 from './assets/bottom-blend.png'
import Image4 from './assets/fore-rock.png'
import Image5 from './assets/foregroundrocks.png'
import Image6 from './assets/globe.png'
import Image7 from './assets/mid-rock.png'
import Image8 from './assets/text.png'
import Image9 from './assets/upperblend.png'
import '../../App.css'
import Parallax from 'parallax-js'
function Main({ movetohomepage }) {
    const sectionref=useRef(null)
    const greenref=useRef(null)
    const Homeref=useRef(null)
    let h=10
    useEffect(() => {
        const parallaxinstance = new Parallax(sectionref.current)
        parallaxinstance.enable()
        return()=>parallaxinstance.disable()
    }, [])
    const wheelhandler=(event)=>{
        console.log('wheel')
        console.log(event.deltaY)
        if (event.deltaY < 0) {
            h = 0
            greenref.current.style.height = "0px"
        }
        else {
            if (Homeref.current.offsetHeight + Homeref.current.scrollTop >= Homeref.current.scrollHeight) {
                h += 3
                console.log(h)
                greenref.current.style.height = h + 'px'
                if (h > 60) {
                    greenref.current.style.height = '0px'
                    movetohomepage()
                }
            }
        }
    }
    return (
        <div onWheel={wheelhandler} ref={Homeref} style={{
            margin: '0',
            boxSizing: "border-box",
            padding: '0',
            overflow: "hidden"
        }}>
            <section className="sectone" id="sectone" ref={sectionref}>
                <div data-depth="0.01" className="bg">
                    <img src={Image1} />
                </div>
                <div data-depth="0.1" className="fgrocks">
                    <img src={Image5} alt="" />
                </div>
                <div className="bottomblend">
                    <img src={Image3} alt="" />
                </div>
                <div className="blend-layer">
                    <img src={Image2} alt="" />
                </div>
                <div className="text" >
                    <img src={Image8} alt="" />
                </div>
                <div data-depth="1.2" className="globe">
                    <img src={Image6} alt="" />
                </div>
                <div data-depth="0.05" className="rock">
                    <img data-depth="0.1" src={Image7} alt="" />
                </div>
                <div className="upblend">
                    <img src={Image9} alt="" />
                </div>
                <div data-depth="0.3" className="fore-rocks">
                    <img src={Image4} alt="" />
                </div>
            </section>
            <div className='add-green violet-gradient ' ref={greenref} />
        </div>
    )
}

export default Main
