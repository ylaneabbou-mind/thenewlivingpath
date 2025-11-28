import { ArrowRight } from "lucide-react";

const posts = [
  {
    title: "The Art of Grounded Expansion",
    excerpt: "How to stay rooted while opening to infinite possibility — the paradox at the heart of transformation.",
    date: "Nov 2024",
    category: "Consciousness",
  },
  {
    title: "Listening to the Body's Wisdom",
    excerpt: "Your body holds ancient knowledge. Here's how to tune in and receive its guidance.",
    date: "Oct 2024",
    category: "Embodiment",
  },
  {
    title: "Navigating Life Transitions",
    excerpt: "When everything shifts, how do we find our center? Reflections on change as initiation.",
    date: "Sep 2024",
    category: "Transformation",
  },
];

const Blog = () => {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Grounded background with warm earth tones */}
      <div className="absolute inset-0 bg-ivoire-cosmique" />
      <div className="absolute inset-0 bg-gradient-to-br from-brun-racine/6 via-transparent to-sable-chaud/8" />
      
      {/* Subtle earth glows */}
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-terre-claire/12 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-ocre-clair/10 rounded-full blur-[130px]" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div className="space-y-4">
            <p className="text-sm font-cormorant text-sable-chaud tracking-[0.25em] uppercase">
              Transmissions
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-semibold text-brun-racine">
              Reflections &
              <span className="text-gradient-solar"> Insights</span>
            </h2>
          </div>
          
          <a href="#" className="group flex items-center gap-2 text-bleu-cosmique hover:text-bleu-profond transition-colors font-medium">
            View All Writings
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article
              key={post.title}
              className="group cursor-pointer"
            >
              {/* Image placeholder with floating effect */}
              <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-bleu-profond/15 to-bleu-atmosphere/10 border border-bleu-cosmique/20 group-hover:border-bleu-cosmique/40 group-hover:shadow-glow-blue transition-all duration-500 mb-6 overflow-hidden group-hover:-translate-y-1">
                <div className="w-full h-full flex items-center justify-center text-bleu-cosmique/30 font-cormorant">
                  Image
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <span className="text-ocre-solaire font-cormorant font-medium">{post.category}</span>
                  <span className="text-gris-lune">•</span>
                  <span className="text-foreground/50">{post.date}</span>
                </div>
                
                <h3 className="text-xl font-serif font-semibold text-brun-racine group-hover:text-bleu-cosmique transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-foreground/70 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Blog;
