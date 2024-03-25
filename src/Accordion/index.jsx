import React, { Fragment, useState } from 'react'
import { motion } from 'framer-motion';
import AccordionToggle from './toggle';
import './style.css';



export default function Accordian({ accordOptions }) {


  const [accord, setAccord] = useState(0);
  const [hoverAccord, setHoverAccord] = useState(0);

  const handleAccordClick = (id) => {
    setAccord(accord === id ? 0 : id);
  }


  return (
    <>
      <div>
        {accordOptions.map((option) => (
          <div key={option.id} style={{ position: 'relative', width: '100vw', display: 'flex', justifyContent: 'center' }}>
            <div className='accord-container'> 
              <motion.button 
                className='accord-card' 
                onClick={() => handleAccordClick(option.id)} 
                onMouseEnter={() => setHoverAccord(option.id)}
                onMouseLeave={() => setHoverAccord(0)}
                style={{ height: 100, display: 'flex', position: 'relative', }}
              >
                <div>
                  <div 
                    className='accord-icon-bg' 
                    style={{
                      backgroundColor: hoverAccord === option.id ? 'rgb(257, 257, 257, 0.5)' : 'rgb(257, 257, 257, 0.1)',
                      borderRadius: 8,
                      height: 35,
                      width: 35,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      transition: '0.4s ease-in-out'
                    }}
                  >
                    <AccordionToggle isOpen={accord === option.id} />
                  </div>
                </div>
                <div style={{ position: 'absolute', left: 72 }}>
                  <h4>{option.title}</h4>
                </div>                                    
              </motion.button>
              <div style={{ position: 'relative' }}>
                {accord === option.id && (
                  <motion.div
                    style={{
                      width: '100%',                     
                      marginBottom: 32 ,
                      paddingLeft: 16,
                      paddingRight: 16                                     
                    }}
                    initial={{ y: 60, opacity: 0.1, }}
                    animate={{ y: [20, -20, 0], opacity: 1, }}
                    transition={{ 
                      duration: 0.5, 
                      ease: 'easeInOut',
                      y: { type: 'spring', stiffness: 180, damping: 10 }
                    }}
                  >
                    <p>{option.desc}</p>
                  </motion.div>
                )}  
              </div>
              <motion.div 
                style={{ width: '100%', height: 2, zIndex: 200, backgroundColor: 'rgb(257, 257, 257, 0.2)' }}
                initial={{ y: 50}}
                animate={{ y: 0 }}
                transition={{ duration: 0.4, ease: 'easeInOut'}}
              />
            </div>                                                      
          </div>
        ))}                     
      </div>
    </>
  )
}
