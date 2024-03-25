import React from 'react';
import phone from '../../images/phone.png';
import web1 from '../../images/mbg2.jpg';
import {motion} from 'framer-motion';
import p1 from '../../images/projects/1.jpg';
import p2 from '../../images/projects/2.jpg';
import p3 from '../../images/projects/3.jpg';
import p4 from '../../images/projects/4.webp';
import p5 from '../../images/projects/5.jpg';
import p6 from '../../images/projects/6.webp';
import p7 from '../../images/projects/7.jpg';
import p8 from '../../images/projects/8.jpg';
import Navbar from '../Components/Navbar';
import ProjectsAnimations from '../Animations/AboutAnimations';


const About = () => {

    const about = {
        height: "415px",
        overflowY: "scroll",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
        WebkitOverflowScrolling:'touch',
        border: '20px%',
    };
    /* styles.css */
    const custom = {
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
      };
      
  


  return (

    <div className='overflow-hidden '>


       
         <div>
        <h1 className="p-5 text-3xl font-bold text-center">My Profile Section</h1>
      </div>
        <section className='flex '>

            <div className='mt-10 ml-10 '>
            <motion.div 
      
      initial={{
          x: "-80vw",
      }}
      animate={{
          x: "0vw",
      }}

      transition={{
          duration: 1,
          ease: "easeInOut",
          delay: 0.9,
      }}
    
    className='mt-10 ml-10 '>
      <div className='col-2'>

      <div className="relative  w-[300px] h-[600px] z-10 ">
      <img src={phone} alt="" className="" />

      <div style={about} className="absolute   overflow-y-scroll   mt-[-442px] ">
        <img src={web1} alt="" className="w-[195px]  ml-[55px] rounded-[20px] " />
        
      </div>
      </div>
    </div>
   </motion.div>
</div>

      <div>
        {/* Column 2 */}
      <div className=''>
        <motion.div
          initial={{
            x: "80vw",
          }}
          animate={{
            x: "0vw",
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            delay: 0.9,
          }}
          className=''>
          {/* Content for Column 2 */}
          <div className='mt-[20%] ml-[10%] mr-[10%] text-2xl'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Recusandae provident nam quos impedit voluptates, voluptatum quasi, 
            nostrum magni, vitae et ipsam. Reiciendis
             veniam accusamus sit error. Ullam officiis atque eligendi.

            
          </div>
        </motion.div>
      </div>

      </div>
       

      

        </section>

        <section className='flex bg-black '>

            <div className='mt-10 ml-10 '>
           
   <div className=''>
        <motion.div
          initial={{
            x: "-80vw",
          }}
          animate={{
            x: "0vw",
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            delay: 0.9,
          }}
          className=''>
          {/* Content for Column 2 */}
          <div className='mt-[20%] ml-[10%] mr-[10%] text-2xl text-white'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Recusandae provident nam quos impedit voluptates, voluptatum quasi, 
            nostrum magni, vitae et ipsam. Reiciendis
             veniam accusamus sit error. Ullam officiis atque eligendi.

            
          </div>
        </motion.div>
      </div>
</div>

      <div>
        {/* Column 2 */}
        <motion.div 
      
      initial={{
          x: "80vw",
      }}
      animate={{
          x: "0vw",
      }}

      transition={{
          duration: 1,
          ease: "easeInOut",
          delay: 0.9,
      }}
    
    className='mt-10 mr-10 '>
      <div className='col-2'>

      <div className="relative  w-[300px] h-[600px] z-10 ">
      <img src={phone} alt="" className="" />

      <div style={about} className="absolute   overflow-y-scroll   mt-[-442px] ">
        <img src={web1} alt="" className="w-[195px]  ml-[55px] rounded-[20px] " />
        
      </div>
      </div>
    </div>
   </motion.div>
      

      </div>
       {/* projects */}
        </section>
      
      <section className=''>
        <div>
            
            <h1 className='text-2xl font-bold text-center'>Projects</h1>

        </div>
            <div>
                <div className='flex items-center justify-center h-full'>

                    <div className='w-[200px] h-[350px] bg-red-500 mb-10 mt-10 rounded-2xl ml-5 mr-5'>
                        <img src={p1} alt="" className='w-[200px] h-[200px] rounded-2xl shadow-lg' />
                        <p>dfsd</p>
                        <button className='p-2 text-white bg-black rounded-2xl '>See More</button>
                    </div>

                    <div className='w-[200px] h-[350px] bg-red-500 mb-10 mt-10 rounded-2xl'>
                        <img src={p1} alt="" className='w-[200px] h-[200px] rounded-2xl shadow-lg' />
                        <p>dfsd</p>
                        <button className='p-2 text-white bg-black rounded-2xl '>See More</button>
                    </div>

                    <div className='w-[200px] h-[350px] bg-red-500 mb-10 mt-10 rounded-2xl ml-5 mr-5'>
                        <img src={p1} alt="" className='w-[200px] h-[200px] rounded-2xl shadow-lg' />
                        <p>dfsd</p>
                        <button className='p-2 text-white bg-black rounded-2xl '>See More</button>
                    </div>

                    <div className='w-[200px] h-[350px] bg-red-500 mb-10 mt-10 rounded-2xl ml-5 mr-5'>
                        <img src={p1} alt="" className='w-[200px] h-[200px] rounded-2xl shadow-lg' />
                        <p>dfsd</p>
                        <button className='p-2 text-white bg-black rounded-2xl '>See More</button>
                    </div>

                    <div className='w-[200px] h-[350px] bg-red-500 mb-10 mt-10 rounded-2xl ml-5 mr-5'>
                        <img src={p1} alt="" className='w-[200px] h-[200px] rounded-2xl shadow-lg' />
                        <p>dfsd</p>
                        <button className='p-2 text-white bg-black rounded-2xl '>GitHub</button>
                    </div>
                    
                </div>
            </div>

            <div className='flex items-center justify-center'>
                <button className='p-3 mb-5 rounded-xl bg-slate-500'>See More</button>
            </div>

        

      </section>

      {/* skills */}

      <section className=''>
        <div>
            <h1 className='mb-5 text-2xl text-center'>My Skills</h1>
        </div>

        <div>

        <div className='bg-black'>
            <div className='flex p-[200px]'>
                <div className=' col-2'>
                        <p className='text-white '>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                             Cupiditate, obcaecati perspiciatis sapiente quam nobis accusantium iste 
                             nihil vero odio culpa quisquam, 
                             rerum repellat adipisci quaerat,
                             perferendis dolorem omnis? Veritatis, nihil.
                        </p>
                </div>
                <div className='ml-[50%] text-white'>
                        adf
                </div>
            </div>
        </div>

        </div>

        
      </section>

      <section className='mt-10 '>
        <div>
            <div className='flex items-center justify-center '>
                <div className='w-[200px] h-[200px] mb-10
                 bg-black rounded-full cursor-pointer'>

                </div>
            </div>
        </div>
      </section>
    

      
    </div>
  );
};

export default About;
