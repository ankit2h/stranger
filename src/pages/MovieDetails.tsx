import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";


const MovieDetails = () => {
  const FLOAT_BUTTON_LABEL = "Next";
  return (
    <div className="min-h-screen bg-[#141414] text-white font-netflix">
      {/* Header */}
      <header className="px-4 md:px-12 py-6 bg-gradient-to-b from-black/80 to-transparent">
        <h1 className="text-[#e50914] text-4xl md:text-5xl font-bold tracking-tight text-center">
          ANDHADHUN
        </h1>
      </header>

      {/* Main Content */}
      <main className="px-4 md:px-12 py-8 max-w-6xl mx-auto">
        {/* YouTube Video */}
        <div className="mb-8 aspect-video w-full">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/2iVYI99VGaw?autoplay=1&mute=1"
            title="Stranger Things Trailer"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg shadow-2xl"
          ></iframe>
        </div>

        {/* Movie Introduction Card */}
        <Card className="bg-[#1f1f1f] border-none shadow-2xl">
          <CardHeader>
            <CardTitle className="text-white text-3xl font-bold tracking-normal">
              About the Moviebook
            </CardTitle>
            <CardDescription className="text-gray-300 text-base leading-relaxed mt-4" style={{ fontFamily: 'Lora, sans-serif', fontWeight: 700, whiteSpace: 'pre-line' }}>
            {`
🎬 Andhadhun Moviebook India ke sabse unpredictable thrillers me se ek ko ek naye, immersive style me zinda karti hai! ✨
Har page ek 🎭 scene ki tarah unfold hota hai — full of titles, visuals aur emotions, bilkul movie ke rhythm aur suspense jaisa 🎥🔥

🎹 Isme aap ghuste ho Akash ke world me — ek pianist jo andha banne ka natak karta hai 👁️, aur phir fas jaata hai crime, chaos aur confusion ke whirlpool me 😵‍💫💥
Ek cinematic kahani jahan music story ban jaata hai, aur har page lagta hai jaise ek movie frame 🎞️❤️ — perfect treat for film lovers & storytellers ✍️✨
            `}
            </CardDescription>
          </CardHeader>
        </Card>
      </main>
      <Link to={`/the-melodic-illusion`}
        aria-label={FLOAT_BUTTON_LABEL}
        title={FLOAT_BUTTON_LABEL}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 z-50 bg-[#e50914] hover:bg-[#e50914] text-white px-5 py-3 rounded-xl shadow-lg text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-300 tracking-widest"
      >
        Next 👉
      </Link>
    </div>
  );
};

export default MovieDetails;
