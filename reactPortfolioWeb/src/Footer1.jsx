import './footer1.css'
import reactLogo from "./assets/react-2.svg";
import cssLogo from "./assets/cssIcon.svg";

export default function Footer1() {

    return (

        <div className="footerContainer">
            <div className="texttt">
                <h2>Made with</h2>
            </div>
            <div className="line"></div>
            <div>
                <img src={reactLogo} alt="react Logo" />
                <img src={cssLogo} alt="Css Logo" />
            </div>
        </div>
    
  ) 
}