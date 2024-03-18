import React from 'react'

function About(props) {
    return (
        <div className={`container my-3 text-${props.mode === "light" ? "dark" : "light"}`}>
            <h2>About</h2>
            TextUtilsBro is an online tool to manipulate and utilize text. <br />
            It is a React Project for practice and solely meant for learning purposes.
        </div>
    )
}

export default About;