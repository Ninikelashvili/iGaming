import Link from "next/link";

export const Hero = () => {
  return (
    <div
      className="relative h-96 md:h-xxl bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/background-3.webp')" }}
    >
      <div className="container mx-auto h-full flex flex-col items-center justify-end text-center px-4 pb-16 md:pb-20">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <h1 className="text-2xl font-bold text-lightIvory drop-shadow-lg z-10 max-w-5xl md:mb-10 sm:text-4xl md:text-6xl">
          Welcome to the Ultimate iGaming Experience!
        </h1>
        <p className="text-xs text-lightIvory/80 mt-4 text-center z-10 max-w-80 sm:max-w-96 md:max-w-2xl sm:text-base md:text-lg">
          Play casino games, bet on sports, and win big. Join now and get a{" "}
          <span className="text-sunsetGold font-bold">100% Welcome Bonus</span>!
        </p>
        <Link
          href="/signup"
          className="mt-6 text-xs inline-block bg-burntSienna text-black font-bold py-2.5 px-8 rounded-full hover:bg-sunsetGold transition z-10 md:text-base  md:py-3 md:px-10"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};
