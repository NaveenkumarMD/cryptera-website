import React, { useState } from 'react'
import '../../Styles/ContactUs.css'
import Faq from '../Faq'
import Faq_data from '../../Data/Faqs_main'
function ContactUs() {
    const [name, setname] = useState("")
    const [college, setcollege] = useState("")
    const [email, setemail] = useState("")
    const [mobile, setmobile] = useState("")
    const [question, setquestion] = useState("")

    const submit = () => {
        if (!(name && college && email && mobile && question)) {
            alert("All fields are mandatory")
        }
        // validations

    }
    return (
        <div className='support' >
            <div className='mobile-container'>
                <a href='tel:+91 8870499146'>
                <i className='fa fa-phone'></i>
                </a>
               
            </div>
            <div className='support-container'>
                <h1 className='support-header'>Support</h1>
                <div className='support-content'>
                    Hello,I am <input placeholder='Your name' onChange={e=>setname(e.target.value) } value={name} /> from <input placeholder='Institution name' onChange={e=>setcollege(e.target.value)} value={college} />.You can email me at <input placeholder='Mail id' value={email} onChange={e=>setemail(e.target.value)} /> or reach me on <input placeholder='Mobile Number' value={mobile}onChange={e=>setmobile(e.target.value)} />.
                    <br /><div className='txt-content' onChange={e=>setquestion(e.target.value)} value={question}>I have some questions about <textarea className='text-area' />.</div>
                </div>
                <div className='submit' onClick={submit}>
                    <div>SUBMIT</div>
                </div>
            </div>
            <div className='faq-container'>
                <div className='faq-header'>
                    Frequently asked questions
                </div>
                <div className="faq-content-container">
                    {
                        Faq_data.map((faq, index) => {
                            return (
                                <Faq
                                    key={index}
                                    data={faq}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default ContactUs
