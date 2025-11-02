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

const Page5 = () => {
  const navigate = useNavigate();
  const cards = [
    {
      id: 1,
      title: "Reunion at a Distance",
      description: `🎤 Saalon baad, Sophie ek concert me abroad Akash ko perform karte hue dekhti hai 🌍🎶
Waqt ne dono ko badal diya hai, par uski curiosity ab bhi zinda hai 💫💭

Wo Akash ke paas jaati hai, dil me confusion le kar —
kya use maaf kare ❤️‍🩹 ya usse sawaal pooche jise wo kabhi pyaar karti thi 💔❓
`,
      image: "https://i.postimg.cc/bN4PzPQG/ai-generated-image-15.jpg",
    },
    {
      id: 2,
      title: "Truth or Illusion",
      description: `🗣️ Jab dono baat karte hain, Sophie ko mehsoos hota hai ki Akash ab bhi kuch chhupa raha hai 🤔💭
Jab wo chal kar jaata hai, Sophie ki nazar ek chhoti si cheez par padti hai 👀

Akash ka stick halki si move hoti hai aur ek can ko side kar deti hai — bilkul perfect timing me 🎯😳
Ab sawaal ye hai… ye reflex tha, ya instinct? 😶🎹
`,
      image: "https://i.postimg.cc/Ss15DLdn/ai-generated-image-16.jpg",
    },
    {
      id: 3,
      title: "The Curtain Falls",
      description: `😶 Sophie wahin khadi reh jaati hai, jab Akash bheed me kho jaata hai 🚶‍♂️🌆
Sach ab bhi ek mystery bana rehta hai — kya wo kabhi andha tha bhi? 🤔👁️
Ya phir andhapan hi uska sabse bada performance tha? 🎭🎹

Kahani khatam hoti hai ek haunting piano note ke saath 🎶💫
Jo hawa me goonjta rehta hai… aur sabke mann me ek sawaal chhod jaata hai — aakhir kya sach tha? 😢🎬
`,
      image: "https://i.postimg.cc/59h1J150/ai-generated-image-17.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-[#141414] text-white font-netflix">
      {/* Header */}
      <header className="px-4 md:px-12 py-6 bg-gradient-to-b from-black/80 to-transparent">
        <h1 className="text-[#e50914] text-4xl md:text-5xl font-bold tracking-normal text-center">
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
    </div>
  );
};

export default Page5;
