import { Bag2 } from "iconsax-react";
import { ChartDot } from "@/components/ChartLine";
export default function Dashboard() {
  return (
    <div className="flex flex-col gap-[32px] w-full">
      <div className="flex w-full justify-between items-center">
        <span className="text-2xl font-bold">Dashboad</span>
        <button>Add New + </button>
      </div>
      <div className="grid col-span-4 grid-cols-4 gap-[24px] w-full">
        <div className="bg-[#fff] rounded-[10px] w-full py-[12px] px-[24px] max-h-max flex gap-[24px] items-center justify-start">
          <div className="bg-[#fff4f0] rounded-full size-[72px] flex items-center justify-center">
            <Bag2 size={40} color="#FF8F6B" />
          </div>
          <div className="flex flex-col ">
            <span className="font-bold text-[#030229] text-2xl">190+</span>
            <span className="text-[#030229] text-sm">sales products</span>
          </div>
        </div>
        <div className="bg-[#fff] rounded-[10px] w-full py-[12px] px-[24px] max-h-max flex gap-[24px] items-center justify-start">
          <div className="bg-[#fff4f0] rounded-full size-[72px] flex items-center justify-center">
            <Bag2 size={40} color="#FF8F6B" />
          </div>
          <div className="flex flex-col ">
            <span className="font-bold text-[#030229] text-2xl">190+</span>
            <span className="text-[#030229] text-sm">sales products</span>
          </div>
        </div>
        <div className="bg-[#fff] rounded-[10px] w-full py-[12px] px-[24px] max-h-max flex gap-[24px] items-center justify-start">
          <div className="bg-[#fff4f0] rounded-full size-[72px] flex items-center justify-center">
            <Bag2 size={40} color="#FF8F6B" />
          </div>
          <div className="flex flex-col ">
            <span className="font-bold text-[#030229] text-2xl">190+</span>
            <span className="text-[#030229] text-sm">sales products</span>
          </div>
        </div>
        <div className="bg-[#fff] rounded-[10px] w-full py-[12px] px-[24px] max-h-max flex gap-[24px] items-center justify-start">
          <div className="bg-[#fff4f0] rounded-full size-[72px] flex items-center justify-center">
            <Bag2 size={40} color="#FF8F6B" />
          </div>
          <div className="flex flex-col ">
            <span className="font-bold text-[#030229] text-2xl">190+</span>
            <span className="text-[#030229] text-sm">sales products</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-5 col-span-5 w-full gap-[24px]">
        <div className="col-span-3">
          <ChartDot />
        </div>
        <div className="col-span-2"></div>
      </div>
      <div className="grid grid-cols-5 col-span-5 w-full gap-[24px]">
        <div className="col-span-3"></div>
        <div className="col-span-2"></div>
      </div>
    </div>
  );
}
