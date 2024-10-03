import styled from "styled-components";
import { getLastUrlPath, InDevelopmentPage, MainPage, PortalManageBlock, WelcomePage } from './'
import { Navigate, Route, Routes } from "react-router-dom";
import ProjectsReestr from "./pages/projects_reestr_page";


  

interface Props{

}

function App(props:Props) {
  return(
    <Routes>
    <Route
      path="/"
      element={localStorage.getItem("user_auth") == "true" ? <Navigate to={"/main"}/> : <WelcomePage/>}
    />
    <Route
      path="/main"
      element={localStorage.getItem("user_auth") == "true" ? <MainPage component={<InDevelopmentPage/>}/> : <Navigate to={"/"}/> }
    />
    <Route
      path="/reestr_project"
      element={localStorage.getItem("user_auth") == "true" ? <ProjectsReestr/> : <Navigate to={"/"}/>}
    />
    <Route
      path="/library"
      element={localStorage.getItem("user_auth") == "true" ? <MainPage component={<InDevelopmentPage/>}/> : <Navigate to={"/"}/>}
    />
    <Route
      path="/monitoring"
      element={localStorage.getItem("user_auth") == "true" ? <MainPage component={<InDevelopmentPage/>}/> : <Navigate to={"/"}/>}
    />
    <Route
      path="/portal_manage"
      element={localStorage.getItem("user_auth") == "true" ? <MainPage component={<PortalManageBlock/>}/> : <Navigate to={"/"}/>}
    />
    <Route
      path="*"
      element={<Navigate to={"/"}/>}
    />
  </Routes>
  )
}

 



export default App;

