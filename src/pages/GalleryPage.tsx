import { Camera, Leaf, Apple, Mountain, X, Sprout } from 'lucide-react';
import { useState } from 'react';

interface GalleryImage {
  id: number;
  alt: string;
  url: string;
}

interface Category {
  title: string;
  icon: typeof Mountain;
  description: string;
  images: GalleryImage[];
}

interface GalleryPageProps {
  setCurrentPage: (page: string) => void;
}

export default function GalleryPage({ setCurrentPage }: GalleryPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const categories: Category[] = [
    {
      title: 'Farm Views',
      icon: Mountain,
      description: 'Scenic views of our organic farm',
      images: [
        { id: 1, alt: 'Farm landscape', url: 'https://images.pexels.com/photos/2132180/pexels-photo-2132180.jpeg?auto=compress&cs=tinysrgb&w=800' },
        { id: 2, alt: 'Crop fields', url: 'https://images.pexels.com/photos/2252618/pexels-photo-2252618.jpeg?auto=compress&cs=tinysrgb&w=800' },
        { id: 3, alt: 'Irrigation system', url: 'https://images.pexels.com/photos/2229887/pexels-photo-2229887.jpeg?auto=compress&cs=tinysrgb&w=800' },
        { id: 4, alt: 'Farm paths', url: 'https://images.pexels.com/photos/2255441/pexels-photo-2255441.jpeg?auto=compress&cs=tinysrgb&w=800' },
        { id: 5, alt: 'Sunrise on farm', url: 'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=800' },
        { id: 6, alt: 'Farm equipment', url: 'https://images.pexels.com/photos/2889687/pexels-photo-2889687.jpeg?auto=compress&cs=tinysrgb&w=800' },
        { id: 7, alt: 'Green fields', url: 'https://images.pexels.com/photos/2518861/pexels-photo-2518861.jpeg?auto=compress&cs=tinysrgb&w=800' },
        { id: 8, alt: 'Farm aerial view', url: 'https://images.pexels.com/photos/2518861/pexels-photo-2518861.jpeg?auto=compress&cs=tinysrgb&w=800' },
      ],
    },
    {
      title: 'Our Crops',
      icon: Leaf,
      description: 'Fresh organic produce from our fields',
      images: [
        { id: 5, alt: 'Ripe guavas', url: 'https://images.pexels.com/photos/1263420/pexels-photo-1263420.jpeg?auto=compress&cs=tinysrgb&w=800' },
        { id: 6, alt: 'Coconut palms', url: 'https://images.pexels.com/photos/6157045/pexels-photo-6157045.jpeg?auto=compress&cs=tinysrgb&w=800' },
        { id: 7, alt: 'Papaya plants', url: 'https://images.pexels.com/photos/5966326/pexels-photo-5966326.jpeg?auto=compress&cs=tinysrgb&w=800' },
        { id: 8, alt: 'Arecanut trees', url: 'https://images.pexels.com/photos/2132171/pexels-photo-2132171.jpeg?auto=compress&cs=tinysrgb&w=800' },
        { id: 9, alt: 'Banana plantation', url: 'https://images.pexels.com/photos/2238309/pexels-photo-2238309.jpeg?auto=compress&cs=tinysrgb&w=800' },
        { id: 10, alt: 'Turmeric harvest', url: 'https://images.pexels.com/photos/4202334/pexels-photo-4202334.jpeg?auto=compress&cs=tinysrgb&w=800' },
        { id: 11, alt: 'Lemon trees', url: 'https://images.pexels.com/photos/1414110/pexels-photo-1414110.jpeg?auto=compress&cs=tinysrgb&w=800' },
        { id: 12, alt: 'Vegetable garden', url: 'https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&w=800' },
      ],
    },
    {
      title: 'Farm Animals',
      icon: Apple,
      description: 'Our friendly farm companions',
      images: [
        { id: 9, alt: 'Farm cattle', url: 'https://images.pexels.com/photos/422218/pexels-photo-422218.jpeg?auto=compress&cs=tinysrgb&w=800' },
        { id: 10, alt: 'Free-range chickens', url: 'https://images.pexels.com/photos/1414968/pexels-photo-1414968.jpeg?auto=compress&cs=tinysrgb&w=800' },
        { id: 11, alt: 'Farm dogs', url: 'https://images.pexels.com/photos/551628/pexels-photo-551628.jpeg?auto=compress&cs=tinysrgb&w=800' },
        { id: 12, alt: 'Birds in the farm', url: 'https://images.pexels.com/photos/53581/duck-bird-poultry-plumage-53581.jpeg?auto=compress&cs=tinysrgb&w=800' },
        { id: 13, alt: 'Goats grazing', url: 'https://images.pexels.com/photos/1202519/pexels-photo-1202519.jpeg?auto=compress&cs=tinysrgb&w=800' },
        { id: 14, alt: 'Sheep on farm', url: 'https://images.pexels.com/photos/583838/pexels-photo-583838.jpeg?auto=compress&cs=tinysrgb&w=800' },
        { id: 15, alt: 'Ducks in pond', url: 'https://images.pexels.com/photos/45851/duck-water-bird-animal-45851.jpeg?auto=compress&cs=tinysrgb&w=800' },
        { id: 16, alt: 'Turkey roaming', url: 'https://images.pexels.com/photos/2894209/pexels-photo-2894209.jpeg?auto=compress&cs=tinysrgb&w=800' },
      ],
    },
    {
      title: 'Products',
      icon: Camera,
      description: 'Ready-to-harvest organic produce',
      images: [
        { id: 13, alt: 'Harvested guavas', url: 'https://images.pexels.com/photos/5966449/pexels-photo-5966449.jpeg?auto=compress&cs=tinysrgb&w=800' },
        { id: 14, alt: 'Fresh coconuts', url: 'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=800' },
        { id: 15, alt: 'Nerale harvest', url: 'https://images.pexels.com/photos/6157052/pexels-photo-6157052.jpeg?auto=compress&cs=tinysrgb&w=800' },
        { id: 16, alt: 'Papaya collection', url: 'https://images.pexels.com/photos/5945838/pexels-photo-5945838.jpeg?auto=compress&cs=tinysrgb&w=800' },
        { id: 17, alt: 'Fresh milk', url: 'https://images.pexels.com/photos/236010/pexels-photo-236010.jpeg?auto=compress&cs=tinysrgb&w=800' },
        { id: 18, alt: 'Organic eggs', url: 'https://images.pexels.com/photos/162712/egg-white-food-protein-162712.jpeg?auto=compress&cs=tinysrgb&w=800' },
        { id: 19, alt: 'Fresh vegetables', url: 'https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=800' },
        { id: 20, alt: 'Curry leaves', url: 'https://images.pexels.com/photos/4033328/pexels-photo-4033328.jpeg?auto=compress&cs=tinysrgb&w=800' },
      ],
    },
    {
      title: 'Practices We Follow',
      icon: Sprout,
      description: 'Traditional and natural farming methods',
      images: [
        { id: 21, alt: 'Jeevamruth preparation', url: 'https://images.pexels.com/photos/4750270/pexels-photo-4750270.jpeg?auto=compress&cs=tinysrgb&w=800' },
        { id: 22, alt: 'Gobar gas setup', url: 'https://images.pexels.com/photos/2889687/pexels-photo-2889687.jpeg?auto=compress&cs=tinysrgb&w=800' },
        { id: 23, alt: 'Mulching in fields', url: 'https://images.pexels.com/photos/4750271/pexels-photo-4750271.jpeg?auto=compress&cs=tinysrgb&w=800' },
        { id: 24, alt: 'Silage making', url: 'https://images.pexels.com/photos/2889687/pexels-photo-2889687.jpeg?auto=compress&cs=tinysrgb&w=800' },
        { id: 25, alt: 'Composting process', url: 'https://images.pexels.com/photos/2132171/pexels-photo-2132171.jpeg?auto=compress&cs=tinysrgb&w=800' },
        { id: 26, alt: 'Natural pest control', url: 'https://images.pexels.com/photos/4750270/pexels-photo-4750270.jpeg?auto=compress&cs=tinysrgb&w=800' },
        { id: 27, alt: 'Organic fertilizer', url: 'https://images.pexels.com/photos/2889687/pexels-photo-2889687.jpeg?auto=compress&cs=tinysrgb&w=800' },
        { id: 28, alt: 'Water conservation', url: 'https://images.pexels.com/photos/2229887/pexels-photo-2229887.jpeg?auto=compress&cs=tinysrgb&w=800' },
      ],
    },
  ];

  if (selectedImage) {
    return (
      <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
        <button
          onClick={() => setSelectedImage(null)}
          className="absolute top-4 right-4 text-white hover:text-green-400 transition-colors"
        >
          <X size={32} />
        </button>
        <img
          src={selectedImage.url}
          alt={selectedImage.alt}
          className="max-w-full max-h-full object-contain"
        />
        <div className="absolute bottom-8 left-0 right-0 text-center">
          <p className="text-white text-lg">{selectedImage.alt}</p>
        </div>
      </div>
    );
  }

  if (selectedCategory) {
    return (
      <div className="min-h-screen px-4 py-24">
        <div className="max-w-7xl mx-auto">
          <button
            onClick={() => setSelectedCategory(null)}
            className="flex items-center space-x-2 text-zinc-400 hover:text-green-400 transition-colors mb-8"
          >
            <X size={20} />
            <span>Back to all categories</span>
          </button>

          <div className="flex items-center space-x-4 mb-8">
            <div className="bg-green-900/30 p-3 rounded-lg">
              <selectedCategory.icon className="text-green-400" size={32} />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white">{selectedCategory.title}</h1>
              <p className="text-zinc-400">{selectedCategory.description}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {selectedCategory.images.map((image) => (
              <button
                key={image.id}
                onClick={() => setSelectedImage(image)}
                className="group relative aspect-square rounded-xl overflow-hidden border border-zinc-800 hover:border-green-600 transition-all"
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-sm font-medium">{image.alt}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-4 py-24">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
          Gallery
        </h1>
        <p className="text-xl text-zinc-400 mb-12">
          A visual journey through Dandin's Farm
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {categories.map((category) => (
            <button
              key={category.title}
              onClick={() => setSelectedCategory(category)}
              className="group bg-zinc-900/50 rounded-2xl overflow-hidden border border-zinc-800 hover:border-green-600 transition-all hover:transform hover:scale-105"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={category.images[0].url}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="bg-green-900/50 p-2 rounded-lg">
                      <category.icon className="text-green-400" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white">{category.title}</h3>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <p className="text-zinc-400 text-sm mb-3">{category.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-zinc-500 text-sm">{category.images.length} photos</span>
                  <span className="text-green-400 group-hover:translate-x-1 transition-transform">
                    View gallery →
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-2xl p-8 border border-green-800/50 text-center">
          <Camera size={48} className="mx-auto mb-4 text-green-400" />
          <h3 className="text-2xl font-bold text-white mb-4">
            Visit Our Farm
          </h3>
          <p className="text-zinc-300 max-w-2xl mx-auto mb-6">
            Experience the beauty of organic farming firsthand. Schedule a farm visit to see our crops,
            meet our animals, and learn about sustainable agriculture practices.
          </p>
          <button
            onClick={() => {
              setCurrentPage('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg transition-colors font-medium"
          >
            Contact Us to Schedule a Visit
          </button>
        </div>

        <div className="mt-8 text-center text-zinc-500 text-sm">
          <p>
            Note: Actual farm photos will be added soon. These placeholders represent the types of
            images that will showcase our beautiful organic farm.
          </p>
        </div>
      </div>
    </div>
  );
}
