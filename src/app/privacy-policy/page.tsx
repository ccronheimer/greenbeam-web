import Head from 'next/head'
import Link from 'next/link';
export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen flex flex-col p-4 sm:p-8 md:p-24 bg-white text-gray-800 max-w-screen-xl mx-auto">
            {/* Navigation */}
      <nav className="w-full flex justify-start space-x-4 lg:space-x-8 mb-4 lg:mb-8">
  <Link href="/" className="text-green-600 font-semibold transition hover:underline">Home</Link>
</nav>
            <Head>
                <title>GreenBeam Privacy Policy</title>
            </Head>

            <h1 className="text-3xl sm:text-4xl font-bold mb-6">
                Privacy Policy for <span className="text-green-600">GreenBeam</span>
            </h1>

            <section className="w-full mt-6">
                <p className="mb-4">Last updated: 09/21/2023</p>

                <p className="mb-4">
                    At GreenBeam, we respect your privacy and are committed to protecting it. This Privacy Policy will explain how we handle any personal data we collect from you or provide to us when you use our application.
                </p>

                <h2 className="text-xl sm:text-2xl font-bold mt-6 mb-4 text-green-600">1. Information We Collect</h2>

                <p className="mb-4">
                    GreenBeam does not store any personal data. We utilize the Apple MapKit API to determine your current location and calculate distances on the map. No personal data is saved, stored, or shared by GreenBeam.
                </p>

                <h2 className="text-xl sm:text-2xl font-bold mt-6 mb-4 text-green-600">2. How We Use Your Information</h2>

                <p className="mb-4">
                    As we do not collect or store any personal data, there is no usage of such data. The application solely focuses on providing distance calculation using Apple MapKit API.
                </p>

                <h2 className="text-xl sm:text-2xl font-bold mt-6 mb-4 text-green-600">3. Third-Party Services</h2>

                <p className="mb-4">
                    GreenBeam uses the Apple MapKit API to provide its core functionality. We do not share any data with Apple or any other third parties.
                </p>

                <h2 className="text-xl sm:text-2xl font-bold mt-6 mb-4 text-green-600">4. Changes to This Privacy Policy</h2>

                <p className="mb-4">
                    We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
                </p>

                <h2 className="text-xl sm:text-2xl font-bold mt-6 mb-4 text-green-600">5. Contact Us</h2>

                <p className="mb-4">
                    If you have any questions about this Privacy Policy, please contact us at: cameroncronheimer@gmail.com
                </p>
            </section>

            <footer className="w-full text-center mt-12 sm:mt-16">
                <p className="text-gray-600">© 2023 GreenBeam. All rights reserved.</p>
            </footer>
        </main>
    )
}