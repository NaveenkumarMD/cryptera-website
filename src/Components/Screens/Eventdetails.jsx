import React, { useRef } from 'react'
import '../../Styles/Eventdetails.css'
import profile from '../../Assets/Events/one.jpg'
import dummyprofile from '../../Assets/1905098.png'
import calendar from '../../Assets/Icons/calendar.svg'
import Faq from '../Faq'
import { useLocation,useNavigate } from 'react-router-dom'
import events_data from '../../Data/events_data'
function Eventdetails() {

    const navigate=useNavigate()
    const pathname = useLocation().pathname
    const event_name = pathname.split('/')[2]
    let Event_data = events_data.filter(event => event.name === event_name)[0]
    console.log(Event_data)


    return (
        <div className='eventdetails'>
            <div className='back-btn-container' onClick={()=>navigate("/events")}>
                <i class="fas fa-arrow-left"></i>
            </div>
            <div className='eventdetails-container'>
                <div className=' image-container'>
                    <div className='one'>
                        <img src={profile} alt='event' />
                    </div>
                    <div className="two">
                        <div> <img src={profile} alt='event' /></div>
                        <div><img src={profile} alt='event' /></div>
                        <div><img src={profile} alt='event' /></div>
                        <div><img src={profile} alt='event' /></div>
                    </div>
                </div>
                <div className='event-content-container'>
                    <div className='event-content-section1'>
                        <div className='e-title'>
                            <div className='header'>
                                <h1>{Event_data.name}</h1>
                                    <p><i className='fas fa-calendar-week mr-2 mb-3'></i>{Event_data.dateTime}</p>
                            </div>
                            <div className='google-calendar'>
                                <img src={calendar} alt='event' />
                            </div>
                        </div>

                        <div className='tags'>

                            {
                                Event_data.tags.map((tag, index) => {
                                    return (
                                        <div className='tag'>   <i class="fas fa-tag" style={{marginRight:"5px"}}></i>{tag} </div>
                                    )
                                })
                            }


                        </div>
                        <div className='e-description'>
                            <p>{Event_data.description}</p>
                        </div>
                        <div className='e-title-m'>
                            Eligibility
                        </div>
                        <div className='e-description-m'>
                            <p>{Event_data.eligibility}</p>
                        </div>
                        <div className='e-title-m'>
                            Rules
                        </div>
                        <div className='e-description-m'>
                            <ul className='list-decimal rules'>
                                {
                                    Event_data.rules.map((rule, index) => {
                                        return(
                                            <li>{rule}</li>
                                        )
                                    })
                                }

                            </ul>

                            <div className='e-title-m'>
                                Prize
                            </div>

                            <div className='e-description-m cen'>
                                <div className='trophies'>
                                    <div className='silver-trophy'>
                                        <i class="fa fa-trophy"></i>
                                        <div>
                                            <div>Second place</div>
                                            <i className='fas fa-rupee-sign'></i>
                                            {Event_data.prizes["silver"]}
                                        </div>
                                    </div>
                                    <div className='gold-trophy'>
                                        <i class="fa fa-trophy"></i>
                                        <div>
                                            <div>First place</div>
                                            <i className='fas fa-rupee-sign'></i>
                                            {Event_data.prizes["gold"]}
                                        </div>
                                    </div>
                                    <div className='bronze-trophy'>
                                        <i class="fa fa-trophy"></i>
                                        <div>
                                            <div>Third place</div>
                                            <i className='fas fa-rupee-sign'></i>
                                            {Event_data.prizes["bronze"]}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='e-title-m'>
                                Result
                            </div>
                            <div className='e-description-m '>
                                {
                                    Event_data.completed ? true : "Not yet completed"
                                }

                            </div>
                            <div className='e-title-m'>
                                Event managers
                            </div>
                            <div className='managers'>
                                {
                                    Event_data.event_managers.map((manager, index) => {
                                        return (
                                            <ManagerProfile />
                                        )
                                    })
                                }
                            </div>
                            <div className='e-title-m faq-header fq-header'>
                                Frequently asked questions
                            </div>
                            <div className='faq'>
                                {
                                    Event_data.faq.map((faq, index) => {
                                        return <Faq key={index} data={faq} />
                                    })
                                }
                            </div>

                            <div className='final-btn'>
                                <a href={Event_data.form} target="_blank">
                                    <div className='submit-btn-event'>
                                        <div>SUBMIT</div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Eventdetails

const ManagerProfile = () => {
    const circleref = useRef(null)
    const profileref = useRef(null)
    const socialref = useRef(null)
    const cardref = useRef(null)
    const hoverhandler = () => {
        circleref.current.classList.add("circle-hover")
        socialref.current.classList.add("social-hover")
        profileref.current.classList.add("img-hover")
    }
    const leavehandler = () => {
        circleref.current.classList.remove("circle-hover")
        socialref.current.classList.remove("social-hover")
        profileref.current.classList.remove("img-hover")
    }
    return (
        <div className='manager-profile'>
            <div className='manager-profile-container' ref={cardref} >
                <div className='circle circle-hover' ref={circleref}>

                </div>
                <div className='manager-profile-image img-hover ' ref={profileref}>
                    <img src={dummyprofile} alt='event' />
                </div>
                <div className='manager-profile-details'>
                    <div className='manager-profile-name'>
                        <h1>Manager Name</h1>
                    </div>
                    <div className='manager-profile-description'>
                        <p>Third year CSE</p>
                    </div>
                </div>
                <div className='manager-social-links social-hover' ref={socialref}>
                    <i className="fab fa-facebook"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-instagram"></i>
                    <i className='fab fa-linkedin-in'></i>
                </div>
            </div>
        </div>
    )
}
