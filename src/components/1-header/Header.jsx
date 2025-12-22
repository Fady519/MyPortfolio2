

import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { BsSun, BsMoon } from "react-icons/bs";
import "./header.css";

export default function Header() {
  const [showModel, setShowModel] = useState(false);
  

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ?? "dark"
  );


  useEffect(() => {
  
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);

    
    localStorage.setItem("theme", theme);
  }, [theme]);
  
  
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <header className="flex">
        
        <button
          onClick={() => setShowModel(true)}
          className="menu flex icon-redaus"
        >
          <GiHamburgerMenu />
        </button>

        <nav>
          <ul className="flex">
            <li> <a href="#about"> About </a> </li>
            <li> <a href="#"> Articles </a> </li>
            <li> <a href="#projects"> Projects </a> </li>
            <li> <a href="#"> Speaking </a> </li>
            <li> <a href="#contact"> Contact </a> </li>
          </ul>
        </nav>

        
        <button 
          className="mode flex"
          onClick={toggleTheme}
        >
          
          {theme === "light" ? <BsMoon /> : <BsSun />}
        </button>

        
        {showModel && (
          <div className="fixed">
            <ul className="model">
              <li className="close-btn">
                <button onClick={() => setShowModel(false)}>
                  <IoMdClose size={22} />
                </button>
              </li>
              
              <li><a href="#">About</a></li>
              <li><a href="#">Articles</a></li>
              <li><a href="#">Projects</a></li>
              <li><a href="#">Speaking</a></li>
              <li><a href="#">Users</a></li>
            </ul>
          </div>
        )}
      </header>
    </>
  );
}

