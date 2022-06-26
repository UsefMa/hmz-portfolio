import React from 'react'
import './HomeStyle.css'
import {AiOutlineDown} from 'react-icons/ai'
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <>

        <div className="home-container" id='home'>
            <div className="home-info">
             <p className='title-btn'>Who I'm</p>
             
             <Link style={{cursor:"pointer"}}
              to="about"
          
              smooth={true}
             
              duration={2000}
              
              
            >
              
             <AiOutlineDown size={37} className='down-btn'/>
            </Link>

            </div>

        </div>

    </>
  )
}

export default Home