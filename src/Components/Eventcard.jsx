import React from 'react'

function Eventcard(props) {
    return (
        <div className='event-card' style={{borderTopColor:props.primary}}>
            <div className='event-card-header'>
                <span>For Testing</span>
            </div>
            <div className='event-card-body'>
                <span>A high rated tamil movie maja pa maja pa but not</span>
                <span>A high rated tamil movie maja pa maja pa but not</span>
                <span>A high rated tamil movie maja pa maja pa but not</span>
            </div>
            <div className='read-more' style={{backgroundColor:props.primary}}>
                <button>Apply<i className='fa fas-angle-right'></i> </button>
            </div>
        </div>
    )
}

export default Eventcard
