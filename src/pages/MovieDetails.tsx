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
          STRANGER THINGS
        </h1>
      </header>

      {/* Main Content */}
      <main className="px-4 md:px-12 py-8 max-w-6xl mx-auto">
        {/* YouTube Video */}
        <div className="mb-8 aspect-video w-full">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/b9EkMc79ZSU"
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
            <CardTitle className="text-white text-3xl font-bold tracking-tight">
              About the Show
            </CardTitle>
            <CardDescription className="text-gray-300 text-base leading-relaxed mt-4">
              Set in the 1980s in the fictional town of Hawkins, Indiana,
              Stranger Things is a thrilling science fiction horror series that
              follows a group of friends as they uncover supernatural mysteries.
              When a young boy named Will Byers mysteriously vanishes, his
              mother Joyce, the town's police chief Jim Hopper, and Will's
              friends embark on a desperate search to find him. Their
              investigation leads them to a parallel dimension known as the
              Upside Down, a dark and dangerous place inhabited by terrifying
              creatures. Along the way, they encounter Eleven, a young girl with
              extraordinary psychokinetic abilities who escaped from a secret
              government laboratory. As the group delves deeper into the
              mystery, they discover that Hawkins is at the center of a
              government conspiracy involving secret experiments that have
              opened a gateway between dimensions. The show brilliantly combines
              elements of horror, adventure, and coming-of-age drama, paying
              homage to 1980s pop culture while creating its own unique and
              captivating narrative. With its compelling characters, atmospheric
              tension, and nostalgic references, Stranger Things has become a
              cultural phenomenon that resonates with audiences worldwide.
            </CardDescription>
          </CardHeader>
        </Card>
      </main>
    </div>
  );
};

export default MovieDetails;
