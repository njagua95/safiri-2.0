import { ImageWithLoader } from './ImageWithLoader';

interface Experience {
  title: string;
  image: string;
  description: string;
}

export const ExperienceCard = ({ title, image, description }: Experience) => (
  <div className="relative group overflow-hidden rounded-xl">
    <ImageWithLoader 
      src={image} 
      alt={title}
      className="w-full h-[400px] object-cover transform group-hover:scale-110 transition-transform duration-500"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent flex items-end p-8">
      <div>
        <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
        <p className="text-amber-200">{description}</p>
      </div>
    </div>
  </div>
);