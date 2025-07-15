export default function Contact() {
  return (
    <div className="min-h-screen bg-tradwear-cream">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Contact Us
          </h1>
          <div className="bg-white rounded-3xl p-12 shadow-lg">
            <h2 className="text-2xl font-semibold text-tradwear-green mb-6">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Our Contact page is being prepared to help you connect with us
              easily. Soon you'll find our contact form, studio address,
              embedded Google Map, and social media links (Instagram, TikTok,
              YouTube).
            </p>
            <div className="space-y-4 text-left max-w-md mx-auto">
              <div className="p-4 bg-tradwear-green/10 rounded-xl">
                <h3 className="font-semibold text-tradwear-green mb-2">
                  Coming Soon:
                </h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• Contact form</li>
                  <li>• Studio address</li>
                  <li>• Interactive map</li>
                  <li>• Social media links</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
