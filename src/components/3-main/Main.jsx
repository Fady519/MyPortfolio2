
import { useState } from 'react';
import './main.css';

import { BsGithub, BsLink45Deg, BsArrowRight } from "react-icons/bs";

export default function Main() {

  // Add New Project Here Only
  const myProjects = [
    {
      projectTitl: "Ecommerce",
      category: "React",
      
      imgPath: "/original-6d481cb0624a2e46d3df96914f11827e.webp", 
      github: "https://github.com/Fady519/Ecommerce_React",
      live: "https://github.com/Fady519/Ecommerce_React",
      description: "A full-featured E-commerce platform built with React. Implements product browsing, shopping cart logic, and a responsive modern UI."
    },

    {
      projectTitl: "Leon Template",
      category: "HTML & CSS",
      
      imgPath: "/8d335adb-0c03-4f70-933b-e3d2b5c76d8e.avif", 
      github: "https://github.com/Fady519/HTML_And_CSS_Leon_Templete",
      live: "https://fady519.github.io/HTML_And_CSS_Leon_Templete/",
      description: "A static, pixel-perfect landing page developed exclusively using native HTML and CSS, focusing on visual fidelity and clean structure."
    },

    {
      projectTitl: "Portfolio",
      category: "HTML & CSS",
      
      imgPath: "/original-4c3441e0a044f7b404816489b447cf98.webp", 
      github: "https://github.com/Fady519/HTML_And_CSS_Portfolio",
      live: "https://fady519.github.io/HTML_And_CSS_Portfolio/#projects",
      description: "A professional personal portfolio website showcasing skills, experience, and projects in a structured, engaging, and fully responsive layout."
    },

    {
      projectTitl: "Bootstrap Template",
      category: "HTML & CSS",
      
      imgPath: "/icons-hero.png", 
      github: "https://github.com/Fady519/Bootstrap_Templete",
      live: "https://fady519.github.io/Bootstrap_Templete/",
      description: "A highly responsive website template built using the Bootstrap framework, guaranteeing cross-device compatibility and rapid deployment of standard components."

    },

    {
      projectTitl: "Special Design",
      category: "JavaScript",
      
      imgPath: "/letter-js-logo-design-template-js-j-s-letter-logo-modern-flat-minimalist-business-company-sign-2HANTEY.jpg", 
      github: "https://github.com/Fady519/Special_Desgin_JS",
      live: "https://fady519.github.io/Special_Desgin_JS/",
      description: "A unique and creative design implementing advanced interactions and custom animations using vanilla JavaScript for a dynamic user experience."
    },

    {
      projectTitl: "To Do List",
      category: "JavaScript",
      
      imgPath: "/original-48e58f52126f9a71b2f6c62b0639611c.webp", 
      github: "https://github.com/Fady519/To-Do-List",
      live: "https://fady519.github.io/To-Do-List/",
      description: "A Simple task management application (To Do List) utilizing JavaScript to perform CRUD operations and leverage Local Storage for data persistence."
    },

    {
      projectTitl: "Bookmarker",
      category: "JavaScript",
      
      imgPath: "/original-6957f237d0fcd2256ed070c0763a866a.webp", 
      github: "https://github.com/Fady519/Bookmarker_Login",
      live: "https://fady519.github.io/Bookmarker_Login/",
      description: "A web utility for saving and organizing website bookmarks, built with JavaScript to provide a clean and functional link management interface."
    },
      {
      projectTitl: "Weather API",
      category: "JavaScript",
      
      imgPath: "/images.png", 
      github: "https://github.com/Fady519/Weather_API",
      live: "https://fady519.github.io/Weather_API/",
      description: "A simple and interactive weather application built with JavaScript, allowing users to search any city and instantly view real-time temperature, humidity, wind speed, and more using a live weather API."
    }


  ]

  const [arr, setArr] = useState(myProjects);
  const [activeButton, setActiveButton] = useState("All Projects");

  const buttons = [
    "All Projects",
    "HTML & CSS",
    "JavaScript",
    "React",
    ".Net MVC",
    ".Net API"
  ];

  const handleFilter = (btn) => {
    setActiveButton(btn);

    if (btn === "All Projects") {
      setArr(myProjects);
    } else {
      const filtered = myProjects.filter((p) => p.category === btn);
      setArr(filtered);
    }
  };

    return (
      <main className='flex main-container' id='projects'>

        {/* LEFT BUTTONS */}
        <section className='flex left-section'>
          {buttons.map((btn) => (
            <button
              key={btn}
              onClick={() => handleFilter(btn)}
              className={activeButton === btn ? "active" : ""}
            >
              {btn}
            </button>
          ))}
        </section>

        {/* RIGHT PROJECT CARDS */}
        <section className='flex right-section'>
          {arr.map((item) => (
            <article key={item.projectTitl} className='card'>
              
              
              <img src={import.meta.env.BASE_URL + item.imgPath} alt='' /> 

              <div style={{ width: "266px" }} className='box'>
                <h2 className='title'>{item.projectTitl}</h2>
                <p className='subtitle'>
                  {item.description}
                </p>

                <div style={{ gap: "11px" }} className='flex icons'>
                  <a href={item.live} target='_blank'>
                    <BsLink45Deg className='icon' />
                  </a>

                  <a href={item.github} target='_blank'>
                    <BsGithub className='icon' />
                  </a>

                  <a className='link flex' href={item.live} target='_blank'>
                    More <BsArrowRight className='icon-arrow' />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </section>

      </main>
    );
}