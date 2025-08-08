const Loading = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="max-w-3xs w-full flex flex-col items-center gap-4 ">
        <div className="w-10 h-10 rounded-full border-b animate-spin border-active-green"></div>
        <p className="text-primary-black text-base font-public-sans font-normal">
          FinTrack...
        </p>
      </div>
    </div>
  );
};

export default Loading;
