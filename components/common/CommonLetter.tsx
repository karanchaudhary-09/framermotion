import cn from "@/utils/cn";

export const CommonLetter = ({ word }: { word: string }) => {
  const letters = word?.split("");
  return (
    <>
      {/* {letters?.map((letter, index) => (
        <h1
          key={index}
          className={cn("block uppercase mix-blend-screen  ")}
        >
          {letter}
        </h1>
      ))} */}
      <h1 className={cn("block uppercase mix-blend-screen  ")}>{word}</h1>
    </>
  );
};
