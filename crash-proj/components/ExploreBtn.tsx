"use client"
import Image from 'next/image';

const ExploreBtn = () =>{
    return (
        <button type="button" id="explore-btn" className= "mt-7 mx-auto text-white" onClick={()=>console.log('ExploreBtn clicked')}>
            <a href="#events">
                Explore events
                <Image src="/icons/arrow-down.svg" alt="alt-down" width={24} height={24}/>
            </a>
        </button>
    )
}

export default ExploreBtn