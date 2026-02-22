import FamiliesSlider from "@/components/FamiliesSlider";
import WeekObituariesSlider from "@/components/WeekObituaries";

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
    <div className="px-4 space-y-8">
      <WeekObituariesSlider weekDeceaseds={weekDeceaseds} />
      <FamiliesSlider families={families} />
    </div>
  );
};

export default HomePage;
