import Image from "next/image";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import ProjectOverview from "./components/ProjectOverview";
export default function Home() {
  return (
    <div>
      <Navbar/>
      <Landing/>
      <ProjectOverview/>
    </div>
  )
}
