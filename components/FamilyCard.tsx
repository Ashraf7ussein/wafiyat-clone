import { Family } from "@/types";
import { FaCheck } from "react-icons/fa6";

const FamilyCard = ({ family }: { family: Family }) => {
  return (
    <div className="bg-white/10 rounded-lg border-2 border-[#444444] flex flex-col justify-center items-center h-27 px-4 gap-3.5">
      <span className="text-[15px] text-center whitespace-nowrap cursor-pointer">
        عائلة {family.value}
      </span>
      <button
        className="flex items-center font-bold justify-center gap-2.5 
      bg-primary rounded-sm text-[14px] px-1.5 py-1 w-full cursor-pointer"
      >
        متابعة <FaCheck />
      </button>
    </div>
  );
};

export default FamilyCard;
