import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Contact from "./components/Contact";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header branding="Kontak Manager" />
      <div className="container">
        <Contact name="John Doe" email="jdoe@gmail.com" phone="555-555-5555" />
        <Contact
          name="Joyce Pauline"
          email="jptantuan@gmail.com"
          phone="+63916854833"
        />
      </div>
    </div>
  );
}

export default App;
