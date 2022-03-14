import './Header.css';
import {useState} from "react"
import ReactDOM from "react-dom"

import Main from "../Main/Main"
import Contact from '../Contact/Contact';


function Header() {
  let [portStyle, setPortStyle] = useState("activeTab")
  let [contStyle, setContStyle] = useState("")

  function tooglePage (e) {
    const mainShell = document.getElementById("mainShell")
    if(e.target.id === "contactBut") {
        ReactDOM.render(<Contact/>,mainShell)
        setPortStyle("")
        setContStyle("activeTab")
    }
    if(e.target.id === "portfolioBut") {
        ReactDOM.render(<Main/>, mainShell)
        setPortStyle("activeTab")
        setContStyle("")
    }

  }

  return (
    <>
      <header>
        <div id="headerName">
          J. Vingtoft  
        </div>
        <div>
          <span onClick={tooglePage} id="portfolioBut" className={portStyle}>
            Portfolio
          </span>
          <span onClick={tooglePage} id="contactBut" className={contStyle}>
            Contact
          </span>
        </div>
      </header>
    </>
  );
}

export default Header;