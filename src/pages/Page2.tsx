import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Play } from "lucide-react";

const Page2 = () => {
  const navigate = useNavigate();
  const cards = [
    {
      id: 1,
      title: "The Fatal Performance",
      description: "When Akash arrives at the luxurious Sinha residence, he sets up his piano and begins to play. The melody flows beautifully, filling the house with calm—until he senses something wrong. Through a half-open door, he sees the lifeless body of Pramod Sinha lying on the floor. Standing near him are Simi and her lover, Manohar, frantically trying to hide the evidence. Akash’s heartbeat quickens, but he keeps playing, pretending he saw nothing.",
      image: "https://i.postimg.cc/NfmT4sfs/ai-generated-image-6.jpg"
    },
    {
      id: 2,
      title: "The Panic of Pretence",
      description: "Akash struggles to maintain composure as Simi walks past him, testing whether he can really not see. Every second feels like an hour. The notes from his piano now sound like a heartbeat of fear, each key a desperate attempt to survive. He knows that revealing the truth could cost him his life, yet staying silent means living with a secret too heavy to bear.",
      image: "https://i.postimg.cc/L6phmzRz/ai-generated-image-7.jpg"
    },
    {
      id: 3,
      title: "The Cover-Up",
      description: "After narrowly escaping the Sinha house, Akash returns home in shock. He contemplates confessing but decides against it, fearing no one would believe him—a blind man claiming to witness a murder. As he tries to move on, Simi grows suspicious that Akash knows more than he lets on, setting the stage for a deadly confrontation.",
      image: "https://i.postimg.cc/3xw8w1q0/ai-generated-image-8.jpg"
    },
  ];

  return (
    <div className="min-h-screen bg-[#141414] text-white font-netflix">
      {/* Header */}
      <header className="px-4 md:px-12 py-6 bg-gradient-to-b from-black/80 to-transparent">
      <h1 className="text-[#e50914] text-4xl md:text-5xl font-bold tracking-normal text-center">
              The Corpse Behind the Curtain
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

export default Page2;
