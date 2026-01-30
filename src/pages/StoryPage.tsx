import { Sprout, Heart, Target, TrendingUp } from 'lucide-react';

export default function StoryPage() {
  return (
    <div className="min-h-screen px-4 py-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
          Our Story
        </h1>
        <p className="text-xl text-zinc-400 mb-12">The Journey of Dandin's Farm</p>

        <div className="space-y-12">
          <section className="bg-zinc-900/50 rounded-2xl p-8 border border-zinc-800">
            <div className="flex items-start space-x-4 mb-4">
              <div className="bg-green-900/30 p-3 rounded-lg">
                <Sprout className="text-green-400" size={32} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">The Beginning</h2>
                <p className="text-zinc-400">Where it all started</p>
              </div>
            </div>
            <p className="text-zinc-300 leading-relaxed">
              Dandin's Farm began as a vision to bring back traditional organic farming practices to our community.
              What started as a small family farm with just a few acres has grown into a thriving organic paradise.
              Our journey began with a simple belief - that food should be grown naturally, respecting the soil,
              the environment, and the health of our consumers.
            </p>
          </section>

          <section className="bg-zinc-900/50 rounded-2xl p-8 border border-zinc-800">
            <div className="flex items-start space-x-4 mb-4">
              <div className="bg-green-900/30 p-3 rounded-lg">
                <Heart className="text-green-400" size={32} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">Our Philosophy</h2>
                <p className="text-zinc-400">What drives us</p>
              </div>
            </div>
            <p className="text-zinc-300 leading-relaxed mb-4">
              We believe in working with nature, not against it. Our farming practices are rooted in the understanding
              that healthy soil produces healthy plants, which in turn provide nutritious food. We use only organic
              compost, natural pest control methods, and traditional farming wisdom passed down through generations.
            </p>
            <p className="text-zinc-300 leading-relaxed">
              Every decision we make on the farm is guided by three principles: sustainability, quality, and community.
              We're not just growing crops; we're cultivating a better future for our land and our children.
            </p>
          </section>

          <section className="bg-zinc-900/50 rounded-2xl p-8 border border-zinc-800">
            <div className="flex items-start space-x-4 mb-4">
              <div className="bg-green-900/30 p-3 rounded-lg">
                <Target className="text-green-400" size={32} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">The Transformation</h2>
                <p className="text-zinc-400">Building something special</p>
              </div>
            </div>
            <p className="text-zinc-300 leading-relaxed">
              Over the years, we've transformed barren land into a lush, productive organic farm. We've planted hundreds
              of fruit trees, established natural water conservation systems, and created a balanced ecosystem where
              beneficial insects and birds help us maintain the health of our crops. Each season brings new learning,
              new challenges, and new rewards.
            </p>
          </section>

          <section className="bg-zinc-900/50 rounded-2xl p-8 border border-zinc-800">
            <div className="flex items-start space-x-4 mb-4">
              <div className="bg-green-900/30 p-3 rounded-lg">
                <TrendingUp className="text-green-400" size={32} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">Looking Forward</h2>
                <p className="text-zinc-400">Our vision for the future</p>
              </div>
            </div>
            <p className="text-zinc-300 leading-relaxed mb-4">
              Today, Dandin's Farm stands as a model of sustainable organic agriculture. We're proud to supply fresh,
              chemical-free produce to families who value health and quality. But our journey doesn't stop here.
            </p>
            <p className="text-zinc-300 leading-relaxed">
              We're committed to expanding our knowledge, sharing our experience with other farmers through our YouTube
              channel, and inspiring more people to embrace organic farming. We're building not just a farm, but a
              movement towards healthier food and a healthier planet.
            </p>
          </section>

          <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-2xl p-8 border border-green-800/50">
            <h3 className="text-2xl font-bold text-white mb-4">Join Our Journey</h3>
            <p className="text-zinc-300 leading-relaxed">
              We invite you to be part of our story. Whether you're looking for fresh organic produce, want to learn
              about organic farming, or simply want to support sustainable agriculture, Dandin's Farm welcomes you.
              Together, we can create a healthier, more sustainable future.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
