import React from 'react';
import { Link } from 'react-router-dom';
import { IoHomeSharp } from "react-icons/io5";
import { GrProjects } from 'react-icons/gr';
import { MdMail } from 'react-icons/md';
import { IoMdContact } from 'react-icons/io';
import { motion } from 'framer-motion';

const Navbar = () => {
    return (
        <motion.div
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 1.2 }}
            className="bg-black w-[8vw] h-[100vh] flex items-center justify-center">
            
            <nav className="text-3xl text-white"> 
                <div className="">
                <IoHomeSharp className="cursor-pointer " />
                <IoMdContact className="mt-10 cursor-pointer " />
                <GrProjects className="mt-10 cursor-pointer " />
                <MdMail className="mt-10 cursor-pointer " />
                </div>
               
            </nav>
        </motion.div>
    );
}

export default Navbar;
