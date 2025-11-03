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

const Page3 = () => {
  const FLOAT_BUTTON_LABEL = "Next";

  const navigate = useNavigate();
  const cards = [
    {
      id: 1,
      title: "Simi’s Suspicion",
      description: `😰 Simi ka darr aur shak ab aur badhne lagta hai 😨💭
Wo Akash ka peecha karne lagti hai, uske apartment me aati hai ye kehkar ki sirf dekhne aayi hai 👀🏠

Uski nazar har jagah proof dhoondh rahi hoti hai — kya Akash sach me andha hai ya sab drama? 🤔🕵️‍♀️
Akash apna blind act chalu rakhta hai, cheezon se takrata hai, jaise kuch samajh hi nahi raha 😶🎭

Lekin ek chhoti si galti — ek reaction movement par 😳
Aur Simi ke mann me shak aur gehra ho jaata hai 😬⚡
`,
      image: "https://i.postimg.cc/KvpX029r/ai-generated-image-9.jpg",
    },
    {
      id: 2,
      title: "The Poisoned Offer",
      description: `☕😈 Simi nakli meherbaani dikhate hue Akash ko ek cup chai deti hai — zeher wali chai 💀💋
Bechara Akash bina kuch jaane use pee leta hai 😔

Thodi der me sab kuch andhera ho jaata hai — is baar sach me 😵🌑
Jab wo hosh me aata hai, to ek ajeeb jagah par bandha hua hota hai, bilkul bekaar aur majboor 😣⛓️

Ab uski andhapan ek choice nahi, balki uska zinda rehne ka tareeka ban chuka hai 😢🎭
`,
      image: "https://i.postimg.cc/SsSD0XRG/ai-generated-image-10.jpg",
    },
    {
      id: 3,
      title: "The Doctor’s Bargain",
      description: `😨 Akash ab ek corrupt doctor aur uski wife ke reham par hota hai 🏥💉
Doctor usse ek mauka samajhta hai paisa kamane ka — uske organs bechkar 💰🩸

Lekin doctor ki wife uski kahani aur masoomiyat se pighal jaati hai 💔😢
Wo dono milkar ek deal karte hain, jo shuru karti hai ek naye daur ka — dhokhe, manipulation aur survival ka 🔄🎭
`,
      image: "https://i.postimg.cc/0jLYNrkF/ai-generated-image-11.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-[#141414] text-white font-netflix">
      {/* Header */}
      <header className="px-4 md:px-12 py-6 bg-gradient-to-b from-black/80 to-transparent">
        <h1 className="text-[#e50914] text-4xl md:text-5xl font-bold tracking-normal text-center">
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
        <Link
          to={`/the-symphony-of-lies`}
          aria-label={FLOAT_BUTTON_LABEL}
          title={FLOAT_BUTTON_LABEL}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 bg-[#e50914] hover:bg-[#e50914] text-white px-5 py-3 rounded-xl shadow-lg text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-300 tracking-widest"
        >
          Next 👉
        </Link>
      </main>
    </div>
  );
};

export default Page3;
