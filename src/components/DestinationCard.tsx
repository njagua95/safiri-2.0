import { ImageWithLoader } from './ImageWithLoader';

interface Destination {
  title: string;
  image: string;
  description: string;
}

export const DestinationCard = ({ title, image, description }: Destination) => (
  <div className="group relative overflow-hidden rounded-lg shadow-lg transform hover:-translate-y-2 transition-transform">
    <ImageWithLoader 
      src={image} 
      alt={title}
      className="w-full h-80 object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
      <div>
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-amber-200">{description}</p>
      </div>
    </div>
  </div>
);