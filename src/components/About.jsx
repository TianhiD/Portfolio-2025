
import React from 'react'
import heroImage from '../assets/TD_profile.jpeg'


const About = () => {
  return (
    <div className='bg-black text-white py-20' id='about'>
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
            <h2 className='text-4xl font-bold text-center md-12'>About me</h2>
            <div className='flex flex-col md:flex-row items-center md:space-x-12'>
                <img src={heroImage} alt="" className='w-72 h-80 rounded object-cover mb-8 md:mb-0' />
                <div className='flex-1'>
                    <p className='text-lg mb-8 pt-3'>
                    Hello, I'm Tianhi Devold, a front-end developer from Norway and I'm 24 years old. I'm majoring in front-end development at Kristiania University College right now. However, this spring (2024), I'm taking an exchange semester at SUU in Utah, US, in hopes of learning new skills and meeting people from around the world.  <br />
                    I love developing aesthetically pleasing and intuitive user interfaces that seamlessly combine functionality and design. My passion for creating digital experiences that have a lasting impact and my interest in the constantly altering web technologies have motivated me to pursue a career in front-end development. Apart from coding, I get inspiration from traveling to new places, taking pictures, and spending time with nature.
                    </p>
                    <div className='space-y-4'>
                        <div className='flex items-center'>        
                            <label htmlFor="htmlandcss" className='w-2/12'>HTML & CSS</label>
                            <div className='grow bg-blue-950 rounded-full h-2.5'>
                                <div className='bg-gradient-to-r from-green-200 to-green-400 h-2.5 rounded-full tranform translate-transform duration-300 hover:scale-105 w-10/12'>

                                </div>
                            </div>
                        </div>
                        <div className='flex items-center'>        
                            <label htmlFor="js" className='w-2/12'>JavaScript</label>
                            <div className='grow bg-blue-950 rounded-full h-2.5'>
                                <div className='bg-gradient-to-r from-green-200 to-green-400 h-2.5 rounded-full tranform translate-transform duration-300 hover:scale-105 w-8/12'>

                                </div>
                            </div>
                        </div>
                        <div className='flex items-center'>        
                            <label htmlFor="java" className='w-2/12'>Java</label>
                            <div className='grow bg-blue-950 rounded-full h-2.5'>
                                <div className='bg-gradient-to-r from-green-200 to-green-400 h-2.5 rounded-full tranform translate-transform duration-300 hover:scale-105 w-7/12'>

                                </div>
                            </div>
                        </div>
                        <div className='flex items-center'>        
                            <label htmlFor="kotlin" className='w-2/12'>Kotlin</label>
                            <div className='grow bg-blue-950 rounded-full h-2.5'>
                                <div className='bg-gradient-to-r from-green-200 to-green-400 h-2.5 rounded-full tranform translate-transform duration-300 hover:scale-105 w-7/12'>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About;