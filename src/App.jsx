import './App.css'
import Navbar from "./components/navbar/index.jsx";
import Events from "./components/events/index.jsx";
import {useState} from "react";
import SignupForm from "./components/signup_form/index.jsx";

function App() {
    const [searchTerm, setSearchTerm] = useState("");
    const handleNavbarSearch = (search) => {
        setSearchTerm(search);
    }
  return (
    <>
        <Navbar onSearch={handleNavbarSearch}/>
        <SignupForm/>
        <Events searchTerm={searchTerm}/>
    </>
  )
}

export default App
