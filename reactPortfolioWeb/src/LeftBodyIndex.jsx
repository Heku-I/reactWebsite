import { useState } from "react"
import githubLogo from "./assets/githubLogo.png";
import linkedInLogo from "./assets/linkedInLogo.png";
import './LeftBodyindex.css'

export function LeftBodyIndex() {

    return (
        <>
            <div className="leftBody">
                <div className="text">
                    <h1>I am a Fullstack developer</h1>
                    <h2>Hi, I am Hekuran Ismajli.<br /> Currently studying Applied Data Science<br /> from OsloMet, Norway</h2>
                </div>
                <div className="logo">
                    <img src={linkedInLogo} alt="LinkedIn logo" href="https://www.linkedin.com/in/hekuranismajli/"></img>
                    <img src={githubLogo} alt="Github logo"></img>
                </div>
            </div>

        </>
    )

}