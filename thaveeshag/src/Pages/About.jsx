import AboutAnimation from "../Animations/AboutAnimations"
import {motion} from 'framer-motion';
import myimg from '../../images/projects/1.jpg'

const About = ()=>{
    return(
        <div>
            <h1 className="mt-5 text-3xl text-center">About</h1>
            {/* <AboutAnimation/> */}

            <section>

            <div className="flex">

            

                        <div className="mt-10 col-2">
                                <div>
                                    <img src={myimg} alt="" className="w-[50%] ml-10" />
                                </div>
                        </div>

                        <div className="mt-[15%] mr-10 ml-[-30%] col-2">
                                <div>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, neque eget pretium tincidunt, nunc lectus tincidunt est, nec faucibus nunc nunc in libero.
                                    </p>
                                </div>
                        </div>

                        </div>

            </section>

            <section>
                
            </section>
            
        </div>
    )
}

export default About;