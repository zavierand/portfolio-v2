import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';

export default function NavBar() {
    const [toggle, setToggle] = useState(null);

    return(
        <div className="z-50 bg-[#333333] text-[#d6d5d0] fixed w-screen">
            <div>
                <ScrollLink
                    to="hero"
                    className="cursor-pointer">
                    Zavier
                </ScrollLink>
            </div>
            <div className="grid grid-cols-3 items-center">
                <ul>
                    <li>
                        <ScrollLink
                            to="abtme"
                            className="cursor-pointer">
                            About Me
                        </ScrollLink>
                    </li>
                    <li>
                        <ScrollLink
                            to="contact"
                            className="cursor-pointer">
                            Contact
                        </ScrollLink>
                    </li>
                    <li>
                        <ScrollLink
                            to="projects"
                            className="cursor-pointer">
                            Projects
                        </ScrollLink>
                    </li>
                </ul>
            </div>
        </div>
    );
}