import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const posts = [
  {
    title: "The Language of Light",
    excerpt: "Exploring how frequency and vibration shape our reality and consciousness",
    date: "Dec 15, 2024",
    category: "Consciousness",
  },
  {
    title: "Shadows as Teachers",
    excerpt: "Why embracing darkness is essential for spiritual evolution",
    date: "Nov 28, 2024",
    category: "Integration",
  },
  {
    title: "Sacred Masculine Rising",
    excerpt: "Balancing divine masculine and feminine energies in modern times",
    date: "Nov 10, 2024",
    category: "Balance",
  },
  {
    title: "Quantum Consciousness",
    excerpt: "The intersection of science, spirituality, and collective awakening",
    date: "Oct 22, 2024",
    category: "Wisdom",
  },
];

const Blog = () => {
  return (
    <section className="relative py-32 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6">
            Transmissions &
            <span className="block mt-2 bg-gradient-to-r from-primary to-gold bg-clip-text text-transparent">
              Insights
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Wisdom for the awakening journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((post, index) => (
            <Card
              key={index}
              className="group cursor-pointer border-primary/20 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-500 hover:shadow-glow hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="text-xs text-primary font-medium mb-2 uppercase tracking-wider">
                  {post.category}
                </div>
                <CardTitle className="text-xl font-serif group-hover:text-primary transition-colors">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="text-xs text-muted-foreground/70">
                  {post.date}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
