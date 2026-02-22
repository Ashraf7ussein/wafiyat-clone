import { Deceased } from "@/types";
import Image from "next/image";

const DeceasedCard = ({ deceased }: { deceased: Deceased }) => {
  return (
    <div className="relative h-40 max-h-[160] rounded-lg border border-white/10 overflow-hidden">
      <Image
        src={deceased.image_url ? deceased.image_url : "/unknownPerson.webp"}
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
  );
};

export default DeceasedCard;
