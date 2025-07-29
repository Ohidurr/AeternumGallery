import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Aeternum Gallery</title>
        <meta
          name="description"
          content="Aeternum Gallery - A digital museum where timeless art meets innovation."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 flex flex-col items-center justify-center px-6 text-center">
        {/* Logo / Title */}
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Aeternum Gallery
        </h1>
        <p className="text-gray-500 text-base md:text-lg max-w-md mb-8">
          A digital museum curating timeless works with innovative design. 
          Opening soon — stay connected.
        </p>

        {/* Instagram Section */}
        <div className="mb-8">
          <p className="text-gray-700 mb-3 font-medium">Follow us on Instagram</p>
          <a
            href="https://www.instagram.com/aeternum.gallery/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white px-5 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition"
          >
            @aeternum.gallery
          </a>
        </div>

        {/* Instagram Preview */}
        <div className="grid grid-cols-3 gap-2 max-w-xs mb-10">
          {[1, 2, 3].map((post) => (
            <a
              key={post}
              href="https://www.instagram.com/aeternum.gallery/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="aspect-square bg-gray-200 rounded overflow-hidden shadow-sm hover:opacity-80 transition">
                <img
                  src={`/insta-preview-${post}.jpg`}
                  alt={`Instagram Post ${post}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </a>
          ))}
        </div>

        {/* Mission Statement */}
        <section className="max-w-lg mb-10">
          <h2 className="text-xl font-semibold mb-3">Our Mission</h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            Aeternum Gallery operates as a forward-thinking digital museum, 
            bridging classical curation with contemporary innovation. 
            Our mission is to preserve, present, and promote timeless artworks 
            through immersive online exhibitions and educational outreach.
          </p>
        </section>

        {/* Email Signup */}
        <div className="w-full max-w-sm mb-10">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900"
          />
          <button className="w-full bg-gray-900 text-white rounded-lg px-4 py-2 font-medium text-sm hover:bg-gray-700 transition">
            Notify Me
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 w-full py-4 mt-10">
        <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 space-y-3 md:space-y-0">
          <span>© 2025 Aeternum Gallery. All rights reserved.</span>
          <div className="space-x-4">
            <a href="/privacy" className="hover:text-gray-700">Privacy Policy</a>
            <a href="/terms" className="hover:text-gray-700">Terms of Service</a>
            <a href="/contact" className="hover:text-gray-700">Contact</a>
          </div>
        </div>
      </footer>
    </>
  );
}