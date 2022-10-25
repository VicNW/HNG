import "./App.css";
import zuri_logo from "./img/Group 1.png"
import ingressive_logo from "./img/I4G.png"

function Footer() {
   return (
   <div className='footer_container'>
    <img src={zuri_logo} alt="-zuri logo"/>
    <p className="footer_p">HNG Internship 9 Frontend Task</p>
    <img src={ingressive_logo} alt="ingressive logo"/>
   </div>
   )
}

export default Footer

