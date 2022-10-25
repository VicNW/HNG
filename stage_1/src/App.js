import './App.css';
import Buttons from "./buttons";
import Header from "./header";
import Footer from "./footer"
import slack_logo from "./img/slack.png";
import Github_logo from './img/Icon.png';

function App() {
 
  return (
   <div className="image-container">
    <Header />
    <div class="link_section">
      <Buttons 
        dname="Twitter Link"
        link="https://twitter.com/__chi__mo__"
        id="twitter"
      />
      <Buttons 
        dname="Zuri Team"
        link="https://training.zuri.team/"
        id="btn__zuri"
        />
      <Buttons 
        dname="Zuri Books"
        link=" http://books.zuri.team"
        id="books"
      />
      <Buttons 
        dname="Python Books"
        link="https://books.zuri.team/python-for-beginners?ref_id=Victor001"
        id="book__python"
      />
      <Buttons 
        dname="Background Check for Coders"
        link="https://background.zuri.team"
        id="pitch"
      />
      <Buttons 
        dname="Design Books"
        link="https://background.zuri.team"
        id="book__design"
      />

      <div>
        <img src={slack_logo} alt="slack_logo" className='icon' />
        <img src={Github_logo} alt="GitHub_logo" className='icon' />
      </div>
      
    </div>
    <hr />
    <Footer />
    <br />

   </div>
 
  );
}

export default App;
