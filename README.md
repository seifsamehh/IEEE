
# Global Warming

A website talks about global warming and how to solve this problem.


## Demo

[Global Warming](https://ieee-phi.vercel.app/)


## Features

- Light/dark mode toggle
- Live previews
- Fully responsive
- Horizontal scroll
- Text and image animations
- 3d models


## Usage/Examples

```javascript
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
```


## License

[Seif Sameh](https://seif-sameh.vercel.app/)


