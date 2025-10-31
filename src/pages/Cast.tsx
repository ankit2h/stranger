import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const MovieCast = () => {
  const navigate = useNavigate();

  const castData = [
    {
      name: "Ayushmann Khurrana",
      role: "Akash Saraf",
      image:
        "https://assets.gqindia.com/photos/66193c524cae6d217224ece4/1:1/w_1080,h_1080,c_limit/GQ-Hype-Ayushmann-Khurrana.jpg?w=400&h=400&fit=crop",
      intro:
        "A talented pianist who pretends to be blind, only to find himself caught in a deadly web of murder and deception.",
    },
    {
      name: "Tabu",
      role: "Simi Sinha",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/f/f3/Tabu_in_2024.jpg?w=400&h=400&fit=crop",
      intro:
        "A charming yet ruthless woman whose secrets and manipulations drive the story’s darkest turns.",
    },
    {
      name: "Radhika Apte",
      role: "Sophie",
      image:
        "https://www.bookmyartistindia.com/wp-content/uploads/2023/10/BC_RadhikaApte_1.png?w=400&h=400&fit=crop",
      intro:
        "Akash’s kind-hearted love interest who becomes unknowingly involved in his tangled world of lies.",
    },
    {
      name: "Anil Dhawan",
      role: "Pramod Sinha",
      image:
        "https://cf-img-a-in.tosshub.com/sites/visualstory/wp/2023/06/anil-dhawan.png?size=*:900?w=400&h=400&fit=crop",
      intro:
        "A retired film star whose unexpected death sets off the chain of shocking events.",
    },
    {
      name: "Manav Vij",
      role: "Inspector Manohar",
      image:
        "https://images.timesnownews.com/thumb/msid-113123813,thumbsize-1537319,width-1280,height-720,resizemode-75/113123813.jpg?w=400&h=400&fit=crop",
      intro:
        "A corrupt police officer and Simi’s lover, trapped between greed and fear.",
    },
    {
      name: "Ashwini Kalsekar",
      role: "Rasika",
      image:
        "https://in.bmscdn.com/iedb/artist/images/website/poster/large/ashwini-kalsekar-255-1716804543.jpg?w=400&h=400&fit=crop",
      intro:
        "The doctor’s cunning wife who becomes Akash’s unlikely ally in his fight for survival.",
    },
    {
      name: "Zakir Hussain",
      role: "Dr. Swami",
      image:
        "https://m.media-amazon.com/images/M/MV5BZjhhYzNjNDAtZDMzNy00OTkzLTg4NzEtZTllY2NmYjAzODJhXkEyXkFqcGc@._V1_.jpg?w=400&h=400&fit=crop",
      intro:
        "A shady doctor whose twisted humor adds irony and chaos to Akash’s ordeal.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#141414] text-white font-netflix">
      {/* Header */}
      <header className="px-4 md:px-12 py-6 bg-gradient-to-b from-black/80 to-transparent">
        <h1 className="text-[#e50914] text-4xl md:text-5xl font-bold tracking-normal text-center">
          CAST & CHARACTERS
        </h1>
      </header>

      {/* Cast Grid */}
      <main className="px-4 md:px-12 py-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
          {castData.map((cast, index) => (
            <Card
              key={index}
              className="bg-[#1f1f1f] border-none shadow-2xl hover:scale-105 transition-transform duration-300"
            >
              <CardHeader className="p-0">
                <img
                  src={cast.image}
                  alt={cast.name}
                  className="w-full h-64 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="text-white text-xl tracking-wider font-bold mb-2">
                  {cast.name}
                </CardTitle>
                <p className="text-[#e50914] text-sm font-semibold tracking-wider mb-2">
                  as {cast.role}
                </p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {cast.intro}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default MovieCast;
