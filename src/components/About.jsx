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



Semantic HTML for accessibility -https://www.theodinproject.com/lessons/node-path-advanced-html-and-css-semantic-html

    it may be easier to use div and span for everything, this is not correct. Where if we use nav, h1 etc.
    the users that need accessible friendly, have a much easier time.

    importance - semantic html provides meaning and context, a paragraph elements provides semantic meaning but no context
        -> a button has meaning and context, so users know to operate it.

    div & span elements - provide no semantic meaning or context to assistive technologies.
        -> makes it difficult to perceive, operate and understand them. They still have their place in layouts
        -> or for generic text,

    Example - if we made a rock, paper scissors game, we might use a div to hold which choice to click
        <div class='rock'>Rock</div>

        however, a screen reader would announce the text contents "rock" "paper", and the user might think
        it is plain text, and move on. There is no context to tell them to click the div.

        If we change div to button, now the screen reader has context and knows it is clickable
            <button class='rock'>Rock</button>

    Using semantic HTML correctly
        -> if user is meant to click something, use button element
        -> if you want to provide tabular data, use a table element.
        -> when using an input, always create a relationship between the input and a matching Label
            -> the label provides context for what the input means to assistive technology.
            -> a label also increase the click size of the input, which is always useful since we have had a hard time clicking
            -> small inputs in the past
        -> use the type attribute on all inputs, which gives context and makes it easier to fill out
            -> type="text"
        -> when using list of some sort, us ol, ul or dl, and their related list item elements.

    Headings and landmarks -
        Headings are H1 - H6 elements - these act as headings on the page
        Landmarks are regions of the page, there are 7
            -> aside, footer, form, header, main, nav , section

        these landmarks give context where div does not. screen readers can navigate
        a page visa landmarks and headings by navigation keyboard commands, or a menu in the screen reader

        by using H1 - H6 the screen reader is shown in order of importance, and most screen reader users say they
        first read headings before anything! so our most important info should be here.

        we should use headings in order of importance, and not skip headings h1 > h2 >h3
         this means we don't skip a heading because we need a smaller style, like if h3 doesn't exist but we jump to H4 for the smaller text
          -> this would be bad practice and confuse the screen reader


    Accessible colors - using the wrong color combination or relying solely on color to convey information
        can end up making things more difficult to perceive and understand for some users.
        we DONT have to limit ourselves when it comes to color schemes but we must be mindful or how it affects useability.

        Contrast ratio - difference in brightness between two colors expressed as a ratio
            white text, white background - 1:1 lowest
            black text, white background - 21:1 highest

            Normal text - defined as text with font size less than 24px, or 18.66px for bold text
                -> large text is just higher than the above values

            Level AA(minimum) - contrast ratio of at least 4.5:1 for normal text and 3:1 for large text

            Level AAA(enhanced) - requires a contrast ratio of at least 7:1 for normal text and 4.5:1 for large text.

            tool to check contrast ratios - https://webaim.org/resources/contrastchecker/
                -> in chrome dev tools, click element picker tool in elements tab-> hover over element in web page
                    -> click color picker tool for "color" property under styles to view contrast ratio as well

            We see different buttons and form text in black and white to simulate what colorblindness might look like
                -> we must add extra information besides color so the users know, such as an asterisk in a form to notify of required items
                ->simply having red text could be confused by users that cant see the different colors

            Dark mode - how to toggle it, how to take users preferred os theme and save their preference for later visits
                -> it can take much work to implement, but can be great accessibility feature, but not required.
                https://css-tricks.com/a-complete-guide-to-dark-mode-on-the-web/

        Keyboard navigation -

            Focus - button element provides context screen reader users need but they're focusable and have event
                handling for keyboards by default. pressing 'space' or 'enter' keys when button has focus will trigger click event
                when we made our game to use click on divs like rock paper scissors. we need to add extra events to make keyboard work with it like button, and to make sure
                it is focusable

                we must NOT remove focus styles, we might by default, so we must make sure their is indication that button or item is focused
                Keyboard users will have no visual indication what element has focus. This is like us browsing with invisible cursor!

                things like buttons, select, form inputs will auto focus when hitting tab, but things like image and p elements will not focus, they have no reason to


            Tab order - order in which elements on the page will receive focus when pressing the tab key.
                we can change the tab order ourself with tabindex attribute
                    <div tabindex='0'>This is the first element listed in the HTML.</div>

                we should make sure the tab order matches the visual order of elements. If it is different, the user can be confused and frustrated
                -> this means tab will go top to bottom from the first html elements, but our css could style the first item to be out of visual order
                -> this confuses users because tab should go to the first item visually, we either fix the order in html or manually tabindex
                    -> we test this by simply pressing tab on our page to see that we are jumping to the element we expect

            Hidden content - sometimes we hide content until event occurs, when we do this we might visually hide it. But we must make sure it is still hidden
                from assistive technologies.

                One way to prevent this frustrating behavior is to give each individual item in that hidden content a tabindex value of -1, since that prevents an element from
                 receiving focus via the keyboard

                A better solution is giving the container for the hidden content itself either the display: none or visibility: hidden CSS property when it’s hidden, and removing or
                overriding that property when it’s meant to be visible.



    Meaningful text - A lack of meaningful text can affect all users, but especially those who rely on assistive technologies, when the screen readers announces it.

            Links on a page rules:
                -> text content of the <a> element should indicate where its link redirects to and keep it brief,(100 characters) avoid "click here" or "this page"
                -> if link opens or downloads a file, tell the user what kind of file and the file size.
                -> indicate if the link opens automatically in a new tab or window with target="_blank" attribute,
                        -> <a href='...'>GitHub (opens in new tab)</a>

            Forms:
                a good error should tell the user what is wrong specifically and what format to fix the error with.
                                <div class='input-error'>Error: 'JohnSmith@@test.com' is not valid. Example of a valid email: example@yourdomain.com.</div>

            Alternative text: Alternative text is a textual substitute for non-text content in web pages. This article is focused on images, but
                        its principles also apply to multimedia and other non-text content.

                ->when using an image for decoration, or you don't want the user to be aware of it, use a blank alt attribute
                    ->if we omit the alt attribute altogether, the image will still be announced, we control what is by the reader with alt="text here"

                1) screen readers announce the alt attribute text
                2) if the image fails to load, the browser shows alt text in place of the image visually
                3) search engines use alt text to assess the websites purpose.

                Every image should have an alt attribute, even if its alt="" , sometimes called null alt text
                    -> usually a few words are only necessary, rarely do we need a sentence.
                    -> do NOT be redundant, such as writing words that are also in the paragraphs below it.
                    -> if the image does not convey relevant content, leave it blank


*/

function About(props) {

    return (
        <>
        </>
    )
}

export default About
