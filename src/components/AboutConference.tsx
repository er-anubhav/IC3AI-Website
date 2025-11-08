import confLogo from "../assets/conference-logo.png";
import springerLogo from "../assets/springer.png";

export default function AboutConference() {
  return (
    <section id="about-conference" className="  pt-1 pb-20 bg-surface">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="flex flex-col items-center gap-6">
            <img
<<<<<<< HEAD
              src={confLogo}
=======
              src="/src/assets/International_Conference_on_Advances_in_(1)[1].jpg"
>>>>>>> upstream/HEAD
              alt="IC3AI Conference Logo"
              className="w-48 h-auto mb-4"
            />
            <h2 className="text-4xl md:text-5xl font-bold text-surface-primary font-poppins">About IC3AI-2026</h2>
            <div className="w-24 h-1 bg-primary"></div>
          </div>
        </div>

        <div className="max-w-8xl mx-auto text-justify text-black">
          <div className="text-base md:text-lg font-roboto leading-relaxed mb-6">
            The Department of Computer Science and Engineering,
I.T.S Engineering College, Gr. Noida
is pleased to announce the International Conference on Computational Intelligence, Cybersecurity and Artificial Intelligence (IC3AI-2026).

The conference will be organized at I.T.S Engineering College, Gr. Noida.
IC3AI-2026 aims to provide a premier interdisciplinary platform for researchers, academicians, and professionals.
It seeks to promote the exchange of knowledge, ideas, and innovations in Artificial Intelligence, Cybersecurity, and Computational Intelligence.
          </div>

          <p className="text-base md:text-lg font-roboto leading-relaxed mb-10">
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
              className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-300"
            >
              Visit Springer Series - Lecture Notes in Networks and Systems
            </a>
          </div>

          <h3 className="text-2xl md:text-3xl font-bold text-surface-primary mb-8 font-poppins">Conference Highlights</h3>
          <ul className="space-y-4 mt-6">
            <li className="flex items-start gap-4 group hover:transform hover:translate-x-2 transition-transform duration-300">
              <span className="text-primary text-2xl">•</span>
              <span className="text-lg text-black group-hover:text-primary transition-colors duration-300 font-roboto">Keynote speeches by distinguished researchers and industry experts</span>
            </li>
            <li className="flex items-start gap-4 group hover:transform hover:translate-x-2 transition-transform duration-300">
              <span className="text-primary text-2xl">•</span>
              <span className="text-lg text-black group-hover:text-primary transition-colors duration-300 font-roboto">Peer-reviewed paper presentations</span>
            </li>
            <li className="flex items-start gap-4 group hover:transform hover:translate-x-2 transition-transform duration-300">
              <span className="text-primary text-2xl">•</span>
              <span className="text-lg text-black group-hover:text-primary transition-colors duration-300 font-roboto">Panel discussions on emerging trends</span>
            </li>
            <li className="flex items-start gap-4 group hover:transform hover:translate-x-2 transition-transform duration-300">
              <span className="text-primary text-2xl">•</span>
              <span className="text-lg text-black group-hover:text-primary transition-colors duration-300 font-roboto">Networking opportunities with global experts</span>
            </li>
            <li className="flex items-start gap-4 group hover:transform hover:translate-x-2 transition-transform duration-300">
              <span className="text-primary text-2xl">•</span>
              <span className="text-lg text-black group-hover:text-primary transition-colors duration-300 font-roboto">Publication opportunities in reputed journals</span>
            </li>
            <li className="flex items-start gap-4 group hover:transform hover:translate-x-2 transition-transform duration-300">
              <span className="text-primary text-2xl">•</span>
              <span className="text-lg text-black group-hover:text-primary transition-colors duration-300 font-roboto">Best paper awards and recognition</span>
            </li>
          </ul>
        </div>
        <div className="flex justify-center mt-12">
          <img
            src={springerLogo}
            alt="Springer Logo"
            className="w-64 h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
