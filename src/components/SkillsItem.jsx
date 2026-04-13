export const SkillsItem = ({ title, items }) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="bg-primary/80 text-white text-base px-2 py-0.5 rounded-2xl">
        {title}
      </h1>

      <div className="grid grid-cols-4 gap-3 mt-2">
        {items.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="w-10 h-10 flex items-center justify-center"
            >
              <Icon className={`w-8 h-8 ${item.color}`} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
