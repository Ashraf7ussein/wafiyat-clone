import Link from "next/link";

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

  return (
    <div className="px-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">وفيات هذا الأسبوع</h2>
        <Link
          href="/weekObituaries"
          className="bg-primary text-sm font-bold rounded-full px-2 py-1.5"
        >
          عرض الكل
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
