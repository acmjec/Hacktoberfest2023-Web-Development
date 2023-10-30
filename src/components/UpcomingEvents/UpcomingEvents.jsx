import React from 'react'
import './UpcomingEvents.css'
import UeCard from './ueCard'

const UpcomingEvents = () => {

    let cardDetails = [
        {
            h1:"Tech Talk Series",
            p:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis animi magnam eveniet iure voluptas aliquam, voluptatum hic natus saepe facere."
        },
        {
            h1:"Codeathon Challenge",
            p:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis animi magnam eveniet iure voluptas aliquam, voluptatum hic natus saepe facere."
        },
        {
            h1:"HacktoberFest Challenge",
            p:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis animi magnam eveniet iure voluptas aliquam, voluptatum hic natus saepe facere."
        },
        {
            h1:"Beginner to Expert",
            p:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis animi magnam eveniet iure voluptas aliquam, voluptatum hic natus saepe facere."
        },
        {
            h1:"Republic coders 3.0",
            p:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis animi magnam eveniet iure voluptas aliquam, voluptatum hic natus saepe facere."
        },
        {
            h1:"Codepentry",
            p:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis animi magnam eveniet iure voluptas aliquam, voluptatum hic natus saepe facere."
        },
    ]

  return (
    <div className='ue_cont'>
        <h1>UPCOMING</h1>
        <h2>EVENTS</h2>
        <p>At ACM Jec student's chapter, we believe in fostering growth, knowledge, and connections through exiciting events. Our upcoming events are meticolously curated to provide you with invaluable experiences in ever involving tech landscape. Join us for these upcoming oppurtunities.</p>
        <h3>For Event details, registration, and more, please visit our Events Page. Secure your spots, mark your calendars, and embark on your journey of tech exploration with us!</h3>
        <div className="ue_cards">
            {cardDetails && cardDetails.map((item) => (
                <UeCard h1={item.h1} p={item.p} />
            ))}
        </div>
        <div className="ue_top">
            <div className="ue_top1"></div>
            <div className="ue_top2">
                <div></div>
            </div>
            <div className="ue_top3"></div>
        </div>
    </div>
  )
}

export default UpcomingEvents
