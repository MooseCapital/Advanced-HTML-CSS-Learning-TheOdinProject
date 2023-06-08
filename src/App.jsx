import {useState, useEffect, useRef, useContext} from 'react'
import {AppContext} from "./components/AppContextProvider.jsx";
import {Link, Navigate, Route, Routes} from "react-router-dom";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";

function App(props) {
  // install react-router-dom in main.jsx with a click
  //set light-mode or dark-mode in main.jsx

  return (
    <div className={`${props.colorMode} App`}>
        <nav><Link to={"/"}>home</Link></nav>
        <nav><Link to={"/about"}>about</Link></nav>


        <Routes>
            <Route index element={<Home/>}/>


            {/* catch all, so any unknown pages navigate back to the home page, or
             error page to show it doesn't exist, then auto redirect home  */}
            <Route path="*" element={<Navigate to="/" />} />
            <Route path={"/about"} element={<About/>}/>
        </Routes>
    </div>
  )
}

export default App











/*
to deploy to github pages
add this to package.json scripts

"deploy": "gh-pages -d dist"

npm install gh-pages --save-dev

npm run build

npm run deploy

**To make work with github pages we must do ALL of these **

go into package.json and add
"homepage": ".",


go into vite.config.js and add:
 base: "/github-repo-here/"

HashRouter is for when we don't have a server handling routes, it uses history api, BrowserRouter is for when we have server
    BrowserRouter works in local host because its' a server handling it, but fails on Github pages with no server
<HashRouter>
        <App colorMode={"light-mode"} />
 </HashRouter>

<Router basename={'/github-repo-here'}>
    <App />
</Router>



*/