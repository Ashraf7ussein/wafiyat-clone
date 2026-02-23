import DeceasedCard from "@/components/DeceasedCard";
import FamiliesSlider from "@/components/FamiliesSlider";
import TabSelector from "@/components/TabSelector";
import WeekObituariesSlider from "@/components/WeekObituaries";
import { Deceased } from "@/types";

const HomePage = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/v1/homepage?page=1&per_page=18`,
    {
      cache: "no-store",
    },
  );

  const data = await response.json();

  const weekDeceaseds = data.data.deceaseds_week.data;
  const todayDeceaseds = data.data.deceaseds_today.data;
  const families = data.data.families.data;

  console.log("weekDeceaseds", weekDeceaseds);
  console.log("todayDeceaseds", todayDeceaseds);
  console.log("families", families);
  return (
    <div className="px-4 space-y-8 pb-10">
      <WeekObituariesSlider weekDeceaseds={weekDeceaseds} />
      <FamiliesSlider families={families} />
      <h2 className="text-xl font-bold">وفيات الأردن </h2>
      <TabSelector />

      <div className="grid grid-cols-3 gap-1.5">
        {todayDeceaseds.map((deceased: Deceased) => (
          <DeceasedCard key={deceased.id} deceased={deceased} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
