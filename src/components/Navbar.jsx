import ThemeSwitcher from "./ThemeSwitcher";

function Navbar() {
  return (
    <div className="flex justify-between items-center p-2 bg-indigo-200 dark:bg-gray-700 rounded-2xl">
      <h2 className="text-2xl ml-2 text-indigo-500 font-semibold">B♾️N</h2>
      <ThemeSwitcher />
    </div>
  );
}

export default Navbar;
