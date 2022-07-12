import React, { useState, useEffect ,createContext } from 'react'
import { PageTransition } from '@steveeeie/react-page-transition';
import {Routes,Route,useLocation} from "react-router-dom";
import './App.css'
import { Home,About, Awarnass, Calc, Cateogry, Climate, Header, Intro } from './components'

// theme
export const ThemeContext = createContext(null);
function App() {
  const location = useLocation();
  // theme
    const [theme , setTheme] = useState("dark")
    const toogleTheme = () => {
      setTheme((curr) => (curr === "dark" ? "light" : "dark"));
    }
    // loader
    const [loading , setLoading] = useState(false)
    useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },7000)
  },[])
  return (
    <>
    {
      loading?
      <>
        <iframe src='https://my.spline.design/earth-d46300571e6a6463b8088eb9d3c30bde/' frameBorder='0'></iframe>
      </>
      :
      <>
      <ThemeContext.Provider value={{theme,toogleTheme}}>
          <main id={theme}>
            <Header/>
            <label>
              <input className='toggle-checkbox' type='checkbox' onChange={toogleTheme}></input>
              <div className='toggle-slot'>
                <div className='moon-icon-wrapper'>
                  <div className="iconify moon-icon" data-icon="feather-moon" data-inline="false"></div>
                </div>
                <div className='toggle-button'></div>
                <div className='sun-icon-wrapper'>
                  <div className="iconify sun-icon" data-icon="feather-sun" data-inline="false"></div>
                </div>
              </div>
            </label>
            {/* content */}
            <PageTransition
                preset="slide"
                transitionKey={location.pathname}
              >
              <Routes location={location}>
                <Route path='/' element={<Home/>}/>
                <Route path='/introduction' element={<Intro/>}/>
                <Route path='/climate' element={<Climate/>}/>
                <Route path='/cateogry' element={<Cateogry/>}/>
                <Route path='/awarnass' element={<Awarnass/>}/>
                <Route path='/agreements' element={<Calc/>}/>
                <Route path='/about' element={<About/>}/>
              </Routes>
            </PageTransition>
          </main>
        </ThemeContext.Provider>
      </>
    }
    </>
  )
}

export default App
