"use client";

import AvatarGroupWithInfo from "@/components/AvatarGroup";
import StatusBadge from "@/components/ui/StatusBadge";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SummaryCard from "@/components/dashbaord/SummaryCard";
import { summaryCardsData } from "@/data";
import TransactionTable from "@/components/dashbaord/TransactionTable";
import { FaCaretDown } from "react-icons/fa";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main>
      <section className="flex flex-col gap-5">
        {/* header frame - h2 heading(main heading), active badge, share button, ellipse */}
        <div className="h-fit md:h-10 w-full flex flex-col items-start gap-2 sm:gap-0 sm:flex-row sm:items-center justify-between">
          <div className="flex items-center gap-4 w-full sm:w-fit justify-between">
            <div className="flex items-center gap-1">
              <h2 className="font-bold text-2xl md:text-[34px] text-primary-black">
                Wallet Ledger
              </h2>
              {/* caret */}
              <FaCaretDown className={`size-4 sm:size-5 text-primary-black`} />
            </div>
            {/* custom badge */}
            <StatusBadge title="Active" dotColor="bg-active-green" />
          </div>
          <div className="flex items-center gap-3 justify-end w-full sm:w-fit">
            <Popover>
              <PopoverTrigger>
                <StatusBadge
                  title="Share"
                  className="bg-[#4B8B9F] text-[#020303] cursor-pointer hover:bg-background-secondary transition-colors duration-500"
                />
              </PopoverTrigger>
              <PopoverContent className="max-w-[200px] space-y-2 p-2">
                {["facebook", "X", "whatsApp", "email"].map((item) => (
                  <Button
                    key={item}
                    className="w-full bg-background-secondary text-primary-black hover:bg-background-secondary/50 cursor-pointer"
                  >
                    {item}
                  </Button>
                ))}
              </PopoverContent>
            </Popover>

            <div className="w-9 h-9 border rounded-full flex items-center justify-center cursor-pointer hover:bg-background-secondary transition-colors duration-500">
              <Popover>
                <PopoverTrigger>
                  <Image
                    src={"/dots-horizontal.svg"}
                    width={24}
                    height={24}
                    alt="ellipse"
                  />
                </PopoverTrigger>
                <PopoverContent className="max-w-[100px]">
                  Ellipse
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </div>
        {/* avatar group & avatar info */}
        <AvatarGroupWithInfo />
        {/* tab - overview & transactions
          - summary h3 heading
          - overview cards
          - table (sortable)
      */}
        <div className="flex items-center gap-10 w-full">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="w-full bg-primary-white h-11 rounded-none border-b border-gray-200 p-0 mb-4">
              <div className="self-end mr-auto">
                <TabsTrigger
                  value="overview"
                  className="text-[15px] rounded-none font-medium text-secondary-black dark:text-muted-foreground
      px-3 py-1 border-b-2 border-t-0 border-l-0 border-r-0 bg-transparent shadow-none border-transparent
      data-[state=active]:text-active data-[state=active]:border-b data-[state=active]:shadow-none data-[state=active]:border-[#4B8B9F]
      transition-colors whitespace-nowrap
      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 cursor-pointer"
                >
                  Overview
                </TabsTrigger>
                <TabsTrigger
                  value="transactions"
                  className="text-[15px] rounded-none font-medium text-secondary-black dark:text-muted-foreground
      px-3 py-1 border-b-2 border-t-0 border-l-0 border-r-0 bg-transparent shadow-none border-transparent
      data-[state=active]:text-active data-[state=active]:border-b data-[state=active]:shadow-none data-[state=active]:border-[#4B8B9F]
      transition-colors whitespace-nowrap
      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 cursor-pointer"
                >
                  Transactions
                </TabsTrigger>
              </div>
            </TabsList>
            <TabsContent value="overview">
              {/* summmary section h3 heading, cards */}
              <section className="space-y-[18px]">
                <h3 className="text-primary-black text-xl font-bold">
                  Summary
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-7">
                  {summaryCardsData.map((card, index) => (
                    <SummaryCard
                      key={index}
                      title={card.title}
                      value={card.value}
                      percentage_change={card.percentage_change}
                    />
                  ))}
                </div>

                {/* overview table */}
                <div className="py-4">
                  <TransactionTable />
                </div>
              </section>
            </TabsContent>
            <TabsContent value="transactions">
              {/* transactions section h3 heading, table */}
              <section className="space-y-[18px]">
                <h3 className="text-primary-black text-xl font-bold">
                  Transactions
                </h3>
                <div className="py-4">
                  <TransactionTable />
                </div>
              </section>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </main>
  );
}
