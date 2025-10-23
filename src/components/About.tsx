import itsPhoto from "../assets/its-campus.webp";

const About = () => {
  return (
    <div className="py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div>
        
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        <div className="max-w-screen-lg mx-4 prose">
          <h1 className="pl-4 pr-4 mb-4 text-2xl font-extrabold leading-tight border-l-4 border-red-600 heading text-tw-prose-headings">
            About ITS Group of Institute
          </h1>
          <p className="mt-5 mb-5 text-justify">
            ITS - The Education Group, with its diversified presence across
            industries - including education, hospitality, medical, pharmacy,
            health care, wellness, legal, philanthropy and CSR - has been in a
            business leadership position for many decades. The company has
            undergone tremendous growth and has scaled up its operations in a
            big way over many years, in line with its global ambitions.
          </p>
          <img
            src="https://res.cloudinary.com/dzgfsbzh6/image/upload/v1754138061/samples/ITS_Educational_group_skvn8r.jpg"
            alt="Image"
          />
          <p className="mt-5"></p>
        </div>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        <div className="mx-2 prose max-w-none">
          <h1 className="pl-4 pr-4 mb-4 text-2xl font-extrabold leading-tight border-l-4 border-red-600 heading text-tw-prose-headings">
            About ITSEC
          </h1>
        <div className="flex flex-col items-start gap-8 md:flex-row">
            <div className="flex-1">
              <p className="text-justify">
               I.T.S Engineering College, located in Greater Noida, is a distinguished institution for Engineering and Management, founded by leading professionals committed to delivering high-quality, industry-focused education at an affordable cost. With a rich history spanning around three decades, the ITS Education Group has emerged as a key player in higher education in North India, operating nine institutes with more than 20,000 students and a dedicated staff of over 1,250. The group excels in various disciplines, including Information Technology, Engineering, Management, Dental, Pharmacy, and Physiotherapy. Established in 2006 under the visionary leadership of Chairman Dr. R.P. Chadha, ITS Engineering College holds NBA accreditation, showcasing its dedication to providing top-notch education. Approved by AICTE and affiliated with AKTU-Lucknow,

              <p className="mt-5 mb-5 text-justify">
            The college offers diverse programs, such as B. Tech in Civil, Computer Science & Engineering (CSE), CSE-Artificial Intelligence and Machine Learning, CSE-Data Science, Electronics and Communication Engineering, Electronics Engineering (VLSI Design and Technology), Electrical and Computer Engineering, Mechanical Engineering, as well as an MBA program in Marketing, Finance, Human Resource, Operations, International Business and Information Technology.
          </p>
              </p>
            </div>
            <div className="flex-shrink-0 md:w-96">
              <img
                src={itsPhoto}
                alt="ITS Engineering College Campus"
                className="object-cover w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
          <div className="p-6 mb-8 rounded-lg bg-gray-50 dark:bg-gray-800">
            <h3 className="mb-4 text-lg font-semibold text-tw-prose-headings">Few Highlights</h3>
            <ul className="pl-5 space-y-2 list-disc">
              <li>Part of 29-year old exceptional education legacy of ITS</li>
              <li>Approved Business Incubation Centre by DST, MSME and Govt. of India</li>
              <li>Pool of Illustrious faculty with Doctorates, IITians & NITians</li>
              <li>Technology based industrial collaboration via Skill Enhancement Centre (Apple iOS, SMC Pneumatics, National Instruments, Rockwell Automation, Software Testing, SYSCOM, Android Apps Development, R Systems and Softpro)</li>
              <li>NBA accreditation in B.Tech – ECE branch</li>
              <li>Outstanding placement record in B.Tech and MBA programs</li>
              <li>Strong and Resourceful network of over 5000 alumni</li>
              <li>Regular expert talks, national and international seminars and conferences with renowned speakers from Industry and academia</li>
              <li>State of Art Infrastructure</li>
            </ul>
          </div>
          
          <div className="p-6 mb-8 rounded-lg bg-gray-50 dark:bg-gray-800">
            <h3 className="mb-4 text-lg font-semibold text-tw-prose-headings">Latest Awards & Honors</h3>
            <ul className="pl-5 space-y-2 list-disc">
              <li>Ranked amongst top 151-300 band in NIRF Innovation ranking 2023 across pan India</li>
              <li>Sherpa EDU LEADER 2023 to honorable Vice Chairman Mr. Sohil Chadha by re:thinkindia for his visionary approach and dedication with an immense contribution to Entrepreneurship development, incubation, innovation, digitization nururing techno-managerial and paramedical education</li>
              <li>Honoured with the Collegedunia Excellence Award 2023 for its outstanding contributions to "Excellence in Engineering and Management Education."</li>
              <li>Ranked amongst top Five by CSR in all India ranking of "Outstanding Engineering Colleges of Excellence” in 2023</li>
              <li>Pan India highest ranking by Institution’s Innovation Council (IIC), Ministry of Education, Govt. of India in the last five years</li>
              <li>*4 Star in 2023 *4 Star in 2022 * 4 Star in 2021 * 5 Star in 2020 *3 Star in 2019</li>
              <li>Excellent ARIA Rank 2021 & ARIA Ranking 6-25 amongst 'Private Institutions in 2020</li>
              <li>Best Leadership Entrepreneur Kotler Award to honorable Vice Chairman Mr Sohil Chadha by Kotler Awards in 2020</li>
              <li>CSR Excellence in Education Award by Competition Success Review in 2020</li>
            </ul>
          </div>
          {/* <p className="mt-5 mb-5 text-justify">
            ITS Engineering College has established itself as a center of excellence in technical education,
            with a strong focus on research and innovation. The institution maintains high academic standards
            and provides students with opportunities for holistic development through various technical and
            cultural activities.
            top-notch education. The college, approved by AICTE and affiliated
            with AKTU-Lucknow, offers a diverse range of programs. These include
            B. Tech in Civil, Computer Science & Engineering (CSE), CSE with
            specializations in Artificial Intelligence and Machine Learning, and
            Data Science. Additionally, the college provides programs in
            Electronics and Communication Engineering, Electronics Engineering
            (VLSI Design and Technology), Electrical and Computer Engineering,
            Mechanical Engineering, and an MBA program.
          </p> */}
        </div>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        <div className="mx-2 prose max-w-none">
          <h1 className="pl-4 pr-4 mb-4 text-2xl font-extrabold leading-tight border-l-4 border-red-600 heading text-tw-prose-headings">
            About Department of Computer science
          </h1>
          <p className="mt-5 text-justify">
            The Computer Science & Engineering Department at ITSEC offers a UG program in Computer Science & Engineering is designed to equip individuals with the necessary computer skills to succeed in the industry, and provide practical knowledge to prepare them for professional readiness. The program is structured to cover both the theoretical foundations and latest developments in computing solutions. Throughout the program, CSE students will develop expertise in algorithm and software design, development, and testing, and will learn to create effective computing solutions that address various social, economic, and organizational domains. It also offers B. Tech in Artificial Learning and Machine Learning at ITS Engineering College is an undergraduate programme with advanced learning solutions imparting knowledge of advanced innovations like Machine Learning, often called Deep Learning and Artificial Intelligence. Apart from CSE and AIML, ITSEC offers B. Tech in the specialization of Data Science which is a rapidly growing field that involves the analytical technique of extracting usable information from a pool of data for the benefit of businesses. Corporations require this valuable data for their strategic planning, forecasting, fraud detection, and decision-making amongst many other uses.
          </p>
        </div>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        {/* About Conference Section
        <div className="max-w-screen-lg mx-4 prose">
          <h1 className="pl-4 pr-4 mb-4 text-2xl font-extrabold leading-tight border-l-4 border-red-600 heading text-tw-prose-headings">
            About ICAICS-2025
          </h1>
          <p className="mt-5 mb-5 text-justify">
            The International Conference on Artificial Intelligence and Cyber Security (ICAICS-2025) 
            is a premier forum for the presentation of new advances and research results in the fields 
            of Artificial Intelligence and Cyber Security. The conference will bring together leading 
            researchers, engineers and scientists in the domain of interest from around the world.
          </p>
          <p className="mb-5 text-justify">
            ICAICS-2025 aims to provide a platform for researchers and practitioners from both academia 
            and industry to meet and share cutting-edge development in the field. The conference 
            will feature keynote speeches by distinguished scholars, regular paper presentations, 
            and special sessions on emerging topics.
          </p>
          <div className="p-6 mb-8 rounded-lg bg-gray-50 dark:bg-gray-800">
            <h2 className="mb-4 text-xl font-semibold text-tw-prose-headings">Conference Highlights</h2>
            <ul className="pl-5 space-y-2 list-disc">
              <li>Keynote speeches by distinguished researchers and industry experts</li>
              <li>Peer-reviewed paper presentations</li>
              <li>Panel discussions on emerging trends</li>
              <li>Networking opportunities with global experts</li>
              <li>Publication opportunities in reputed journals</li>
              <li>Best paper awards and recognition</li>
            </ul>
          </div> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default About;