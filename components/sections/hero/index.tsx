import Portrait from "./portrait";
import Background from "./background";
import Content from "./content";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate scroll-mt-20 overflow-visible"
    >
      <Background />
      <div className="mx-auto grid min-h-[calc(100svh-5rem)] w-full max-w-6xl items-center px-6 py-16 md:py-20 lg:grid-cols-[1fr_0.92fr] lg:gap-14 lg:py-24">
        <Content />
        <Portrait />
      </div>
    </section>
  );
}
