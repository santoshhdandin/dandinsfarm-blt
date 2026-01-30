import { MapPin, Leaf, Sprout } from 'lucide-react';
import SocialLinks from '../components/SocialLinks';

export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8 inline-block">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-600 to-green-900 flex items-center justify-center">
            <Leaf size={64} className="text-white" />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
          Dandin's Farm
        </h1>

        <p className="text-2xl md:text-3xl text-zinc-400 mb-6">
          Complete Organic
        </p>

        <div className="flex items-center justify-center space-x-2 text-zinc-500 mb-8">
          <MapPin size={20} />
          <span>Karnataka, India</span>
        </div>

        <div className="max-w-2xl mx-auto mb-12">
          <p className="text-lg text-zinc-300 leading-relaxed mb-6">
            Welcome to Dandin's Farm, where we practice complete organic farming with passion and dedication.
            Our farm is a testament to sustainable agriculture, growing premium quality fruits and crops
            without any chemical fertilizers or pesticides.
          </p>
          <p className="text-lg text-zinc-400 leading-relaxed">
            We believe in harmony with nature, nurturing the soil and plants with traditional organic methods
            combined with modern sustainable practices. Every fruit and crop from our farm is grown with care,
            ensuring the highest quality and nutritional value for our community.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 mb-12">
          <div className="flex items-center space-x-2 text-green-400">
            <Sprout size={24} />
            <span className="text-xl font-semibold">100% Organic</span>
          </div>
          <div className="flex items-center space-x-2 text-green-400">
            <Leaf size={24} />
            <span className="text-xl font-semibold">Sustainable Farming</span>
          </div>
        </div>

        <div className="flex justify-center mb-8">
          <SocialLinks />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {[
            { label: 'Acres', value: '10+' },
            { label: 'Crop Varieties', value: '5+' },
            { label: 'Years Experience', value: '15+' },
            { label: 'Happy Customers', value: '500+' },
          ].map((stat) => (
            <div key={stat.label} className="bg-zinc-900/50 rounded-lg p-6 border border-zinc-800">
              <div className="text-3xl font-bold text-green-400 mb-2">{stat.value}</div>
              <div className="text-sm text-zinc-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
