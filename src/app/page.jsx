import Link from "next/link";

export default function Home() {
  return (
    <section className="py-12 flex flex-col justify-center min-h-[calc(100vh-140px)]">
      <div className="flex flex-col gap-8 text-center items-center">

        {/* Header Title with Watermark Background */}
        <div className="relative flex flex-col items-center justify-center py-10">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold relative z-10 max-w-3xl leading-tight">
            Next JS Fetching & Rendering
          </h2>
          <span className="text-6xl sm:text-8xl font-medium opacity-10 absolute inset-0 -top-6 sm:-top-10 select-none font-serif text-[var(--foreground)] pointer-events-none">
            Fetching Rendering & Styling
          </span>
        </div>

        {/* CTA Button */}
        <div>
          <Link href={'/foods'} className="btn-primary text-lg px-8 py-4">
            Lets Explore
          </Link>
        </div>

      </div>
    </section>
  );
}