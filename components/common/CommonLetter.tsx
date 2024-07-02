import cn from "@/utils/cn";

export const CommonLetter = ({ word }: { word: string }) => {
  const letters = word?.split("");
  return (
    <>
      {letters?.map((letter, index) => (
        <h1
          key={index}
          className={cn("block uppercase mix-blend-screen  text-black ")}
        >
          {letter}
        </h1>
      ))}
    </>
  );
};
