import { TypewriterEffect } from "../ui/typewriter-effect";

export function TypewriterEffectDemo() {
  const words = [
    {
      text: "KNIT's",
    },
    {
      text: "Arcade",
    },
    {
      text: "for",
    },
    {
      text: `Recycled Treasures`,
      className: "text-secondary dark:text-secondary",
    },
  ];
  return <TypewriterEffect words={words} />;
}
