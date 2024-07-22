import localFont from "next/font/local";

export const greycliffcf = localFont({
  src: [
    {
      path: "./fonts/greycliffcf/thin.otf",
      weight: "300",
      style: "thin",
    },
    {
      path: "./fonts/greycliffcf/regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/greycliffcf/medium.otf",
      weight: "500",
      style: "medium",
    },
    {
      path: "./fonts/greycliffcf/bold.otf",
      weight: "700",
      style: "bold",
    },
    {
      path: "./fonts/greycliffcf/extrabold.otf",
      weight: "900",
      style: "extrabold",
    },
  ],
});
