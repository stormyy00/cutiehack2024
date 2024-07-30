import Tab from "./Tab";

const Tabs = ({ counts, events }) => {
  return (
    <>
      <div className="mt-3 grid w-full grid-cols-1 gap-4 p-4 md:grid-cols-4">
        {Object.entries(events).map(([title, count], index) => (
          <Tab key={index} title={title} value={count} />
        ))}
      </div>
    </>
  );
};

export default Tabs;
