import React from 'react'

export const Footer = () => {
  const today =new Date();
  return (
    <footer className='Footer'>
        
          <p> cpoyright &copy{today.getFullYear()}</p>
        
    </footer>
  )
}
export default Footer