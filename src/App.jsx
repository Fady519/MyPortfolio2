
import { useEffect, useState } from 'react';
import Header from './components/1-header/Header';
import Hero from './components/2-hero/Hero';
import Main from './components/3-main/Main';
import Contact from './components/4-contactUs/Contact';
import Footer from './components/5-footer/Footer';
import Skills from './components/skills/Skills';


function App() {

  useEffect( () => {

    window.addEventListener("scroll" , () => {

      if(window.scrollY > 300)
      {
        setShowScrollBTN(true);
      }
      else{
        setShowScrollBTN(false);
      }

    });

  }, []);
 
  const [showScrollBTN , setShowScrollBTN] = useState(false);

  return (
    <>
          <div className='container' id='up'>


            < Header />
            <div className='divider' />
            < Hero />
            <div className='divider' />
            < Skills />
            <div className='divider' />
            < Main />
            <div className='divider' />
            < Contact />
            <div className='divider' />
            < Footer />

            
                <a style={{opacity: showScrollBTN ? 1 : 0 , transition: "2s"}} href='#up'>
                    <button className='scroll2Top'><i class="fa-solid fa-arrow-up"></i></button>
                </a>
            

          </div>
    </>
  )
}

export default App
