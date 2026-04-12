import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Experience from "./components/Expreience";
import ContactMe from "./components/ContactMe";
import Skills from "./components/Skills";

export default function App() {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 min-h-screen md:h-screen transition-colors duration-300 md:overflow-hidden"
      style={{
        backgroundColor: "var(--bg-color, white)",
        color: "var(--text-color, black)",
      }}
    >
      {/* Left sidebar – fixed height on desktop, auto on mobile */}
      <div className="col-span-1 flex flex-col gap-2 m-1">
        <Navbar />
        <Profile />
        <Contact />
      </div>

      {/* Right content – scrollable on desktop, flows on mobile */}
      <div className="col-span-1 md:col-span-2 lg:col-span-3 flex flex-col gap-2 my-2.5 pr-2 md:overflow-y-auto m-1">
        <Experience />
        <Skills />
        <Projects />
        <ContactMe />
      </div>
    </div>
  );
}
