export const EmptyPage = ({ text }) => {
  return (
    <div
      className="relative h-96 md:h-xxl bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/background-3.webp')" }}
    >
      <div className="container mx-auto h-full flex flex-col items-center justify-center text-center px-4">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <h1 className="text-2xl font-bold text-lightIvory drop-shadow-lg z-10 max-w-5xl md:mb-10 sm:text-4xl md:text-6xl">
          {text}
        </h1>
      </div>
    </div>
  );
};
