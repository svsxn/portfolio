import { Avatar } from "./avatar";
import Background from "./background";
import Content from "./content";

export default function Hero() {
  return (
    <section
      id="hero"
      className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 pt-12 md:pt-24 scroll-mt-20"
    >
      <Background />
      <Content />
      <Avatar />
    </section>
  );
}
