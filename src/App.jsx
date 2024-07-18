import './App.css'
import {Route, Routes} from "react-router-dom";
import Header from "./components/Header.jsx";
import {Container} from 'react-bootstrap';
import Home from "./page/product/Home.jsx";
import InsertForm from "./page/product/InsertForm.jsx";


function App() {
  return (
    <div>
      <InsertForm/>
      {/*<Header/>*/}
      {/*<Container>*/}
      {/*  <Routes>*/}
      {/*    <Route path={"/"} element={<Home/>}/>*/}
      {/*    <Route path={"/insertForm"} element={<InsertForm/>}/>*/}
      {/*    <Route path={"/product/:id"} element={<Detail/>}/>*/}
      {/*    <Route path="/joinForm" element={<JoinForm/>}/>*/}
      {/*    <Route path="/loginForm" element={<LoginForm/>}/>*/}
      {/*    <Route path="/updateForm/:id" element={<UpdateForm/>}/>*/}
      {/*  </Routes>*/}
      {/*</Container>*/}
    </div>
  )
}

export default App
