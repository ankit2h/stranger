import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Play } from "lucide-react";
import { Link } from "react-router-dom";


const Page4 = () => {
   const FLOAT_BUTTON_LABEL = "Next";
  const navigate = useNavigate();
  const cards = [
    {
      id: 1,
      title: "A Dangerous Alliance",
      description: `🧠 Akash doctor ki wife ko samjhata hai ki wo uski madad kare bhaagne me 🤝💨
Dono milkar ek plan banate hain — Simi ki greed ka use karke usse ek deadly trap me phansaane ka 💰⚡

Lekin is khatarnaak kahani me har alliance ke peeche ek hidden motive hota hai 😈🎭
Yahan trust ek luxury hai — jise koi afford nahi kar sakta 😶🔐
`,
      image: "https://i.postimg.cc/x8rGfcTX/ai-generated-image-12.jpg",
    },
    {
      id: 2,
      title: "Death in the Shadows",
      description: `⚔️ Confrontation bilkul control se bahar chala jaata hai 😱🔥
Simi poori taqat se ladti hai, aur unke beech ek dangerous chase hoti hai jo ek crash me khatam hoti hai 🚗💥
Sabko lagta hai Simi mar gayi 💀😨

Akash, thaka-hara aur zakhmi, finally sheher chhod kar bhag jaata hai 💔🏃‍♂️
Jo music pehle uske liye peace aur beauty ka symbol tha 🎹✨
Ab wahi uske dard aur khoyi hui zindagi ki yaad ban jaata hai 🎵😢
`,
      image: "https://i.postimg.cc/25bB1rtT/ai-generated-image-13.jpg",
    },
    {
      id: 3,
      title: "The Blind Man’s Escape",
      description: `🌍 Akash India chhod kar ek nayi jagah apni zindagi shuru karta hai ✈️🎶
Ab wo audiences ke liye perform karta hai jo use ek miraculous blind pianist ke roop me dekhte hain 👏🎹

Par zindagi ka irony kadwa hai 😔💭
Uska talent ab pehle se zyada chamak raha hai ✨
Lekin wo bana hai guilt aur dhokhe ke upar 😢🎭
`,
      image: "https://i.postimg.cc/J0613BDP/ai-generated-image-14.jpg",
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
                <CardDescription
                  className="text-gray-400 text-base leading-relaxed mt-2"
                  style={{
                    fontFamily: "Lora, sans-serif",
                    fontWeight: 700,
                    whiteSpace: "pre-line",
                  }}
                >
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
              <Link
                to={`/the-final-note`}
                aria-label={FLOAT_BUTTON_LABEL}
                title={FLOAT_BUTTON_LABEL}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="fixed bottom-6 right-6 z-50 bg-[#e50914] hover:bg-[#e50914] text-white px-5 py-3 rounded-xl shadow-lg text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-300 tracking-widest"
              >
                Next 👉
              </Link>
    </div>
  );
};

export default Page4;
