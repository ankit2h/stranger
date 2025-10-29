import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const MovieCast = () => {
  const navigate = useNavigate();

  const castData = [
    {
      name: "Millie Bobby Brown",
      role: "Eleven",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
      intro: "A young girl with psychokinetic abilities who escapes from a secret government laboratory. Her mysterious past and extraordinary powers make her central to uncovering the supernatural mysteries of Hawkins."
    },
    {
      name: "Finn Wolfhard",
      role: "Mike Wheeler",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
      intro: "The de facto leader of the group of friends. Mike is determined, loyal, and deeply devoted to protecting Eleven and finding his missing friend Will."
    },
    {
      name: "Gaten Matarazzo",
      role: "Dustin Henderson",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      intro: "The comic relief of the group with a brilliant scientific mind. Dustin's curiosity and problem-solving skills often help the group navigate dangerous situations."
    },
    {
      name: "Caleb McLaughlin",
      role: "Lucas Sinclair",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      intro: "A pragmatic and protective member of the group. Lucas is brave, practical, and always ready to defend his friends with his signature wrist rocket."
    },
    {
      name: "Noah Schnapp",
      role: "Will Byers",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&fit=crop",
      intro: "The quiet, artistic boy whose mysterious disappearance in the first season sets the entire story in motion. His connection to the Upside Down remains a central element of the series."
    },
    {
      name: "Sadie Sink",
      role: "Max Mayfield",
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=400&fit=crop",
      intro: "A tough, skateboarding tomboy who joins the group in the second season. Max brings a fierce independence and vulnerability that adds depth to the group dynamics."
    },
    {
      name: "Winona Ryder",
      role: "Joyce Byers",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
      intro: "Will's devoted mother who will stop at nothing to protect her sons. Joyce's determination and maternal instinct drive much of the adult action in the series."
    },
    {
      name: "David Harbour",
      role: "Jim Hopper",
      image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=400&h=400&fit=crop",
      intro: "The gruff but caring police chief of Hawkins. Hopper becomes a father figure to Eleven while investigating the town's supernatural occurrences and government conspiracies."
    }
  ];

  return (
    <div className="min-h-screen bg-[#141414] text-white font-netflix">
      {/* Header */}
      <header className="px-4 md:px-12 py-6 bg-gradient-to-b from-black/80 to-transparent">
       
        <h1 className="text-[#e50914] text-4xl md:text-5xl font-bold tracking-tight text-center">
          CAST & CREW
        </h1>
      </header>

      {/* Cast Grid */}
      <main className="px-4 md:px-12 py-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
          {castData.map((cast, index) => (
            <Card key={index} className="bg-[#1f1f1f] border-none shadow-2xl hover:scale-105 transition-transform duration-300">
              <CardHeader className="p-0">
                <img
                  src={cast.image}
                  alt={cast.name}
                  className="w-full h-64 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="text-white text-xl font-bold mb-2">
                  {cast.name}
                </CardTitle>
                <p className="text-[#e50914] text-sm font-semibold mb-2">as {cast.role}</p>
                <p className="text-gray-300 text-sm leading-relaxed">{cast.intro}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default MovieCast;
