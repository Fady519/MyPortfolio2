import Fady from '../../assets/me (1).jpg';

import './hero.css';
import { FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import Lottie from "lottie-react";
import devAnimation from "../../../public/developer skills.json";
import { motion } from "framer-motion";


export default function Hero() {
  return (
    <section className='hero flex' id= 'about'>

      <div className='left-section'>

        {/* Avatar + Verified */}
        <div className='parent-avatar flex'>
          <motion.img 
          
            initial = {{transform : "scale( 0 )"}}
            animate = {{transform : "scale( 1.2 )"}}
            transition = {{duration : 2}}
            className='avatar' 
            src={Fady}
            alt='avatar' 
          />

          <div className='icon-verified'>
            <MdVerified />
          </div>
        </div>

        {/* Title */}
        <motion.h1 className='title'

        initial = {{opacity: 0}}
        animate = {{opacity: 1}}
        transition = {{duration : 2}}

        > Full Stack Developer — Turning ideas into real, working products.
        </motion.h1>

        {/* Subtitle */}
        <p className='subtitle'>
            I’m Fady Kaiser Gerges — a passionate developer crafting fast, elegant, and user-focused digital products.
            Always learning, always improving, always building.
        </p>

        {/* Social Icons */}
        <div className='all-icons flex'>
          <div className='icon icon-twitter'><FaTwitter /></div>
          <div className='icon icon-instagram'><FaInstagram /></div>
          <div className='icon icon-linkedin'><a href='https://www.linkedin.com/in/fady-kaiser/'> <FaLinkedin /> </a></div>
          <div className='icon icon-github'> <a href='https://github.com/Fady519'> <FaGithub /> </a></div>
        </div>

      </div>

      {/* Right Section */}
      <div className='right-section animation'>
        <Lottie className=''  style={{height: 355}} animationData={devAnimation} />
      </div>

    </section>
  );
}
