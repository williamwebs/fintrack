import React from "react";
import clsx from "clsx";
import { Badge } from "./badge";

type StatusBadgeProps = {
  title: string;
  dotColor?: string;
  className?: string;
  onClick?: () => void;
};

const StatusBadge = ({
  title,
  dotColor = "",
  className = "",
  onClick,
}: StatusBadgeProps) => {
  return (
    <Badge
      className={clsx(
        "flex items-center gap-1 font-normal text-[14px] text-primary-black bg-background-secondary py-0.5 px-2 rounded-2xl",
        className
      )}
      onClick={onClick}
    >
      {dotColor && (
        <div className={clsx("w-1.5 h-1.5 rounded-full", dotColor)} />
      )}
      {title}
    </Badge>
  );
};

export default StatusBadge;
