import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Play } from "lucide-react";

const Page4 = () => {
  const navigate = useNavigate();
  const cards = [
    {
      id: 1,
      title: "A Dangerous Alliance",
      description: "Akash convinces the doctor’s wife to help him escape. They plot to use Simi’s greed against her, luring her into a deadly trap. But every alliance in this twisted story has hidden motives—trust is a luxury no one can afford.",
      image: "https://images.unsplash.com/photo-1594908900066-3f47337549d8?w=800&q=80"
    },
    {
      id: 2,
      title: "Death in the Shadows",
      description: "The confrontation spirals out of control. Simi fights back viciously, leading to a brutal chase and a crash that leaves her presumed dead. Akash, battered and broken, seizes his chance to flee the city. The music that once symbolized beauty and peace now becomes a haunting reminder of all he’s lost.",
      image: "https://images.unsplash.com/photo-1522152302542-71a8e5172aa1?w=800&q=80"
    },
    {
      id: 3,
      title: "The Blind Man’s Escape",
      description: "Akash’s journey takes him away from India, where he starts anew, performing for audiences who see him as a miraculous blind pianist. The irony is bitter—his talent shines brighter than ever, but it’s built on layers of guilt and deception.",
      image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=800&q=80"
    },
  ];

  return (
    <div className="min-h-screen bg-[#141414] text-white font-netflix">
      {/* Header */}
      <header className="px-4 md:px-12 py-6 bg-gradient-to-b from-black/80 to-transparent">
      <h1 className="text-[#e50914] text-4xl md:text-5xl font-bold tracking-normal text-center">
              The Symphony of Lies
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
                <CardTitle className="text-white text-2xl font-bold tracking-normal">
                  {card.title}
                </CardTitle>
                <CardDescription className="text-gray-400 text-base leading-relaxed mt-2" style={{ fontFamily: 'Lora, sans-serif', fontWeight: 700 }}>
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

export default Page4;
