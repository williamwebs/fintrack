"use client";

import { Button } from "@/components/ui/button";

const ErrorPage = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="max-w-3xs w-full flex flex-col items-center gap-4 ">
        <h3 className="text-primary-black text-2xl font-public-sans font-normal">
          An Error occured. Refresh and Try again. If error persists, contact
          support
        </h3>
        <Button className="w-full h-10 bg-active-green hover:bg-active-green/50 transition-colors duration-300 text-primary-white">Contact support</Button>
      </div>
    </div>
  );
};

export default ErrorPage;
