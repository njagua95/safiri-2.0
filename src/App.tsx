import { CustomCursor } from './components/Cursor';
import { Navbar } from './components/Navbar';
import { ThemeToggle } from './components/ThemeToggle';
import { ScrollToTop } from './components/ScrollToTop';
import { Footer } from './components/Footer';
import { DestinationCard } from './components/DestinationCard';
import { ExperienceCard } from './components/ExperienceCard';
import { AboutSection } from './components/AboutSection';
import { destinations } from './data/destinations';
import { experiences } from './data/experiences';

function App() {
  return (
    <div className="min-h-screen bg-amber-50 dark:bg-amber-900">
      <CustomCursor />
      <Navbar />
      <ThemeToggle />
      <ScrollToTop />

      <main>
        {/* Hero Section */}
        <section className="relative h-screen">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e"
              alt="Safari landscape"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Experience the Magic of Kenya
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Unforgettable safaris and adventures await
              </p>
              <a
                href="#destinations"
                className="inline-block bg-amber-600 text-white px-8 py-3 rounded-lg hover:bg-amber-700 transition-colors"
              >
                Explore Destinations
              </a>
            </div>
          </div>
        </section>

        {/* Destinations Section */}
        <section id="destinations" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-amber-900 dark:text-amber-50 mb-12">
              Popular Destinations
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {destinations.map((dest, index) => (
                <DestinationCard key={index} {...dest} />
              ))}
            </div>
          </div>
        </section>

        {/* Experiences Section */}
        <section id="experiences" className="py-20 bg-amber-100 dark:bg-amber-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-amber-900 dark:text-amber-50 mb-12">
              Unique Experiences
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {experiences.map((exp, index) => (
                <ExperienceCard key={index} {...exp} />
              ))}
            </div>
          </div>
        </section>

        <AboutSection />

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-amber-100 dark:bg-amber-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-amber-900 dark:text-amber-50 mb-8">
              Contact Us
            </h2>
            <div className="bg-white dark:bg-amber-900 rounded-lg p-8 shadow-lg">
              <p className="text-lg mb-4 text-amber-900 dark:text-amber-50">
                Ready to start your adventure? Get in touch with us today.
              </p>
              <div className="space-y-2 text-amber-900 dark:text-amber-50">
                <p>Email: info@safirikenya.com</p>
                <p>Phone: +254 700 000000</p>
                <p>Location: Nairobi, Kenya</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;