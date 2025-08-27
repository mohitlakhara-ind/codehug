import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-[80vh] w-full bg-background flex items-center"
    >
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6 md:px-12">
        {/* Left Content */}
        <div className="flex flex-col space-y-6 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-text leading-tight">
            Code Smarter. Build Faster.
          </h1>
          <p className="text-base sm:text-lg text-text-muted max-w-lg mx-auto md:mx-0">
            A developer-first blog with tutorials, insights, and resources to
            level up your coding journey.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              href="/blog"
              className="px-6 py-3 rounded-xl bg-accent text-accent-foreground font-semibold hover:opacity-90 transition"
            >
              Start Reading
            </Link>
            <Link
              href="/about"
              className="px-6 py-3 rounded-xl border border-border text-text font-medium hover:bg-muted transition"
            >
              Learn More
            </Link>
          </div>

          {/* Optional Stats */}
          <div className="flex flex-wrap justify-center md:justify-start gap-8 pt-6">
            <div className="text-center md:text-left">
              <p className="text-2xl font-bold text-text">10+</p>
              <p className="text-sm text-text-muted">Coding Guides</p>
            </div>
            <div className="text-center md:text-left">
              <p className="text-2xl font-bold text-text">1k+</p>
              <p className="text-sm text-text-muted">Monthly Readers</p>
            </div>
          </div>
        </div>

        {/* Right Content - Hero Image */}
        <div className="flex justify-center md:justify-end">
          <Image
            src="/code-thinking.svg"
            alt="code thinking illustration"
            width={500}
            height={500}
            className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
}
