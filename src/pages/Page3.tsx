import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Play } from "lucide-react";

const Page3 = () => {
  const navigate = useNavigate();
  const cards = [
    {
      id: 1,
      title: "Simi’s Suspicion",
      description: "Simi’s paranoia deepens. She begins to stalk Akash, visiting his apartment under the pretext of checking on him. Her eyes scan the room, searching for proof of sight. Akash tries to maintain his blind act, fumbling around and pretending ignorance. But a single misstep—a startled reaction to a movement—gives her reason to doubt.",
      image: "https://images.unsplash.com/photo-1594908900066-3f47337549d8?w=800&q=80"
    },
    {
      id: 2,
      title: "The Poisoned Offer",
      description: "Feigning kindness, Simi offers Akash a glass of poisoned tea. He drinks it, unaware of her plan. Soon, darkness consumes him—real this time. When he wakes up, he’s in an unfamiliar place, bound and helpless. For the first time, his blindness isn’t a choice; it’s survival against forces far beyond his control.",
      image: "https://images.unsplash.com/photo-1522152302542-71a8e5172aa1?w=800&q=80"
    },
    {
      id: 3,
      title: "The Doctor’s Bargain",
      description: "Akash finds himself at the mercy of a corrupt doctor and his wife, who see him as an opportunity to make money by selling his organs. The doctor’s wife, however, takes pity on him, moved by his story and innocence. Together, they strike a deal that leads to a new cycle of manipulation, deceit, and survival.",
      image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=800&q=80"
    },
  ];

  return (
    <div className="min-h-screen bg-[#141414] text-white font-netflix">
      {/* Header */}
      <header className="px-4 md:px-12 py-6 bg-gradient-to-b from-black/80 to-transparent">
      <h1 className="text-[#e50914] text-4xl md:text-5xl font-bold tracking-tight text-center">
              The Game of Deception
            </h1>
      </header>

      {/* Cards Grid */}
      <main className="px-4 md:px-12 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {cards.map((card) => (
            <Card 
              key={card.id} 
              className="bg-[#1f1f1f] border-none hover:scale-105 transition-transform duration-300 cursor-pointer group overflow-hidden"
            >
              <CardHeader className="pb-3">
                <CardTitle className="text-white text-2xl font-bold tracking-tight">
                  {card.title}
                </CardTitle>
                <CardDescription className="text-gray-400 text-base leading-relaxed mt-2">
                  {card.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img 
                    src={card.image} 
                    alt={card.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Page3;
