import React from "react";
import { Card, CardContent } from "../ui/card";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";

interface SummaryCardProps {
  title: string;
  value: number;
  percentage_change: number;
}

const SummaryCard = ({ title, value, percentage_change }: SummaryCardProps) => {
  return (
    <Card className="border-none w-full h-[158px] p-6 rounded-[20px] bg-background-secondary hover:bg-background-secondary/50 transition-colors duration-300 cursor-pointer shadow-none">
      <CardContent>
        <div className="flex items-center justify-between">
          <h5 className="text-primary-black text-[17px] font-bold">{title}</h5>
          <Popover>
            <PopoverTrigger className="cursor-pointer">
              <HiOutlineDotsHorizontal className="text-primary-black size-6" />
            </PopoverTrigger>
            <PopoverContent className="max-w-[120px] p-2 space-y-2">
              <Button className="w-full bg-background-secondary text-primary-black hover:bg-background-secondary/50 cursor-pointer">
                Copy
              </Button>
              <Button className="w-full bg-background-secondary text-primary-black hover:bg-background-secondary/50 cursor-pointer">
                Paste
              </Button>
            </PopoverContent>
          </Popover>
        </div>
        <div className="space-y-2">
          <h3 className="text-primary-black text-[34px] font-bold">
            ${value.toLocaleString()}
          </h3>
          <span
            className={`text-[13px] font-medium ${
              percentage_change >= 0 ? "text-[#3E7383]" : "text-[#3E7383]"
            }`}
          >
            {percentage_change > 0 ? "+" : ""}
            {percentage_change}%
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export default SummaryCard;
