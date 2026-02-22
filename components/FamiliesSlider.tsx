"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import "react-multi-carousel/lib/styles.css";
import { Family } from "@/types";
import FamilyCard from "./FamilyCard";

const Carousel: any = dynamic(() => import("react-multi-carousel"), {
  ssr: false,
});

interface Props {
  families: Family[];
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

const FamiliesSlider = ({ families }: Props) => {
  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">عائلات الأردن</h2>
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
        {families.map((family) => (
          <FamilyCard key={family.id} family={family} />
        ))}
      </Carousel>
    </>
  );
};

export default FamiliesSlider;
