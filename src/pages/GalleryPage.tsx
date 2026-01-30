import { Camera, Leaf, Apple, Mountain } from 'lucide-react';

export default function GalleryPage() {
  const categories = [
    {
      title: 'Farm Views',
      icon: Mountain,
      description: 'Scenic views of our organic farm',
      images: [
        { id: 1, alt: 'Farm landscape', color: 'from-green-600 to-emerald-700' },
        { id: 2, alt: 'Crop fields', color: 'from-lime-600 to-green-700' },
        { id: 3, alt: 'Irrigation system', color: 'from-teal-600 to-cyan-700' },
        { id: 4, alt: 'Farm paths', color: 'from-emerald-600 to-green-700' },
      ],
    },
    {
      title: 'Our Crops',
      icon: Leaf,
      description: 'Fresh organic produce from our fields',
      images: [
        { id: 5, alt: 'Ripe guavas', color: 'from-green-500 to-lime-600' },
        { id: 6, alt: 'Coconut palms', color: 'from-amber-600 to-yellow-700' },
        { id: 7, alt: 'Papaya plants', color: 'from-orange-600 to-red-700' },
        { id: 8, alt: 'Arecanut trees', color: 'from-green-700 to-teal-800' },
      ],
    },
    {
      title: 'Farm Animals',
      icon: Apple,
      description: 'Our friendly farm companions',
      images: [
        { id: 9, alt: 'Farm cattle', color: 'from-amber-700 to-orange-800' },
        { id: 10, alt: 'Free-range chickens', color: 'from-yellow-600 to-amber-700' },
        { id: 11, alt: 'Farm dogs', color: 'from-stone-600 to-zinc-700' },
        { id: 12, alt: 'Birds in the farm', color: 'from-sky-600 to-blue-700' },
      ],
    },
    {
      title: 'Products',
      icon: Camera,
      description: 'Ready-to-harvest organic produce',
      images: [
        { id: 13, alt: 'Harvested guavas', color: 'from-lime-600 to-green-700' },
        { id: 14, alt: 'Fresh coconuts', color: 'from-emerald-600 to-teal-700' },
        { id: 15, alt: 'Nerale harvest', color: 'from-purple-600 to-indigo-700' },
        { id: 16, alt: 'Papaya collection', color: 'from-orange-500 to-amber-600' },
      ],
    },
  ];

  return (
    <div className="min-h-screen px-4 py-24">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
          Gallery
        </h1>
        <p className="text-xl text-zinc-400 mb-12">
          A visual journey through Dandin's Farm
        </p>

        <div className="space-y-16">
          {categories.map((category) => (
            <section key={category.title}>
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-green-900/30 p-3 rounded-lg">
                  <category.icon className="text-green-400" size={28} />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white">{category.title}</h2>
                  <p className="text-zinc-500">{category.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {category.images.map((image) => (
                  <div
                    key={image.id}
                    className="group relative aspect-square rounded-xl overflow-hidden border border-zinc-800 hover:border-green-600 transition-all cursor-pointer"
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${image.color} opacity-80 group-hover:opacity-90 transition-opacity`}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white p-4">
                        <Camera
                          size={48}
                          className="mx-auto mb-2 opacity-50 group-hover:opacity-100 transition-opacity"
                        />
                        <p className="text-sm font-medium opacity-75 group-hover:opacity-100 transition-opacity">
                          {image.alt}
                        </p>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                ))}
              </div>
            </section>
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
          <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg transition-colors font-medium">
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
