import{motion} from 'framer-motion';

const AboutAnimations = () => {
    return (
        <div>
            <motion.div 
        
        initial={{width:'0%'}}
        animate={{width:'100%'}}
        transition={{
            duration:1.2,
            ease:"easeInOut",
            delay:0.2
        }}
        
        
        className="absolute top-0 left-0 z-0 h-screen bg-white">
        </motion.div>

        <motion.div 
        
        initial={{width:'0%'}}
        animate={{width:'90%'}}
        transition={{
            duration:1.5,
            ease:"easeInOut",
            delay:0.5
        }}
        
        className=" bg-gray-950 h-[20vh] z-20 absolute left-0 bottom-0">

        </motion.div>

        <motion.div

        initial={{
            x:'-100vw',
            rotateZ:30

        }}
        animate={{
            x:'-10vw'
        }}
        transition={{
            duration:1.5,
            ease:"easeInOut",
            delay:0.9
        }}
        
        
        className="bg-black h-[170vh] w-[60vw] z-10 absolute -left-[10vw] -top-[50vh]">

        </motion.div>
        </div>
    )
}

export default AboutAnimations