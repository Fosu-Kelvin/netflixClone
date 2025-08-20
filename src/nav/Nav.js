import { useEffect, useState } from 'react'
import './Nav.css'
import img from './images/netF.png'
import { useNavigate } from 'react-router-dom'
const Nav = () => {
  const [show,setShow] = useState(false)
  const navigate = useNavigate()
  const transitionNavBar = () => {
    if(window.scrollY >100){
      setShow(true)
    }else{
      setShow(false)
    }
  }

  useEffect(()=>{
    window.addEventListener("scroll",transitionNavBar)
    return () => window.removeEventListener("scroll",transitionNavBar)
  },[])


  return (
    <div className={`nav ${show && "nav_black"}`}>
        <div className="nav_contents">
            <img 
             onClick={() => navigate('/')}
            className='nav_logo'
            src={img} 
            alt="" 
            />
            <img 
            onClick={() => navigate('/profile')}
            className='nav_avatar'
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" 
            alt="avatar" 
            />
        
        </div>
      
    </div>
  )
}

export default Nav 