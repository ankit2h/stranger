import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Play } from "lucide-react";

const Gallery = () => {
  const navigate = useNavigate();
  const cards = [
    {
      id: 1,
      title: "Stranger Things",
      description: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.",
      image: "https://images.unsplash.com/photo-1594908900066-3f47337549d8?w=800&q=80"
    },
    {
      id: 2,
      title: "The Crown",
      description: "Follows the political rivalries and romance of Queen Elizabeth II's reign and the events that shaped the second half of the 20th century.",
      image: "https://images.unsplash.com/photo-1522152302542-71a8e5172aa1?w=800&q=80"
    },
    {
      id: 3,
      title: "Bridgerton",
      description: "The eight close-knit siblings of the Bridgerton family look for love and happiness in London high society.",
      image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=800&q=80"
    },
    {
      id: 4,
      title: "Wednesday",
      description: "Follows Wednesday Addams' years as a student at Nevermore Academy, where she tries to master her emerging psychic ability.",
      image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80"
    },
    {
      id: 5,
      title: "The Witcher",
      description: "Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts.",
      image: "https://images.unsplash.com/photo-1518895312237-a9e23508077d?w=800&q=80"
    },
    {
      id: 6,
      title: "Dark",
      description: "A family saga with a supernatural twist, set in a German town where the disappearance of two young children exposes relationships among four families.",
      image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-[#141414] text-white font-netflix">
      {/* Header */}
      <header className="px-4 md:px-12 py-6 bg-gradient-to-b from-black/80 to-transparent">
      <h1 className="text-[#e50914] text-4xl md:text-5xl font-bold tracking-tight text-center">
              GALLERY
            </h1>
        {/* <div className="flex justify-between items-center">
          <div>
            
            <p className="text-gray-400 mt-2 text-lg">Explore our collection</p>
          </div>
          <Button
            onClick={() => navigate("/movie-details")}
            className="bg-[#e50914] hover:bg-[#c4070f] text-white gap-2"
          >
            <Play className="w-4 h-4" />
            Movie Details
          </Button>
        </div> */}
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

export default Gallery;
