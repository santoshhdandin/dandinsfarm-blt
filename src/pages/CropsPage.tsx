import { useState } from 'react';
import { ArrowLeft, MapPin } from 'lucide-react';

interface Crop {
  id: string;
  name: string;
  variety: string;
  plants: number;
  description: string;
  benefits: string[];
  harvestSeason: string;
  icon: string;
}

const crops: Crop[] = [
  {
    id: 'guava',
    name: 'Guava',
    variety: 'Thai & Local varieties',
    plants: 150,
    description: 'Our guava orchards feature premium Thai and local varieties, known for their exceptional sweetness and rich vitamin C content. These trees are carefully nurtured using organic methods, producing fruits with superior taste and nutritional value.',
    benefits: ['Rich in Vitamin C', 'High in Fiber', 'Boosts Immunity', 'Improves Digestion'],
    harvestSeason: 'Year-round with peak season December-March',
    icon: '🍈',
  },
  {
    id: 'nerale',
    name: 'Nerale (Indian Gooseberry)',
    variety: 'Indigenous variety',
    plants: 80,
    description: 'Nerale, also known as Amla or Indian Gooseberry, is a superfood grown on our farm. These trees are perfect for organic farming, requiring minimal intervention while producing fruits packed with antioxidants and medicinal properties.',
    benefits: ['Extremely rich in Vitamin C', 'Powerful antioxidant', 'Supports hair health', 'Aids in diabetes management'],
    harvestSeason: 'November-February',
    icon: '🫐',
  },
  {
    id: 'coconut',
    name: 'Coconut',
    variety: 'Tall & Hybrid varieties',
    plants: 200,
    description: 'Coconut palms are the backbone of our farm, providing shade, organic matter, and of course, nutritious coconuts. We grow both traditional tall varieties and modern hybrid varieties that produce throughout the year.',
    benefits: ['Natural electrolyte drink', 'Healthy fats', 'Versatile uses', 'Sustainable crop'],
    harvestSeason: 'Year-round',
    icon: '🥥',
  },
  {
    id: 'arecanut',
    name: 'Arecanut',
    variety: 'Mangala & Local varieties',
    plants: 250,
    description: 'Arecanut palms thrive in our organic environment, benefiting from the natural shade and rich organic soil. These palms are intercropped with other species, creating a multi-layered farming system that maximizes land use and biodiversity.',
    benefits: ['Traditional crop', 'High market value', 'Drought resistant', 'Intercropping friendly'],
    harvestSeason: 'November-February',
    icon: '🌴',
  },
  {
    id: 'papaya',
    name: 'Papaya',
    variety: 'Red Lady & Taiwan varieties',
    plants: 100,
    description: 'Our papaya plants produce large, sweet fruits rich in papain enzyme and vitamins. These fast-growing plants are perfect for organic farming, responding beautifully to natural fertilizers and providing quick returns.',
    benefits: ['Rich in Papain enzyme', 'Excellent for digestion', 'High in Vitamin A', 'Anti-inflammatory properties'],
    harvestSeason: 'Year-round',
    icon: '🥭',
  },
];

export default function CropsPage() {
  const [selectedCrop, setSelectedCrop] = useState<Crop | null>(null);

  if (selectedCrop) {
    return (
      <div className="min-h-screen px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => setSelectedCrop(null)}
            className="flex items-center space-x-2 text-zinc-400 hover:text-green-400 transition-colors mb-8"
          >
            <ArrowLeft size={20} />
            <span>Back to all crops</span>
          </button>

          <div className="bg-zinc-900/50 rounded-2xl overflow-hidden border border-zinc-800">
            <div className="bg-gradient-to-r from-green-900/50 to-emerald-900/50 p-12 text-center">
              <div className="text-8xl mb-4">{selectedCrop.icon}</div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                {selectedCrop.name}
              </h1>
              <p className="text-xl text-green-400">{selectedCrop.variety}</p>
            </div>

            <div className="p-8 space-y-8">
              <div className="flex items-center justify-center space-x-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-green-400">{selectedCrop.plants}</div>
                  <div className="text-sm text-zinc-500">Plants</div>
                </div>
                <div className="h-12 w-px bg-zinc-800" />
                <div className="text-left max-w-xs">
                  <div className="text-sm text-zinc-500 mb-1">Harvest Season</div>
                  <div className="text-white">{selectedCrop.harvestSeason}</div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">About This Crop</h2>
                <p className="text-zinc-300 leading-relaxed">{selectedCrop.description}</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Health Benefits</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedCrop.benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 bg-black/30 rounded-lg p-4"
                    >
                      <div className="text-green-400 mt-1">✓</div>
                      <span className="text-zinc-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-xl p-6 border border-green-800/50">
                <h3 className="text-lg font-bold text-white mb-2">
                  Interested in bulk orders?
                </h3>
                <p className="text-zinc-300 mb-4">
                  Contact us for fresh, organic {selectedCrop.name.toLowerCase()} directly from our farm.
                </p>
                <button
                  onClick={() => setSelectedCrop(null)}
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-colors"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-4 py-24">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
          What We Grow
        </h1>
        <p className="text-xl text-zinc-400 mb-12">
          Discover our organic produce, grown with care and dedication
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {crops.map((crop) => (
            <button
              key={crop.id}
              onClick={() => setSelectedCrop(crop)}
              className="bg-zinc-900/50 rounded-2xl overflow-hidden border border-zinc-800 hover:border-green-600 transition-all hover:transform hover:scale-105 group"
            >
              <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 p-12 text-center group-hover:from-green-900/50 group-hover:to-emerald-900/50 transition-all">
                <div className="text-6xl mb-4">{crop.icon}</div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                  {crop.name}
                </h3>
                <p className="text-zinc-400 text-sm mb-4">{crop.variety}</p>

                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-2 text-zinc-500">
                    <MapPin size={16} />
                    <span>{crop.plants} plants</span>
                  </div>
                  <span className="text-green-400 group-hover:translate-x-1 transition-transform">
                    Learn more →
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-12 bg-zinc-900/50 rounded-2xl p-8 border border-zinc-800">
          <h2 className="text-2xl font-bold text-white mb-4">100% Organic Certified</h2>
          <p className="text-zinc-300 leading-relaxed">
            All our crops are grown using complete organic methods. We use only natural fertilizers,
            traditional pest control methods, and sustainable water management practices. Every fruit
            from our farm is chemical-free, ensuring the highest quality and nutritional value for
            our customers.
          </p>
        </div>
      </div>
    </div>
  );
}
