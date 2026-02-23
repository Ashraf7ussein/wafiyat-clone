"use client";

import { Deceased } from "@/types";
import dynamic from "next/dynamic";
import Link from "next/link";
import "react-multi-carousel/lib/styles.css";
import DeceasedCard from "./DeceasedCard";

const Carousel: any = dynamic(() => import("react-multi-carousel"), {
  ssr: false,
});

interface Props {
  weekDeceaseds: Deceased[];
}

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2.5,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1.5,
  },
};

const WeekObituaries = ({ weekDeceaseds }: Props) => {
  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">وفيات هذا الأسبوع</h2>
        <Link
          href="/weekObituaries"
          className="bg-primary text-sm font-bold rounded-full px-2 py-1.5"
        >
          عرض الكل
        </Link>
      </div>

      <Carousel
        responsive={responsive}
        swipeable
        draggable
        showDots={false}
        ssr
        infinite
        keyBoardControl
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        itemClass="px-2"
      >
        {weekDeceaseds.map((deceased) => (
          <DeceasedCard
            key={deceased.id}
            deceased={deceased}
            layout="vertical"
          />
        ))}
      </Carousel>
    </>
  );
};

export default WeekObituaries;
