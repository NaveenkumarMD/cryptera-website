import React from "react";
import "../Styles/ComponentsStyles/Staff_card.css"

function StaffCard(props) {
    return (
        <div className='manager-profile'>
            <div className='manager-profile-container'>
                <div className='circle circle-hover' >
                </div>
                <div className='manager-profile-image img-hover ' >
                    <img src={props.image} alt='event' />
                </div>
                <div className='manager-profile-details'>
                    <div className='manager-profile-name'>
                        <h1>Manager Name</h1>
                    </div>
                    <div className='manager-profile-description'>
                        <p>Third year CSE</p>
                    </div>
                </div>

            </div>
        </div>
    );
}
export default StaffCard;