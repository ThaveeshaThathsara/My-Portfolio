import {motion} from "framer-motion";
import Navbar from "../Components/Navbar";
import portfolioimg from "../../images/p1.jpg"; 

const Home = () => {
    return (
        
        <div className="flex">
      <Navbar />
      {/* Column 1: Name and "Hi" section */}
      <div className="overflow-hidden col-2">
        <motion.div
          initial={{
            x: "-80vw",
          }}
          animate={{
            x: "0vw",
          }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
            delay: 0.9,
          }}
          className="ml-[20%] mt-[10%] overflow-hidden"
        >
          <h1 className="mt-[8%] font-bold text-[8vw] font-abc">Hi!</h1>
          <h1 className="font-bold text-[2.5vw] font-abc">I'm Thaveesha Thathsara</h1>
          <p>Computer Science Undergraduate & Tech Enthusiastic</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis unde tempora odit veniam
            <br />possimus rerum quis delectus quae esse
            <br />quaerat dolores libero et est ullam vel, autem suscipit fugit fugiat.
          </p>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            delay: 2,
          }}
          className="pt-10 ml-[25%]"
        >
          <button className="p-5 pt-2 pb-2 text-white bg-black rounded-[50px] mt-5 ml-5">Hire Me</button>
          <button className="p-5 pt-2 pb-2 text-white bg-black rounded-[50px] mt-5 ml-5">Download CV</button>
        </motion.div>
      </div>

      {/* Column 2: Images */}
      <motion.div
        initial={{
          x: "80vw",
        }}
        animate={{
          x: "10vw",
        }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
          delay: 0.9,
        }}
        className="w-[30vw] h-[100vh] bg-black col-2 overflow-hidden relative"
      >
        {/* Nested motion.div for rotation */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
            delay: 1.9,
          }}
          className="absolute "
        >
          <img src={portfolioimg} alt="" className="w-[300px] h-[500px] rounded-[50px] mt-[85px] ml-[60px]" />
        </motion.div>
      </motion.div>
    </div>
    );
};

export default Home;
