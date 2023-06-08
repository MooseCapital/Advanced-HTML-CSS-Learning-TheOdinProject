import {useContext, useEffect, useState, useRef} from 'react'


/*
 Accessibility - meaning, people with disabilities and other limitation can use our website
    with as few barriers as possible

    why it matters - to us, a website without certain features may be an inconvenience, but to a
        disabled person, This could be completely unusable, so we can learn to build the first time
        that is accessible by everyone. Another reason, there are laws requiring accessibility to be implemented

    WCAG - web content accessibility guidelines -> https://www.theodinproject.com/lessons/node-path-advanced-html-and-css-the-web-content-accessibility-guidelines-wcag
         -> shared standards that are simply guidelines

     four principles (POUR)
        Perceivable - users must be able to perceive information from ui. light text on light background can be difficult

        Operable - users must be able to operate the ui or navigation. ui cannot require interaction which the user cannot perform.
            -> a navigation bar with drop-down menu that only expands on hover, would not be operable by keyboard users giving those menu items focus

        Understandable - users must be able to understand information or ui that is presented. ex. any errors must tell the user what is wrong
                and how to fix it

        robust - content must be accessible by current assistive technologies and other user agents.


    condensed WCAG standards from webAIM https://webaim.org/standards/wcag/checklist



Semantic HTML for accessibility

*/

function About(props) {

    return (
        <>

        </>
    )
}

export default About
