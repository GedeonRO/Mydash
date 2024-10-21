import {
  CalendarAdd,
  Category,
  Chart2,
  DollarSquare,
  Setting2,
} from "iconsax-react";

export default function Sidebar() {
  return (
    <div className="bg-[#fff] items-center w-[250px] ">
      <div className="flex flex-col justify-between h-screen">
        <div className="flex flex-col gap-[48px]">
          <span className="pl-6 py-[24px] text-4xl font-bold text-[#605BFF]">
            {"<Dev />"}
          </span>
          <div className="flex flex-col gap-[12px] ">
            <div className="py-[12px] pl-[24px] flex gap-[12px] text-[#a0a0af] hover:text-[#605BFF] items-center hover:bg-gradient-to-r hover:from-[#ACA9FF] hover:via-[#fff] hover:to-[#fff] ">
              <Category variant="Bold" />
              <span className="font-semibold text-inherit">Dashboard</span>
            </div>
            <div className="py-[12px] pl-[24px] flex gap-[12px] text-[#a0a0af] hover:text-[#605BFF] items-center hover:bg-gradient-to-r hover:from-[#ACA9FF] hover:via-[#fff] hover:to-[#fff]">
              <DollarSquare variant="Bold" />
              <span className="font-semibold text-inherit">Invoice</span>
            </div>
            <div className="py-[12px] pl-[24px] flex gap-[12px] text-[#a0a0af] hover:text-[#605BFF] items-center hover:bg-gradient-to-r hover:from-[#ACA9FF] hover:via-[#fff] hover:to-[#fff]">
              <Chart2 variant="Bold" />
              <span className="font-semibold text-inherit">Analytics</span>
            </div>
            <div className="py-[12px] pl-[24px] flex gap-[12px] text-[#a0a0af] hover:text-[#605BFF] items-center hover:bg-gradient-to-r hover:from-[#ACA9FF] hover:via-[#fff] hover:to-[#fff]">
              <CalendarAdd variant="Bold" />
              <span className="font-semibold text-inherit">Schedule</span>
            </div>
            <div className="py-[12px] pl-[24px] flex gap-[12px] text-[#a0a0af] hover:text-[#605BFF] items-center hover:bg-gradient-to-r hover:from-[#ACA9FF] hover:via-[#fff] hover:to-[#fff]">
              <Setting2 variant="Bold" />
              <span className="font-semibold text-inherit">Settings</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
