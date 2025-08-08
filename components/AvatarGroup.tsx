import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { avatarData } from "@/data";



const AvatarGroupWithInfo = () => {
  const AvatarGroup = () => {
    return (
      <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
        {avatarData.map((item, index) => (
          <Avatar className="size-8" key={index}>
            <AvatarImage src={item.imageUrl} alt="" />
            <AvatarFallback>{item.initial}</AvatarFallback>
          </Avatar>
        ))}
      </div>
    );
  };

  const MembershipInfo = () => {
    return (
      <div className="flex items-center gap-1.5">
        <p className="font-medium text-[15px] text-secondary-black">
          Ava, Liam, Noah
        </p>
        <p className="font-medium text-[15px] text-secondary-black">
          +12 others
        </p>
      </div>
    );
  };

  return (
    <div className="flex items-center gap-2">
      <AvatarGroup />
      <MembershipInfo />
    </div>
  );
};

export default AvatarGroupWithInfo;
