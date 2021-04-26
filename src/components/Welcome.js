import React from "react";
import SvgGithub from '../Image/github.svg';
import './Welcome.css';

export default function Welcome({ username }) {
    return (
        <div>
            <div className="WelcomeTitle">
                Welcome to github data page
            </div>
            <div className="WelcomeDescription">
                A simple page that help you search your github data quickly.
            </div>
            <div className="WelcomeIcon">
                <img src={SvgGithub} style={{ height: 64 }} alt="Github-icon" />
            </div>
        </div>
    );
}
