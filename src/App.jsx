import ThemeSwitcher from "./ThemeSwitcher";

export default function App() {
  return (
    <div
      className="grid grid-cols-4 min-h-screen transition-colors duration-300"
      style={{
        backgroundColor: "var(--bg-color, white)",
        color: "var(--text-color, black)",
      }}
    >
      <div className="col-span-1 flex justify-between">
        <ThemeSwitcher />
        <h1>about me</h1>
      </div>
      <div className="col-span-3">
        <h1 className="text-3xl font-bold mb-5 text-center">
          React + Tailwind Dark Mode
        </h1>
      </div>
    </div>
  );
}
