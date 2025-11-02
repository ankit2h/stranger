import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const MovieDetails = () => {
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
            <CardDescription className="text-gray-300 text-base leading-relaxed mt-4" style={{ fontFamily: 'Lora, sans-serif', fontWeight: 700 }}>
              The Andhadhun Moviebook brings one of India’s most unpredictable
              thrillers to life through an immersive storytelling experience.
              Rather than simply retelling the movie, it transforms the
              narrative into a chapter-based journey — where each page unfolds
              like a scene, complete with titles, visuals, and emotions that
              mirror the film’s rhythm and suspense. This moviebook takes you
              deep into Akash’s world — a pianist whose act of pretending to be
              blind spirals into a chain of crime, chaos, and moral confusion.
              Each section explores how perception, deception, and survival
              intertwine, revealing the fine line between truth and illusion.
              Through vivid writing and cinematic structure, it captures the
              tension and irony that define Andhadhun’s storytelling. Designed
              for film lovers and creative storytellers alike, the Andhadhun
              Moviebook invites you to experience the film in a new form — one
              where music becomes narrative, suspense turns into reflection, and
              every page feels like a frame from the movie itself.
            </CardDescription>
          </CardHeader>
        </Card>
      </main>
    </div>
  );
};

export default MovieDetails;
