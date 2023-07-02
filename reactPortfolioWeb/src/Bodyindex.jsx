import { useState } from "react"
import githubLogo from "./assets/githubLogo.png";
import linkedInLogo from "./assets/linkedInLogo.png";


export function Bodyindex(){

    return(
    <>
    <h1>I am a Fullstack developer</h1>
    <h2>Currently studying Applied Data Science from OsloMet, Norway</h2>
    <img src={githubLogo} alt="Github logo"></img>
    <img src={linkedInLogo} alt="LinkedIn logo"></img>
    </>
    )

} 