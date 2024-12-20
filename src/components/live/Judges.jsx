import Profile from "./leads/Profile";
import Title from "./Title";
import { JUDGES } from "@/data/live/Judges";
const Judges = () => {
  return (
    <div className="-mt-1 flex flex-col items-center justify-center gap-10 bg-gradient-to-b from-cutie-blue-200 from-[70%] to-cutie-blue-300 py-10 font-righteous">
      <Title text={"Judges"} subtext={"Thank you so much!"} />
      <div className="mt-[8vh] flex w-full flex-wrap justify-center gap-8 py-2 md:w-8/12 md:gap-14">
        {JUDGES.map((judge, index) => (
          <div key={index} className="w-1/3 md:w-fit">
            <Profile name={judge.name} image={judge.image} team={judge.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Judges;
