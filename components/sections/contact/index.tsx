import Background from "./background";
import Card from "./card";
import Intro from "./intro";

export default function Contact() {
  return (
    <section id="contact" className="relative">
      <Background />
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-12 sm:py-16 md:grid-cols-[1fr_25rem] lg:py-20">
        <Intro />
        <Card />
      </div>
    </section>
  );
}
