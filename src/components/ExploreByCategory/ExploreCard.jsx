import React from 'react'

export default function ExploreCard(props) {
  return (
    <div>
      <div className="card lg:mx-8 mx-8 md:mx-4 lg:px-4 px-2 lg:py-4 py-3 rounded-2xl lg:mb-16 mb-8" style={{background:'linear-gradient(transparent,#222125)',border:'1px solid rgba(255,255,255,0.2)'}}>
        <div className="flex justify-around">
        <div className='me-2' style={{height:'100px'}}>
        <div className="item1">
            <img src={props.img1} alt="item1" width={100} className='rounded-xl mb-2' style={{height:'109px'}}/>
        </div>
        <div className="item2">
            <img src={props.img2} alt="item2" width={100} className='rounded-xl' style={{height:'109px'}}/>
        </div>
        </div>
        <div className="item3" style={{overflow:'clip'}}>
            <img src={props.img3} alt="item3" width={200} className='rounded-xl' style={{height:'225px'}}/>
        </div>
        </div>
        <div className='text-center text-white text-lg font-bold mt-4'>{props.tagline}</div>
      </div>
      
      </div>
    
  )
}
