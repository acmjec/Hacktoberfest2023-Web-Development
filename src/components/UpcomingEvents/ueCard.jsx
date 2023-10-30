import React from 'react'

const UeCard = ({h1,p}) => {
  return (
    <div className='ue_card_cont'>
      <div className="ue_card_left"></div>
      <div className="ue_card_right">
        <h1>{h1}</h1>
        <p>{p}</p>
      </div>
    </div>
  )
}

export default UeCard
