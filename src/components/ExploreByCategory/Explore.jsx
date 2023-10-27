import React from 'react'
import ExploreCard from './ExploreCard'

export default function Explore() {
    const exploreCardData = [
        {
            img1_src: '/images/code blue.jpg',
            img2_src: '/images/code-black bg.jpg',
            img3_src: '/images/laptop.jpg',
            tagline: 'Hackathon'
        },
        {
            img1_src: '/images/core to advance.jpg',
            img2_src: '/images/bits.jpg',
            img3_src: '/images/interactive session.jpg',
            tagline: 'Seminars'

        },
        {
            img1_src: '/images/basics to brilliance.jpg',
            img2_src: '/images/java session.jpg',
            img3_src: '/images/coder.jpg',
            tagline: 'Tech Talks'
        }
    ]
  return (
    <>
    <div className="container mb-36 mx-auto text-center">
        <div className='text-center'>
            <h1 className='md:text-8xl text-6xl font-[Bayon] text-transparent bg-gradient-to-r from-[#FAFF00] from-40% to-60% to-[#00FFFF] bg-clip-text'>EXPLORE</h1>
            <h2 className='md:text-5xl text-3xl font-[Bayon] text-white'>BY CATEGORY</h2>
        </div>
        <div className="flex xl:justify-center md:flex-row md:justify-center flex-col mt-4">
        {exploreCardData.map((cardData)=>(
            <ExploreCard img1={cardData.img1_src} img2={cardData.img2_src} img3={cardData.img3_src} tagline={cardData.tagline}/>
        ))}
        </div>
        <span className="text-xs text-white px-8 py-2 rounded-3xl" style={{background: 'linear-gradient(black, black) padding-box, linear-gradient(to right, #FAFF00, #00FFFF) border-box', border:'3px solid transparent',cursor:'pointer'}}>SEE MORE</span>
    </div>
    </>
  )
}
