import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Social from "./components/Social";

export default function App() {
  return (
    <div
      className="grid grid-cols-4 min-h-screen transition-colors duration-300"
      style={{
        backgroundColor: "var(--bg-color, white)",
        color: "var(--text-color, black)",
      }}
    >
      <div className="col-span-1 flex flex-col">
        <Navbar />
        <Profile />
        <Social />
      </div>
      <div className="col-span-3">
        <h1 className="text-3xl font-bold mb-5 text-center">
          React + Tailwind Dark Mode
        </h1>
      </div>
    </div>
  );
}
