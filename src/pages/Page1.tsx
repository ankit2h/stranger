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
    description: `🎹 Akash ek passionate pianist hai jo Pune me rehta hai 🎶
  Uska life uske piano aur music ke around hi ghoomta hai 🏡💫
  Lekin uski andhapan sach nahi hai 😮 — ye uska khud ka decision hai!
  Uska maanna hai ki ek sense band karne se doosri senses aur tez ho jaati hain 👀✨
  Isliye wo pretend karta hai ki wo andha hai, taaki apne music instincts ko aur strong bana sake 🎵💪

Wo roz practice karta hai, apne ghar me confidently move karta hai 🚶‍♂️
Har kadam, har sound use yaad hai 🔊🧠
Uske piano ke sur uske emotions ko express karte hain — jo wo shabdon me nahi keh paata ❤️🎼`,
      image: "https://i.postimg.cc/SsYbMtLj/ai-generated-image-3.jpg"
    },
    {
      id: 2,
      title: "Sophie’s Discovery",
      description: `☀️ Ek din dopahar ko, Akash ka magical performance sabka dil jeet leta hai 🎹💫
Wahi pe usse milti hai Sophie — ek sweet aur kind-hearted ladki, jiske papa ek café chalate hain ☕💖

Uske soulful music se impress hokar, Sophie use apne café me regular perform karne ka invite deti hai 🎶✨
Dheere-dheere unki dosti pyaar me badalne lagti hai ❤️
Sophie Akash ki biggest fan aur close dost ban jaati hai 🤗💞

Wo ye nahi jaanti ki Akash ki andhapan sirf ek secret hai 😮
Uske liye, Akash ek inspiring artist hai jisne apni blindness ke bawajood apne sapne pure kiye 🌟🎵
`,
      image: "https://i.postimg.cc/85QtZKQt/ai-generated-image-4.jpg"
    },
    {
      id: 3,
      title: "The Invitation",
      description: `🎬 Kismet tab beech me aati hai jab ek purane Bollywood actor, Pramod Sinha, café me aate hain 🎩✨
Wahan wo Akash ka music sunte hi uske deewane ho jaate hain 🎹💖

Wo Akash ko apne ghar bulate hain taaki wo unki wife, Simi, ke liye bajaye 🎶💃
Akash ke liye ye ek golden chance lagta hai 🌟
Lekin use ye bilkul pata nahi hota ki ye invitation uski zindagi hamesha ke liye badal dega 😮⚡
`,
      image: "https://i.postimg.cc/d15Zh3BR/ai-generated-image-5.jpg"
    },
  ];

  return (
    <div className="min-h-screen bg-[#141414] text-white font-netflix">
      {/* Header */}
      <header className="px-4 md:px-12 py-6 bg-gradient-to-b from-black/80 to-transparent">
      <h1 className="text-[#e50914] text-4xl md:text-5xl font-bold tracking-normal text-center">
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
                <CardTitle className="text-white text-2xl font-bold tracking-normal">
                  {card.title}
                </CardTitle>
                <CardDescription className="text-gray-400 text-base leading-relaxed mt-2" style={{ fontFamily: 'Lora, sans-serif', fontWeight: 700, whiteSpace: 'pre-line' }}>
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
