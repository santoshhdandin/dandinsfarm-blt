import { useState } from 'react';
import { ArrowLeft, MapPin, Image } from 'lucide-react';

interface Crop {
  id: string;
  name: string;
  variety: string;
  plants: number;
  description: string;
  benefits: string[];
  harvestSeason: string;
  icon: string;
  images: string[];
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
    images: [
      'https://images.pexels.com/photos/1263420/pexels-photo-1263420.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/5966449/pexels-photo-5966449.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/8887429/pexels-photo-8887429.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/8887430/pexels-photo-8887430.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/566343/pexels-photo-566343.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
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
    images: [
      'https://images.pexels.com/photos/6157052/pexels-photo-6157052.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1435740/pexels-photo-1435740.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1458671/pexels-photo-1458671.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4750270/pexels-photo-4750270.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/5560019/pexels-photo-5560019.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
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
    images: [
      'https://images.pexels.com/photos/6157045/pexels-photo-6157045.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4505457/pexels-photo-4505457.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4505447/pexels-photo-4505447.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3597121/pexels-photo-3597121.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
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
    images: [
      'https://images.pexels.com/photos/2132171/pexels-photo-2132171.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1459505/pexels-photo-1459505.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/531756/pexels-photo-531756.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
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
    images: [
      'https://images.pexels.com/photos/5966326/pexels-photo-5966326.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/5945838/pexels-photo-5945838.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/5966324/pexels-photo-5966324.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/5945874/pexels-photo-5945874.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
  },
  {
    id: 'chicken',
    name: 'Chicken',
    variety: 'Free-range organic',
    plants: 50,
    description: 'Our free-range chickens roam freely across the farm, feeding on natural grains and insects. Raised without antibiotics or growth hormones, they provide healthy meat and fresh eggs for our community.',
    benefits: ['High-quality protein', 'Omega-3 rich', 'Antibiotic-free', 'Naturally raised'],
    harvestSeason: 'Year-round',
    icon: '🐔',
    images: [
      'https://images.pexels.com/photos/1414968/pexels-photo-1414968.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1560424/pexels-photo-1560424.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/5255233/pexels-photo-5255233.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4666751/pexels-photo-4666751.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3952048/pexels-photo-3952048.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
  },
  {
    id: 'cow',
    name: 'Cow',
    variety: 'Indigenous breeds',
    plants: 10,
    description: 'Our indigenous cows are treated with care and respect. They graze naturally and provide us with organic milk and natural fertilizer that enriches our soil.',
    benefits: ['Organic milk source', 'Natural fertilizer', 'Traditional breeds', 'Sustainable farming'],
    harvestSeason: 'Year-round',
    icon: '🐄',
    images: [
      'https://images.pexels.com/photos/422218/pexels-photo-422218.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1202524/pexels-photo-1202524.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1459547/pexels-photo-1459547.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2959860/pexels-photo-2959860.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/460621/pexels-photo-460621.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
  },
  {
    id: 'milk',
    name: 'Milk',
    variety: 'Fresh organic dairy',
    plants: 0,
    description: 'Fresh organic milk from our happy, grass-fed cows. Rich in nutrients and completely free from synthetic hormones and antibiotics. Delivered fresh daily from our farm.',
    benefits: ['Rich in calcium', 'Hormone-free', 'Fresh daily', 'Complete nutrition'],
    harvestSeason: 'Year-round',
    icon: '🥛',
    images: [
      'https://images.pexels.com/photos/236010/pexels-photo-236010.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1446318/pexels-photo-1446318.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/416656/pexels-photo-416656.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
  },
  {
    id: 'goat',
    name: 'Goat',
    variety: 'Local & Malabari',
    plants: 15,
    description: 'Our goats are raised naturally in a free-range environment. They provide both meat and milk, and their manure is excellent for organic composting.',
    benefits: ['Lean meat', 'Digestible milk', 'Natural grazing', 'Eco-friendly'],
    harvestSeason: 'Year-round',
    icon: '🐐',
    images: [
      'https://images.pexels.com/photos/1202519/pexels-photo-1202519.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2647053/pexels-photo-2647053.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3434523/pexels-photo-3434523.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3825573/pexels-photo-3825573.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2295744/pexels-photo-2295744.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
  },
  {
    id: 'lamb',
    name: 'Lamb',
    variety: 'Organic raised',
    plants: 8,
    description: 'Our lambs are raised with natural feeding practices and plenty of space to roam. They produce high-quality, tender meat that is rich in nutrients.',
    benefits: ['High protein', 'Rich in B vitamins', 'Natural raising', 'Quality meat'],
    harvestSeason: 'Year-round',
    icon: '🐑',
    images: [
      'https://images.pexels.com/photos/349758/hd-wallpaper-sheep-wool-3491-349758.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/583838/pexels-photo-583838.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2346304/pexels-photo-2346304.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2317904/pexels-photo-2317904.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1384390/pexels-photo-1384390.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
  },
  {
    id: 'duck',
    name: 'Duck',
    variety: 'Khaki Campbell',
    plants: 25,
    description: 'Our ducks are raised in a natural pond environment. They provide nutritious eggs and meat, and help control pests naturally around the farm.',
    benefits: ['Rich eggs', 'Flavorful meat', 'Natural pest control', 'Low maintenance'],
    harvestSeason: 'Year-round',
    icon: '🦆',
    images: [
      'https://images.pexels.com/photos/53581/duck-bird-poultry-plumage-53581.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/45851/duck-water-bird-animal-45851.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/86596/owl-bird-eyes-eagle-owl-86596.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/416179/pexels-photo-416179.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1661535/pexels-photo-1661535.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
  },
  {
    id: 'desi-egg',
    name: 'Desi Egg',
    variety: 'Free-range organic',
    plants: 0,
    description: 'Fresh organic eggs from our free-range chickens. These eggs have richer yolks and better flavor compared to commercial eggs, thanks to our natural feeding practices.',
    benefits: ['Rich in omega-3', 'Natural diet hens', 'Better nutrition', 'Fresh daily'],
    harvestSeason: 'Year-round',
    icon: '🥚',
    images: [
      'https://images.pexels.com/photos/162712/egg-white-food-protein-162712.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1556707/pexels-photo-1556707.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4109998/pexels-photo-4109998.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1854652/pexels-photo-1854652.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1556688/pexels-photo-1556688.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
  },
  {
    id: 'turkey',
    name: 'Turkey',
    variety: 'Broad Breasted',
    plants: 12,
    description: 'Our turkeys are raised naturally with plenty of outdoor space. They provide lean, nutritious meat and are raised without antibiotics or growth hormones.',
    benefits: ['Lean protein', 'Low fat content', 'Rich in nutrients', 'Free-range raised'],
    harvestSeason: 'Year-round',
    icon: '🦃',
    images: [
      'https://images.pexels.com/photos/2894209/pexels-photo-2894209.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2127969/pexels-photo-2127969.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/86594/pexels-photo-86594.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4666758/pexels-photo-4666758.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2127967/pexels-photo-2127967.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
  },
  {
    id: 'lemon',
    name: 'Lemon',
    variety: 'Kagzi & Eureka',
    plants: 30,
    description: 'Our lemon trees produce juicy, aromatic lemons perfect for culinary and medicinal uses. Grown organically, they are packed with vitamin C and natural oils.',
    benefits: ['High vitamin C', 'Natural detoxifier', 'Immune booster', 'Versatile uses'],
    harvestSeason: 'Year-round',
    icon: '🍋',
    images: [
      'https://images.pexels.com/photos/1414110/pexels-photo-1414110.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2611810/pexels-photo-2611810.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1414132/pexels-photo-1414132.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2255935/pexels-photo-2255935.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/327098/pexels-photo-327098.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
  },
  {
    id: 'turmeric',
    name: 'Turmeric',
    variety: 'Salem & Local varieties',
    plants: 40,
    description: 'Our turmeric is grown in rich organic soil, resulting in rhizomes with high curcumin content. Known for its medicinal properties, our turmeric is pesticide-free and naturally processed.',
    benefits: ['Anti-inflammatory', 'Powerful antioxidant', 'Boosts immunity', 'Natural medicine'],
    harvestSeason: 'January-March',
    icon: '🟡',
    images: [
      'https://images.pexels.com/photos/4202334/pexels-photo-4202334.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4202340/pexels-photo-4202340.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4198937/pexels-photo-4198937.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/7667443/pexels-photo-7667443.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4202961/pexels-photo-4202961.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
  },
  {
    id: 'banana',
    name: 'Banana',
    variety: 'Robusta & Nendran',
    plants: 120,
    description: 'Our banana plantation features multiple varieties perfect for fresh consumption and cooking. Grown using natural farming methods, our bananas are sweet, nutritious, and chemical-free.',
    benefits: ['Rich in potassium', 'Energy boosting', 'Good for digestion', 'Heart healthy'],
    harvestSeason: 'Year-round',
    icon: '🍌',
    images: [
      'https://images.pexels.com/photos/2238309/pexels-photo-2238309.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4051858/pexels-photo-4051858.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/5966630/pexels-photo-5966630.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2872755/pexels-photo-2872755.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4377325/pexels-photo-4377325.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
  },
  {
    id: 'hebbevu',
    name: 'Hebbevu (Ber)',
    variety: 'Indian Jujube',
    plants: 25,
    description: 'Hebbevu, also known as Indian Jujube or Ber, is a traditional fruit that thrives in our climate. These drought-resistant trees produce sweet, crunchy fruits rich in vitamin C.',
    benefits: ['Vitamin C rich', 'Aids digestion', 'Strengthens bones', 'Improves sleep'],
    harvestSeason: 'February-April',
    icon: '🟢',
    images: [
      'https://images.pexels.com/photos/8293656/pexels-photo-8293656.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1002740/pexels-photo-1002740.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2132171/pexels-photo-2132171.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2441454/pexels-photo-2441454.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/6157032/pexels-photo-6157032.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
  },
  {
    id: 'jackfruit',
    name: 'Jackfruit',
    variety: 'Varikka & Koozha',
    plants: 20,
    description: 'Our jackfruit trees produce large, nutritious fruits perfect for both ripe consumption and as a vegetable when unripe. A versatile and sustainable crop rich in nutrients.',
    benefits: ['High in fiber', 'Rich in antioxidants', 'Good for immunity', 'Meat alternative'],
    harvestSeason: 'March-August',
    icon: '🥭',
    images: [
      'https://images.pexels.com/photos/5966451/pexels-photo-5966451.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4874429/pexels-photo-4874429.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/7194915/pexels-photo-7194915.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/5945712/pexels-photo-5945712.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4033325/pexels-photo-4033325.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
  },
  {
    id: 'curry-leaves',
    name: 'Curry Leaves',
    variety: 'Murraya koenigii',
    plants: 50,
    description: 'Fresh aromatic curry leaves from our farm, essential for South Indian cooking. These plants are grown organically and harvested fresh, providing maximum flavor and medicinal benefits.',
    benefits: ['Aids digestion', 'Controls diabetes', 'Rich in antioxidants', 'Hair health'],
    harvestSeason: 'Year-round',
    icon: '🌿',
    images: [
      'https://images.pexels.com/photos/4033328/pexels-photo-4033328.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4033331/pexels-photo-4033331.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/5560019/pexels-photo-5560019.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4033044/pexels-photo-4033044.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1458671/pexels-photo-1458671.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
  },
  {
    id: 'drumstick',
    name: 'Drumstick',
    variety: 'Moringa oleifera',
    plants: 35,
    description: 'Our drumstick trees, also known as Moringa, are a superfood powerhouse. Both the pods and leaves are highly nutritious and used in traditional cooking and medicine.',
    benefits: ['Nutrient dense', 'Anti-inflammatory', 'Lowers blood sugar', 'Rich in vitamins'],
    harvestSeason: 'Year-round',
    icon: '🌱',
    images: [
      'https://images.pexels.com/photos/4033332/pexels-photo-4033332.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/7194402/pexels-photo-7194402.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4750270/pexels-photo-4750270.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2255935/pexels-photo-2255935.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/5945838/pexels-photo-5945838.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
  },
  {
    id: 'vegetables',
    name: 'Vegetables',
    variety: 'Seasonal varieties',
    plants: 200,
    description: 'We grow a wide variety of seasonal vegetables using organic methods. From leafy greens to root vegetables, our produce is fresh, nutritious, and free from harmful chemicals.',
    benefits: ['Rich in nutrients', 'Fresh daily', 'Chemical-free', 'Seasonal varieties'],
    harvestSeason: 'Year-round',
    icon: '🥬',
    images: [
      'https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1268101/pexels-photo-1268101.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/6157052/pexels-photo-6157052.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/533342/pexels-photo-533342.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
  },
];

interface CropsPageProps {
  setCurrentPage: (page: string) => void;
}

export default function CropsPage({ setCurrentPage }: CropsPageProps) {
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
                <h2 className="text-2xl font-bold text-white mb-4">Photos</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                  {selectedCrop.images.map((image, index) => (
                    <div
                      key={index}
                      className="aspect-square rounded-lg overflow-hidden border border-zinc-800 hover:border-green-600 transition-all group"
                    >
                      <img
                        src={image}
                        alt={`${selectedCrop.name} ${index + 1}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                  ))}
                </div>
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
                  onClick={() => {
                    setSelectedCrop(null);
                    setCurrentPage('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
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
