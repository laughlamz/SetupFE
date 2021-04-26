import React from "react";
import SearchBar from "../components/SearchBar";
import './TopBar.css';

export default function TopBar() {
    return (
        <div className="Header">
            <div className="TopBar">
                <div className="Signature">
                    <img
                        className="BigIcon"
                        src="https://static.wixstatic.com/media/f3daa1_f5b1fda7563141ca916a3fa551142e7f~mv2.png/v1/fill/w_80,h_80,al_c,q_85,usm_0.66_1.00_0.01/n-white.webp"
                        alt="new"
                    />
                    <div className="Company">
                        UDGYT
                    </div>
                </div>
                <a className="Info" href='https://www.nudgyt.com/' target="_blank" rel="noreferrer">
                    Home
                </a>
            </div>
            <div className="WrapSearchBar">
                <SearchBar />
            </div>
        </div>
    );
}
