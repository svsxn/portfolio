import Background from "./background";
import Card from "./card";
import Intro from "./intro";

export default function Contact() {
  return (
    <section id="contact" className="relative">
      <Background />
      <div className="mx-auto flex w-full max-w-6xl flex-col justify-between gap-10 px-6 py-12 sm:flex-row sm:py-16 lg:py-20">
        <Intro />
        <Card />
      </div>
    </section>
  );
}
