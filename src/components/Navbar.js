import React from 'react';
import './Navbar.css';


const Navbar = () => {
  return (
    <div>
        <nav>
            <ul>
                <li className="click"><a href="#home">Home</a></li>
                <li className="click"><a href="#education">Education</a></li>
                <li className="click"><a href="#skills">Skills</a></li>
                <li className="click"><a href="#projects">Projects</a></li>
                <li className="click"><a href="#interests">Interests</a></li>
                <li className="clickLast"><a href="#contact">Contact</a></li>

            </ul>
        </nav>
    </div>
  );
};

export default Navbar;