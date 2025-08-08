"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

interface CustomSheetProps {
  title: string;
  children: React.ReactNode;
  trigger?: React.ReactNode;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const CustomSheet = ({
  title,
  children,
  trigger,
  open,
  onOpenChange,
}: CustomSheetProps) => {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      {trigger && <SheetTrigger asChild>{trigger}</SheetTrigger>}

      <SheetContent>
        <SheetHeader>
          <SheetTitle>{title}</SheetTitle>
        </SheetHeader>

        <div className="mt-4 px-4">{children}</div>
      </SheetContent>
    </Sheet>
  );
};

export default CustomSheet;
