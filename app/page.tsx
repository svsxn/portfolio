import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center w-full pt-24 mx-8">
      <section id="hero">
        <div className="flex flex-col items-center gap-6">
          <div>
            <Image
              width={256}
              height={256}
              alt="Profile picture"
              src="/profile-picture.png"
              className="rounded-full"
            />
          </div>
          <div className="flex flex-col items-center">
            <span className="text-center">
              Full-Stack Web Developer | Next.js & Supabase
            </span>
            <h1 className="text-6xl font-bold text-center">
              Sebastian Magnucki
            </h1>
          </div>
        </div>
      </section>
    </div>
  );
}
