import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";

const poppins = localFont({
  src: "./Fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});

export default function Home() {
  return (
    <main className="bg-purple-100 min-h-screen">
      <section className="grid grid-cols-1 md:grid-cols-2 h-auto md:h-[60vh]">
        {/* Left Side - Text & Buttons */}
        <div className="flex flex-col gap-6 items-center justify-center px-6 md:px-12 py-12 md:py-0 text-center md:text-left">
          <h1 className={`text-2xl sm:text-3xl md:text-4xl font-bold ${poppins.className}`}>
            The best URL shortener in the Market
          </h1>
          <p className="text-sm sm:text-base md:text-lg max-w-lg">
            We are the most straightforward URL Shortener in the world. Most URL shorteners track you or ask for your details. We understand your needs, and hence we have created this URL shortener.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center md:justify-start">
            <Link href="/shorten">
              <button className="bg-purple-500 rounded-lg shadow-lg px-6 py-2 font-bold text-white hover:bg-purple-600 transition">
                Try Now
              </button>
            </Link>
            <Link href="/github">
              <button className="bg-purple-500 rounded-lg shadow-lg px-6 py-2 font-bold text-white hover:bg-purple-600 transition">
                GitHub
              </button>
            </Link>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="relative w-full h-64 md:h-full">
          <Image
            className="object-cover mix-blend-darken"
            alt="Vector illustration"
            src="/vector.jpg"
            fill
          />
        </div>
      </section>
    </main>
  );
}
