function Profile() {
  return (
    <div className="mx-2 p-2 bg-indigo-200 dark:bg-gray-700 rounded-2xl">
      <img
        src="src\images\pexels-therato-1933239.jpg"
        alt="backgound"
        className=" rounded-xl"
      />
      <img
        src="src\images\1761549188722.jpg"
        alt="naji"
        className="w-48 rounded-full mt-[-100px] ml-6"
      />
      <h2 className="text-3xl mt-8 ml-4">Basir Naji</h2>
      <h3 className="text-[16px] ml-4 mt-2 mb-4">
        Front-end Developer & UI/UX Designer
      </h3>
    </div>
  );
}

export default Profile;
