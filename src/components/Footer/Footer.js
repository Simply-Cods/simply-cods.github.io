import React from "react";

import github from '../../images/GitHub Icon.png'
import twittter from '../../images/Twitter Icon.png'

export default function Footer() {
    return (
        <footer>
            <a href="https://twitter.com/Cods__">
                <img src={twittter} alt='twitter-icon'/>
            </a>
            <a href="https://github.com/Simply-Cods">
                <img src={github} alt='github-icon'/>
            </a>
        </footer>
    )
}