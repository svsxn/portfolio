import Portrait from "./portrait";
import Background from "./background";
import Content from "./content";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate scroll-mt-18 overflow-visible"
    >
      <Background />
      <div className="mx-auto grid min-h-[calc(100svh-4.5rem)] w-full max-w-6xl items-center px-6 pt-14 pb-20 md:pt-16 md:pb-24 lg:grid-cols-[1fr_0.82fr] lg:gap-8 lg:pt-16 lg:pb-24">
        <Content />
        <Portrait />
      </div>
    </section>
  );
}
