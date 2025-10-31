import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Play } from "lucide-react";

const Page1 = () => {
  const navigate = useNavigate();
  const cards = [
    {
      id: 1,
      title: "Music in the Dark",
      description: "Akash, a passionate pianist living in Pune, leads a quiet life centered around his piano and his art. But his blindness is not real—it’s a self-imposed condition. Believing that shutting off one sense sharpens the others, he pretends to be blind to heighten his musical instincts. He practices daily, moving confidently through his apartment, every step rehearsed, every sound memorized. His melodies echo through his small room, expressing emotions he cannot otherwise share.",
      image: "https://images.unsplash.com/photo-1594908900066-3f47337549d8?w=800&q=80"
    },
    {
      id: 2,
      title: "Sophie’s Discovery",
      description: "One afternoon, Akash’s mesmerizing performance catches the attention of Sophie, the warm-hearted daughter of a café owner. Impressed by his soulful tunes, she invites him to perform regularly at her family’s café. Their friendship soon turns into affection, and Sophie becomes both his admirer and confidante. Unaware of his secret, she sees him as an inspiring artist who overcame blindness to pursue his dream.",
      image: "https://images.unsplash.com/photo-1522152302542-71a8e5172aa1?w=800&q=80"
    },
    {
      id: 3,
      title: "The Invitation",
      description: "Fate intervenes when former Bollywood actor Pramod Sinha visits the café and is enchanted by Akash’s music. He invites Akash to play at his home for his wife, Simi. It seems like a golden opportunity for Akash, unaware that this invitation will change his life forever.",
      image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=800&q=80"
    },
  ];

  return (
    <div className="min-h-screen bg-[#141414] text-white font-netflix">
      {/* Header */}
      <header className="px-4 md:px-12 py-6 bg-gradient-to-b from-black/80 to-transparent">
      <h1 className="text-[#e50914] text-4xl md:text-5xl font-bold tracking-tight text-center">
              The Melodic Illusion
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

export default Page1;
