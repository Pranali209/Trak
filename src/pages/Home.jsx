import React, { useEffect, useState } from 'react'
import map from '../assets/map.svg'
import Cycle from '../component/Cycle'
import FAQ from '../component/FAQ'
import About from '../component/About'
import Works from '../component/Works'
import Footer from '../component/Footer'
import Soon from '../component/ComingSoon'
import SmokeEmulsion from '../component/Waves'
import { motion } from "motion/react"
import Button from '../component/Button'
import sign from '../assets/scribble.svg'
import waves from '../assets/waves.svg'
import Scribble from '../assets/scribble.svg'


const Home = () => {
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOverlay(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <div className='px-20 max-md:px-5'>
      {
  showOverlay ? (
    <div >
      <SmokeEmulsion />
    </div>
  ) : null
}
        <h1 className='w-[80%] max-md:w-full fontClass relative font-medium text-6xl max-md:text-4xl my-10 lg:block max-md:hidden displayMe'>
          Your dream career isn’t a faraway <br />
          destination – it’s a journey.Trak makes<br />
          sure you’re on the &nbsp; 
          <span className='inline-block'>
          <span className='text-[#39DC8E] fontClassFastHand font-medium '>
              right path
             <img src={Scribble} alt="scrible lines"  className='h-6'/>
           </span>
            </span> 
           
            <span className='inline '>,every <br/> <span className='font-medium  absolute top-[11.5rem] inline-block'>step of the way.</span></span>
       
     
       </h1>


       <h1 className=' max-md:w-full fontClass font-medium text-7xl max-md:text-4xl my-10 lg:hidden max-md:block '>
       Your dream career isn’t a faraway <br />
          destination – it’s a journey.Trak makes<br />
          sure you’re on the &nbsp; 
          <span className='inline-block '>
          <span className='text-[#39DC8E] fontClassFastHand font-medium  -z-50'>
              right path
             <img src={Scribble} alt="scrible lines"  className='h-6 max-md:h-3'/>
           </span>
            </span> 
           
            <span className='inline '>,every <br/> <span className='font-medium  absolute top-[11.5rem] max-md:top-[24.5rem] inline-block'>step of the way.</span></span>
       
     
       </h1>


        <div className='flex w-full justify-between max-md:flex-col'>
          <div>
            <p className='mt-20'>
              AI-Powered Personalized Pathways with Exciting Milestones to Turn <br /> Your Dreams into Reality.
            </p>
            <Button txt="Explore My Career Path with Trak"
            className=''
            navigateTo='error' />

          </div>
          
           <Cycle/>



        </div>

        <section  id='Soon' className='my-20 overflow-hidden'>
          <Soon />
        </section>

        <section  id='Works' className='my-5'>
          <Works />
        </section>

        <section id='FAQ' className='my-20'>
          <FAQ />
        </section>

        <section  id='About' className='my-20'>
          <About />
        </section>

      </div>
      <Footer />
    </>
  )
}

export default Home