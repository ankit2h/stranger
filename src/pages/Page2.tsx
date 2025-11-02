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

const Page2 = () => {
  const navigate = useNavigate();
  const cards = [
    {
      id: 1,
      title: "The Fatal Performance",
      description: `🏠 Jab Akash Sinha ke luxurious bungalow me pahunchta hai, wo apna piano set karta hai aur bajana shuru karta hai 🎹✨
Uski melody poore ghar me shanti bhar deti hai 🎶💫

Lekin achanak usse kuch galat mehsoos hota hai 😰
Ek aadhi khuli darwaze se wo dekhta hai — Pramod Sinha ka dead body zameen par pada hai 😨🩸
Uske paas Simi aur uska lover Manohar khade hain, saboot chhupane ki koshish me 😱

Akash ka dil tez dhadakne lagta hai 💓💦
Lekin wo acting karta hai jaise usne kuch dekha hi nahi, aur piano bajata rehta hai 🎭🎹
`,
      image: "https://i.postimg.cc/NfmT4sfs/ai-generated-image-6.jpg",
    },
    {
      id: 2,
      title: "The Panic of Pretence",
      description:
        `😨 Akash mushkil se apna composure banaye rakhta hai, jab Simi uske paas se guzar kar use test karti hai — kya wo sach me andha hai ya nahi 👀💔

Har second use ek ghante jaisa lagta hai ⏳😰
Ab uske piano ke sur darr ki dhadkan jaise lagte hain 🎹💓
Har key ek desperate attempt hai — zinda rehne ki 😖🎶

Usse pata hai agar sach bata diya, to jaan ja sakti hai 💀
Lekin chup rehna matlab ek aisa secret uthana, jo dil pe bojh ban jaaye 😔🤫
`,
      image: "https://i.postimg.cc/L6phmzRz/ai-generated-image-7.jpg",
    },
    {
      id: 3,
      title: "The Cover-Up",
      description:
        `🏃‍♂️💨 Mushkil se Sinha House se bachkar nikalne ke baad, Akash shock me apne ghar lautta hai 😰🏠
Wo sochta hai sab kuch confess kar de, lekin fir dar jaata hai — kaun maanega ek “andhe” aadmi ki baat jo murder ka witness hone ka claim kare 😔🕵️‍♂️

Wo koshish karta hai sab bhoolne ki, par kahani yahan khatam nahi hoti 😬
Simi ko shak hone lagta hai ki Akash kuch zyada jaanta hai 🤨💢
Aur yahi se shuru hoti hai ek deadly confrontation ki taiyaari ⚡🎭
`,
      image: "https://i.postimg.cc/3xw8w1q0/ai-generated-image-8.jpg",
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
                <CardDescription
                  className="text-gray-400 text-base leading-relaxed mt-2"
                  style={{ fontFamily: "Lora, sans-serif", fontWeight: 700, whiteSpace: 'pre-line' }}
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

export default Page2;
