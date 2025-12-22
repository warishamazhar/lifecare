const shorts = [
  {
    id: 1,
    title: "Short #1",
    url: "https://www.youtube.com/shorts/ay0jtFnOlvc",
    embed: "https://www.youtube.com/embed/ay0jtFnOlvc",
  },
  {
    id: 2,
    title: "Short #2",
    url: "https://www.youtube.com/shorts/83wUgWxnYC4",
    embed: "https://www.youtube.com/embed/83wUgWxnYC4",
  },
  {
    id: 3,
    title: "Short #3",
    url: "https://www.youtube.com/shorts/beqDy_gPkLQ",
    embed: "https://www.youtube.com/embed/beqDy_gPkLQ",
  },
  {
    id: 4,
    title: "Short #4",
    url: "https://www.youtube.com/shorts/U5RVUFiJxdA",
    embed: "https://www.youtube.com/embed/U5RVUFiJxdA",
  },
  {
    id: 5,
    title: "Short #5",
    url: "https://www.youtube.com/shorts/LsGyPmygr-o",
    embed: "https://www.youtube.com/embed/LsGyPmygr-o",
  },
  {
    id: 6,
    title: "Short #6",
    url: "https://www.youtube.com/shorts/gCLZkkK2_iE",
    embed: "https://www.youtube.com/embed/gCLZkkK2_iE",
  },
  {
    id: 7,
    title: "Short #7",
    url: "https://www.youtube.com/watch?v=_ulbjQza-LQ",
    embed: "https://www.youtube.com/embed/_ulbjQza-LQ",
  },
  {
    id: 8,
    title: "Short #8",
    url: "https://www.youtube.com/watch?v=bo8j0kj8CDM",
    embed: "https://www.youtube.com/embed/bo8j0kj8CDM",
  },
];

const Gallery = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      {/* Heading */}
      <div className="text-center mb-14">
        <h1 className="text-4xl font-bold text-primary mb-2">
          YouTube Shorts Gallery
        </h1>
        <p className="text-muted-foreground">
          Click play to watch — videos are embedded and responsive.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {shorts.map((short) => (
          <div
            key={short.id}
            className="rounded-xl overflow-hidden shadow-lg bg-background"
          >
            {/* Video */}
            <div className="aspect-[9/16] w-full">
              <iframe
                src={short.embed}
                title={short.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>

            {/* Footer */}
            <div className="p-4">
              <h3 className="font-semibold text-primary mb-2">
                {short.title}
              </h3>
              <a
                href={short.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 text-sm break-all hover:underline"
              >
                {short.url}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
