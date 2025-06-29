export default function HeroText({ headSp1, headSp2, subSp1, subSp2 }) {
  return (
    <div className="flex flex-col justify-center items-center gap-3 px-5">
      <h1 className="text-center font-rubik font-bold text-2xl sm:text-3xl">
        {headSp1}
        <span className="hidden sm:inline">
          <br />
        </span>
        {headSp2}
      </h1>
      <p className="text-center font-rubik text-sm sm:text-base  tracking-tight">
        {subSp1}
        <span className="hidden sm:inline">
          <br />
        </span>
        {subSp2}
      </p>
    </div>
  );
}
