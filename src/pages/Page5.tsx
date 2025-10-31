import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Play } from "lucide-react";

const Page5 = () => {
  const navigate = useNavigate();
  const cards = [
    {
      id: 1,
      title: "Reunion at a Distance",
      description: "Years later, Sophie sees Akash performing at a concert abroad. Time has changed them both, but her curiosity hasn’t faded. She approaches him, unsure whether to forgive or question the man she once loved.",
      image: "https://images.unsplash.com/photo-1594908900066-3f47337549d8?w=800&q=80"
    },
    {
      id: 2,
      title: "Truth or Illusion",
      description: "As they talk, Sophie senses that Akash might still be hiding something. When he walks away, she notices a subtle movement—his cane lightly flicks a can out of his path, perfectly timed, perfectly aimed. Was it reflex or instinct?",
      image: "https://images.unsplash.com/photo-1522152302542-71a8e5172aa1?w=800&q=80"
    },
    {
      id: 3,
      title: "The Curtain Falls",
      description: "Sophie stands frozen as Akash disappears into the crowd. The truth remains ambiguous—was he ever blind, or was blindness his greatest performance? The story ends with the haunting sound of a piano note echoing in the distance, leaving the audience questioning everything they just witnessed.",
      image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=800&q=80"
    },
  ];

  return (
    <div className="min-h-screen bg-[#141414] text-white font-netflix">
      {/* Header */}
      <header className="px-4 md:px-12 py-6 bg-gradient-to-b from-black/80 to-transparent">
      <h1 className="text-[#e50914] text-4xl md:text-5xl font-bold tracking-tight text-center">
              The Final Note
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

export default Page5;
