import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";
import ProjectsScreen from "./screens/ProjectsScreen";
import DashboardScreen from "./screens/DashboardScreen";
import Header from "./components/Header";

function App() {
  return (
    <>
    <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/about" element={<AboutScreen />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/dashboard" element={<DashboardScreen />} />
          <Route path="/projects" element={<ProjectsScreen />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
