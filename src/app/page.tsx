import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col py-8 px-6 lg:px-16 bg-white text-gray-800 max-w-screen-xl mx-auto">
      <Head>
        <title>GreenBeam App</title>
      </Head>

      {/* Navigation */}
      <nav className="w-full flex justify-start space-x-4 lg:space-x-8 mb-4 lg:mb-8">
  <a href="#faq" className="text-green-600 font-semibold transition hover:underline">FAQ</a>
  <Link href="/privacy-policy" className="text-green-600 font-semibold transition hover:underline">Privacy Policy</Link>
  <a href="mailto:cameroncronheimer@gmail.com" className="text-green-600 font-semibold transition hover:underline">Contact</a>
</nav>

      {/* App showcase */}
      <section className="flex flex-col lg:flex-row items-center justify-between w-full mb-12">
        {/* App Description and Download */}
        <div className="flex flex-col space-y-4 lg:space-y-6 pr-6 items-center lg:items-start">
          <h1 className="text-4xl lg:text-5xl font-bold mb-3">
            <span className="text-green-600">Green</span><span className="text-black">Beam</span>
          </h1>
          <p className="text-lg">Your pocket rangefinder ⛳️</p>
          <a href="https://apps.apple.com/us/app/greenbeam/id6470087916" className="transition transform hover:scale-105">
            <Image src="/badge.svg" alt="Download on the App Store" width={160} height={45} />
          </a>
        </div>

        {/* App Preview */}
        <div className="w-2/3 sm:w-1/2 lg:w-1/3 flex-shrink-0 relative overflow-hidden rounded-md shadow-lg mt-8 lg:mt-0">
          <video autoPlay loop muted playsInline className="max-w-full h-auto">
            <source src="/Preview.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
      {/* FAQ */}
      <section id="faq" className="w-full mt-12">
        <h2 className="text-xl sm:text-2xl font-bold mb-6 text-green-600">Frequently Asked Questions</h2>
        <div className="space-y-4">

          <div className="space-y-2">
            <h3 className="font-semibold text-green-600">How does GreenBeam work?</h3>
            <p>- GreenBeam uses the Apple MapKit API to detect your location. Simply drag around on the map, and it will calculate the yards away from your current position.</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-green-600">What is the minimal iOS version to run GreenBeam?</h3>
            <p>- iOS versions 17+ are required to run GreenBeam.</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-green-600">Do I need internet access to use GreenBeam?</h3>
            <p>- Yes, an active internet or cellular connection is required to access the Apple MapKit API and to provide real-time ranging.</p>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold text-green-600">Is GreenBeam only for golf?</h3>
            <p>- While designed for golfers, anyone needing to measure distances outdoors might find GreenBeam handy.</p>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold text-green-600">How much battery does GreenBeam use?</h3>
            <p>- GreenBeam is optimized for minimal battery consumption. However, as with all location-based apps, continued use of GPS can decrease battery life.</p>
          </div>

        </div>
      </section>
      {/* Footer */}
      <footer className="w-full text-center mt-16">
        <p className="text-gray-600">© 2023 GreenBeam. All rights reserved. 🇨🇦 </p>
      </footer>
    </main>
  )
}
