import { Image } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import { LaunchList } from "./components/LaunchList";
import { LaunchDetails } from "./components/LaunchDetails";
import logo from "./assets/logo-spacex.png";
import ToggleColorMode from "./components/ToggleColorMode";

export function App() {
  return (
    <>
      <ToggleColorMode />
      <Image m={4} src={logo} width={300} alt="" />
      <Routes>
        <Route path="/" element={<LaunchList />} />
        <Route path="launch/:launchId" element={<LaunchDetails />} />
      </Routes>
    </>
  );
}

