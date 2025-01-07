import { Award, Heart, Compass } from 'lucide-react';

interface AboutSectionProps {
  className?: string;
}

export const AboutSection = ({ className = "" }: AboutSectionProps) => {
  return (
    <section id="about" className={`py-20 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-amber-900 dark:text-amber-50 mb-8">
          Our Story
        </h2>
        <div className="prose prose-amber dark:prose-invert max-w-none space-y-6">
          <p className="text-lg leading-relaxed">
            Born from a deep love for Kenya's untamed wilderness and rich cultural heritage, 
            Safiri Kenya emerged as more than just a travel company – we're your gateway to 
            extraordinary African adventures. Since 2013, we've been crafting journeys that 
            transform ordinary travelers into passionate storytellers.
          </p>
          <p className="text-lg leading-relaxed">
            What sets us apart isn't just our intimate knowledge of Kenya's hidden gems or our 
            network of luxury camps and lodges. It's our commitment to creating moments that 
            leave you speechless – whether it's witnessing a lion's first hunt at dawn, sharing 
            ancient traditions with Maasai warriors, or sleeping under the stars in the heart 
            of the savannah.
          </p>
          <p className="text-lg leading-relaxed">
            Our team of expert guides, many born and raised in the regions they now share with 
            our guests, bring stories to life that no guidebook could ever tell. They're not 
            just naturalists and wildlife experts; they're guardians of Kenya's legacy, 
            ensuring every journey with us contributes to the preservation of our natural wonders 
            and cultural heritage.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-amber-100 dark:bg-amber-800 p-8 rounded-lg text-center">
              <Award className="w-12 h-12 mx-auto mb-4 text-amber-600 dark:text-amber-300" />
              <h3 className="text-xl font-semibold mb-3">Unmatched Expertise</h3>
              <p>Over a decade of creating award-winning safaris and cultural experiences that exceed expectations.</p>
            </div>
            <div className="bg-amber-100 dark:bg-amber-800 p-8 rounded-lg text-center">
              <Heart className="w-12 h-12 mx-auto mb-4 text-amber-600 dark:text-amber-300" />
              <h3 className="text-xl font-semibold mb-3">Community Impact</h3>
              <p>Every journey supports local conservation efforts and empowers communities through sustainable tourism.</p>
            </div>
            <div className="bg-amber-100 dark:bg-amber-800 p-8 rounded-lg text-center">
              <Compass className="w-12 h-12 mx-auto mb-4 text-amber-600 dark:text-amber-300" />
              <h3 className="text-xl font-semibold mb-3">Tailored Adventures</h3>
              <p>Personalized itineraries that blend luxury with authenticity, creating your perfect African story.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};