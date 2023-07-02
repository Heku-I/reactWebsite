import { useState } from "react"
import githubLogo from "./assets/githubLogo.png";
import linkedInLogo from "./assets/linkedInLogo.png";
import './Bodyindex.css'
import { LeftBodyIndex } from "./LeftBodyIndex";
import { RightBodyIndex } from "./RightBodyIndex";



export function Bodyindex() {

    return (
        <>
            <div className="Container">
                <LeftBodyIndex></LeftBodyIndex>
                <RightBodyIndex></RightBodyIndex>
            </div>
        </>
    )

} 