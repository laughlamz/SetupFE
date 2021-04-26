import React from "react";
import './UserRepo.css';
import SvgGithub from '../Image/github.svg';

export default function UserRepo({ username }) {
    return (
        <div className="UserRepo">
            <img className="GithubIcon" src={SvgGithub} alt="Github-icon" />
            Github <b>{username.toLowerCase()}</b> repository
        </div>
    );
}
