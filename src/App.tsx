import styled from "styled-components";
import { getLastUrlPath, InDevelopmentPage, MainPage, PortalManageBlock } from './'
import { Navigate, Route, Routes } from "react-router-dom";
import ProjectsReestr from "./pages/projects_reestr_page";


  

interface Props{

}

function App(props:Props) {
  return(
    <Routes>
    <Route
      path="/"
      element={<Navigate to={"/main"}/>}
    />
    <Route
      path="/main"
      element={<MainPage component={<InDevelopmentPage/>}/>}
    />
    <Route
      path="/reestr_project"
      element={<ProjectsReestr/>}
    />
    <Route
      path="/library"
      element={<MainPage component={<InDevelopmentPage/>}/>}
    />
    <Route
      path="/monitoring"
      element={<MainPage component={<InDevelopmentPage/>}/>}
    />
    <Route
      path="/portal_manage"
      element={<MainPage component={<PortalManageBlock/>}/>}
    />
  </Routes>
  )
}

 



export default App;

