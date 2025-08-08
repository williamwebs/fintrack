import Link from "next/link";

const PageNotFound = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full flex flex-col items-center gap-5">
        <h2 className="text-primary-black font-medium text-3xl">
          Missed your way?
        </h2>
        <Link
          href={"/"}
          className="bg-active-green hover:bg-active-green/50 transition-colors duration-300 max-w-[300px] w-full h-10 rounded flex items-center justify-center text-primary-white font-public-sans font-normal"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
