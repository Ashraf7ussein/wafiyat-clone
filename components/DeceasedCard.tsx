import { Deceased } from "@/types";
import Image from "next/image";

interface Props {
  deceased: Deceased;
  layout?: "vertical" | "horizontal";
}

const DeceasedCard = ({ deceased, layout = "horizontal" }: Props) => {
  return (
    <>
      {layout === "vertical" ? (
        <div className="relative h-40 max-h-40 rounded-lg border-2 border-border overflow-hidden">
          <Image
            src={
              deceased.image_url ? deceased.image_url : "/unknownPerson.webp"
            }
            alt={deceased.full_name}
            fill
            className="object-cover"
          />

          <div className="absolute bottom-0 left-0 w-full text-white text-center p-1">
            <span className="block text-sm font-semibold leading-tight">
              {deceased.full_name}
            </span>
            <span className="block text-xs">{deceased.husbandName}</span>
            <span className="block text-xs">{deceased.death_date}</span>
          </div>
        </div>
      ) : (
        <div className="rounded-lg bg-card-background border-2 border-border flex items-center gap-4 py-1 px-2">
          <Image
            src={
              deceased.image_url ? deceased.image_url : "/unknownPerson.webp"
            }
            alt={deceased.full_name}
            width={80}
            height={80}
            className="rounded-xl object-cover border-2 border-primary/50"
          />

          <div className="space-y-0.5">
            <span className="block text-lg">{deceased.full_name}</span>
            <span className="block text-lg text-text">
              {deceased.husbandName}
            </span>
            <span className="block text-md text-text">
              {deceased.death_date}
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default DeceasedCard;
