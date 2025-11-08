import springerLogo from "../assets/springer.png";

export default function AboutConference() {
  return (
    <section id="about-conference" className="pt-1 pb-20 bg-surface">
      <div className="container px-6 mx-auto">
        <div className="mb-12 text-center">
          <div className="flex flex-col items-center gap-6">
            <img
              src="/src/assets/International_Conference_on_Advances_in_(1)[1].jpg"
              alt="IC3AI Conference Logo"
              className="w-48 h-auto mb-4"
            />
            <h2 className="text-4xl font-bold md:text-5xl text-surface-primary font-poppins">About IC3AI-2026</h2>
            <div className="w-24 h-1 bg-primary"></div>
          </div>
        </div>

        <div className="mx-auto text-justify text-black max-w-8xl">
          <div className="mb-6 text-base leading-relaxed md:text-lg font-roboto">
            The Department of Computer Science and Engineering,
I.T.S Engineering College, Gr. Noida
is pleased to announce the International Conference on Computational Intelligence, Cybersecurity and Artificial Intelligence (IC3AI-2026).

The conference will be organized at I.T.S Engineering College, Gr. Noida.
IC3AI-2026 aims to provide a premier interdisciplinary platform for researchers, academicians, and professionals.
It seeks to promote the exchange of knowledge, ideas, and innovations in Artificial Intelligence, Cybersecurity, and Computational Intelligence.
          </div>

          <p className="mb-10 text-base leading-relaxed md:text-lg font-roboto">
            The conference will feature plenary sessions, workshops, and parallel technical tracks by eminent experts.
Major themes include Machine Learning, Data Analytics, Cyber Threats, and Responsible AI.
It also emphasizes ethical considerations, bias mitigation, and secure system design.

Researchers are invited to submit original and unpublished papers demonstrating theoretical and applied research.
All accepted and presented papers will be submitted to Springer for publication consideration.
The proceedings are proposed to be included in the Springer Scopus Indexed Series – Lecture Notes in Networks and Systems (approval awaited).

IC3AI-2026 aims to foster academic collaboration and industry-academia interaction.
We welcome active participation from scholars, practitioners, and students across engineering disciplines.
          </p>
          <div className="flex justify-center mb-8">
            <a 
              href="https://link.springer.com/series/15179" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center px-6 py-3 text-white transition-colors duration-300 rounded-lg bg-primary hover:bg-primary/90"
            >
              Visit Springer Series - Lecture Notes in Networks and Systems
            </a>
          </div>

          <h3 className="mb-8 text-2xl font-bold md:text-3xl text-surface-primary font-poppins">Conference Highlights</h3>
          <ul className="mt-6 space-y-4">
            <li className="flex items-start gap-4 transition-transform duration-300 group hover:transform hover:translate-x-2">
              <span className="text-2xl text-primary">•</span>
              <span className="text-lg text-black transition-colors duration-300 group-hover:text-primary font-roboto">Keynote speeches by distinguished researchers and industry experts</span>
            </li>
            <li className="flex items-start gap-4 transition-transform duration-300 group hover:transform hover:translate-x-2">
              <span className="text-2xl text-primary">•</span>
              <span className="text-lg text-black transition-colors duration-300 group-hover:text-primary font-roboto">Peer-reviewed paper presentations</span>
            </li>
            <li className="flex items-start gap-4 transition-transform duration-300 group hover:transform hover:translate-x-2">
              <span className="text-2xl text-primary">•</span>
              <span className="text-lg text-black transition-colors duration-300 group-hover:text-primary font-roboto">Panel discussions on emerging trends</span>
            </li>
            <li className="flex items-start gap-4 transition-transform duration-300 group hover:transform hover:translate-x-2">
              <span className="text-2xl text-primary">•</span>
              <span className="text-lg text-black transition-colors duration-300 group-hover:text-primary font-roboto">Networking opportunities with global experts</span>
            </li>
            <li className="flex items-start gap-4 transition-transform duration-300 group hover:transform hover:translate-x-2">
              <span className="text-2xl text-primary">•</span>
              <span className="text-lg text-black transition-colors duration-300 group-hover:text-primary font-roboto">Publication opportunities in reputed journals</span>
            </li>
            <li className="flex items-start gap-4 transition-transform duration-300 group hover:transform hover:translate-x-2">
              <span className="text-2xl text-primary">•</span>
              <span className="text-lg text-black transition-colors duration-300 group-hover:text-primary font-roboto">Best paper awards and recognition</span>
            </li>
          </ul>
        </div>
        <div className="flex justify-center mt-12">
          <img
            src={springerLogo}
            alt="Springer Logo"
            className="object-contain w-64 h-auto"
          />
        </div>
      </div>
    </section>
  );
}
