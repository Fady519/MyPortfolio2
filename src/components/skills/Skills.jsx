import React from 'react'
import './skills.css'
import { BsPatchCheckFill } from "react-icons/bs";
import Css from '../../assets/css3.svg';
import Xpressjs from '../../assets/expressjs.svg';
import Figma from '../../assets/figma.svg';
import Javascript from '../../assets/javascript.svg';
import Mongodb from '../../assets/mongodb.svg';
import Nodejs from '../../assets/nodejs.svg';
import ReactJS from '../../assets/react.svg';
import Tailwind from '../../assets/tailwindcss.svg';

import HTML from '../../assets/html5-original.svg'
import Bootstrap from '../../assets/bootstrap-plain.svg'
import DonNet from '../../assets/dot-net-original.svg'
import JQuery from '../../assets/jquery-original.svg'
import CSharp from '../../assets/csharp-original.svg'
import DataBase from '../../assets/microsoftsqlserver-plain.svg'
import Next from '../../assets/mongodb.svg'
import MVC from '../../assets/png-clipart-net-mvc-logo-asp-net-mvc-logo-net-framework-model-view-controller-framework-text-logo.png'


const skillsData = [
  {
    id: 1,
    image: Css,
    title: 'CSS',
    dist: "User Interface",
    level: "100%"
  },

  {
    id: 2,
    image: Javascript,
    title: 'Javascript',
    dist: "Interaction",
    level: "70%"
  },

  {
    id: 3,
    image: ReactJS,
    title: 'ReactJS',
    dist: "Framework",
    level: "80%"
  },

  {
    id: 4,
    image: Tailwind,
    title: 'Tailwind',
    dist: "User Interface",
    level: "70%"
  },

  {
    id: 5,
    image: MVC,
    title: 'MVC',
    dist: "Backend Framework",
    level: "70%"
  },

  {
    id: 6,
    image: DataBase,
    title: 'DataBase',
    dist: "Database",
    level: "80%"
  },

  {
    id: 7,
    image: Figma,
    title: 'Figma',
    dist: "Design Tool",
    level: "60%"
  },

  {
    id: 8,
    image: Next,
    title: 'Next',
    dist: "React Framework",
    level: "60%"
  },

  {
    id: 9,
    image: HTML,
    title: 'HTML',
    dist: "Markup Language",
    level: "100%"
  },

  {
    id: 10,
    image: Bootstrap,
    title: 'Bootstrap',
    dist: "CSS Framework",
    level: "100%"
  },

  {
    id: 11,
    image: DonNet,
    title: 'DonNet',
    dist: "Backend Framework",
    level: "70%"
  },

  {
    id: 12,
    image: JQuery,
    title: 'JQuery',
    dist: "Js Feature",
    level: "80%"
  },

  {
    id: 13,
    image: CSharp,
    title: 'CSharp',
    dist: "Backend Language",
    level: "70%"
  }

]



function Skills() {
  return (
    <>
<section className='skills'>
      <div className='top_section'>
        <h5 className='text-light'> What Skills I Have </h5>
        <h2> My Experience </h2>
      </div>

      <div className='container container_skills'>

        {skillsData.map( ({id, image , title , dist , level}) => ( 
        
          <article key={id} className='card_skill'>
                
                <div className='icon'>
                  <img src={image} alt={title} />
                </div>

                <div className='content'>
                   
                    <h4> {title} </h4> 
                  
                    <p> {dist} </p> 
                    
                    <div className="progress">
                      <div className="progress-fill" style={{ width: level }}></div>
                    </div>
                </div>

            </article>


        ))}

      </div>

    </section>
        
    </>
  )
}

export default Skills

