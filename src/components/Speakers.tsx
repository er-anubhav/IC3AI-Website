import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/pagination";
// @ts-ignore
import "swiper/css/navigation";

interface Speaker {
  name: string;
  title: string;
  institution: string;
  image: string;
  type: "National" | "International";
}

const speakers: Speaker[] = [
  {
    name: "Prof. (Dr.) S. K. Singh",
    title: "Vice Chancellor",
    institution: "Rajasthan Technical University, Kota",
    image: "https://res.cloudinary.com/dooi3sikb/image/upload/v1713452018/ConferenceAssets/gvxgxu0hevraexehrjx3.jpg",
    type: "National"
  },
  {
    name: "Dr. Akhilesh Tiwari",
    title: "Secretary IEEE and Associate Professor",
    institution: "IIIT Allahabad",
    image: "https://res.cloudinary.com/dooi3sikb/image/upload/v1710526987/ConferenceAssets/xh1ay7h3tovn6vttzcwn.jpg",
    type: "National"
  },
  {
    name: "Dr. Virender Ranga",
    title: "Associate Professor, Department of Information Technology",
    institution: "Delhi Technological University",
    image: "https://res.cloudinary.com/dooi3sikb/image/upload/v1713452019/ConferenceAssets/mpb5dwnyzjdrcghbkef0.jpg",
    type: "National"
  },
  {
    name: "Prof. (Dr.) P. Nagabhushan",
    title: "Vice-Chancellor",
    institution: "Vignan's Foundation for Science, Technology & Research, Andhra Pradesh",
    image: "https://res.cloudinary.com/dooi3sikb/image/upload/v1710526986/ConferenceAssets/irbpoz8ub3209wf4wjp5.jpg",
    type: "National"
  },
  {
    name: "Prof. (Dr.) Satish K. Singh",
    title: "Section Chair, IEEE UP Section",
    institution: "IIIT Allahabad",
    image: "https://res.cloudinary.com/dooi3sikb/image/upload/v1710528682/ConferenceAssets/n6q7ktwnnub0ommxgomd.jpg",
    type: "National"
  },
  {
    name: "Prof. (Dr.) Shaymaa R. Tahhan",
    title: "Laser and Optoelectronics Department",
    institution: "College of Engineering, Al-Nahrain University, Baghdad, Iraq",
    image: "https://res.cloudinary.com/dooi3sikb/image/upload/v1710528683/ConferenceAssets/yd7bayfsfws9uit52zmx.jpg",
    type: "International"
  },
  {
    name: "Prof. (Dr.) Anand Nayyar",
    title: "School of Computer Science",
    institution: "Faculty of Information Technology, Duy Tan University, Da Nang, Viet Nam",
    image: "https://res.cloudinary.com/dooi3sikb/image/upload/v1710528682/ConferenceAssets/l2cl874gzorwdjklangb.jpg",
    type: "International"
  },
  {
    name: "Dr. Sandeep Kajal",
    title: "Postdocotral Researcher",
    institution: "Department of Mechanical and Material Engineering, University of Western Ontario, Canada",
    image: "https://res.cloudinary.com/dooi3sikb/image/upload/v1710526986/ConferenceAssets/gnadmkcrpkfc0fvonpej.jpg",
    type: "International"
  },
  {
    name: "Dr. Ajay Beniwal",
    title: "Marie Curie Fellow",
    institution: "University of Glasgow, United Kingdom",
    image: "https://res.cloudinary.com/dooi3sikb/image/upload/v1710526986/ConferenceAssets/hvaxgucrjogkzmmelhbq.jpg",
    type: "International"
  },
  {
    name: "Prof. Dr. Neyara Radwan",
    title: "Associate Professor Industrial Engineering Dept.",
    institution: "AL MAAREFA UNIVERSITY, Saudi Arabia & Suez Canal University, Egypt",
    image: "https://res.cloudinary.com/dooi3sikb/image/upload/v1713452018/ConferenceAssets/evctl9ybkyy4xdha0sqk.jpg",
    type: "International"
  },
  {
    name: "Dr. Ahmed A. Elngar",
    title: "Associate Professor",
    institution: "Faculty of CS and AI, Beni-Suef University, Egypt",
    image: "https://res.cloudinary.com/dooi3sikb/image/upload/v1710526984/ConferenceAssets/rvtqaqd2gl7wupnw8j0a.jpg",
    type: "International"
  },
  {
    name: "Dr. Kashif Nisar",
    title: "Professor",
    institution: "Swinburne University of Technology, Sydney, Australia",
    image: "https://res.cloudinary.com/dooi3sikb/image/upload/v1710526984/ConferenceAssets/mlctgifpndbsn1p2e9sg.jpg",
    type: "International"
  },
  {
    name: "Dr. Ana Clarke",
    title: "Founder and CEO",
    institution: "AC SmartData",
    image: "https://res.cloudinary.com/dooi3sikb/image/upload/v1713452018/ConferenceAssets/ci1vwoyuhrum4ashujvn.jpg",
    type: "International"
  },
  {
    name: "Prof. Nada Ratković",
    title: "Assistant Professor",
    institution: "Department of Quantitative Methods, University Split",
    image: "https://res.cloudinary.com/dooi3sikb/image/upload/v1710526983/ConferenceAssets/dggqlawqezcvneess62a.jpg",
    type: "International"
  },
  {
    name: "Prof. (Dr.) Deepak Garg",
    title: "Vice Chancellor",
    institution: "SR University | Founder leadingindia.ai",
    image: "https://res.cloudinary.com/dooi3sikb/image/upload/v1710526986/ConferenceAssets/sbbsc4xwoc1l9qogy9tr.jpg",
    type: "National"
  },
  {
    name: "Prof. (Dr.) Asheesh K. Singh",
    title: "Professor EE Department",
    institution: "MNNIT, Allahabad / Immediate Past Section Chair, IEEE UP Section",
    image: "https://res.cloudinary.com/dooi3sikb/image/upload/v1710526985/ConferenceAssets/wzcnjyljg4jigusvcmhx.jpg",
    type: "National"
  },
  {
    name: "Prof. (Dr.) Prabhakar Tiwari",
    title: "Professor",
    institution: "MMMUT, Gorakhpur/ Secretary, IEEE U.P. Section",
    image: "https://res.cloudinary.com/dooi3sikb/image/upload/v1710526985/ConferenceAssets/ww12ga3i21esptn3ij7s.jpg",
    type: "National"
  },
  {
    name: "Prof. (Dr.) Malay Kishore Dutta",
    title: "Director, Centre for Artificial Intelligence & Dean Student Research",
    institution: "Amity University, Noida, India",
    image: "https://res.cloudinary.com/dooi3sikb/image/upload/v1710526985/ConferenceAssets/u1sr91reu5ae1eqnjtmy.jpg",
    type: "National"
  },
  {
    name: "Prof. (Dr.) Neetesh Purohit",
    title: "Director",
    institution: "SGSITS, Indore",
    image: "https://res.cloudinary.com/dooi3sikb/image/upload/v1710526984/ConferenceAssets/lcs6eejonbemwbeafix8.jpg",
    type: "National"
  },
  {
    name: "Prof. (Dr.) N. Badal",
    title: "Director",
    institution: "REC, Bijnor (U.P.), India",
    image: "https://res.cloudinary.com/dooi3sikb/image/upload/v1710526984/ConferenceAssets/zog1nzfyisblpai12ibq.jpg",
    type: "National"
  },
  {
    name: "Prof. (Dr.) J Ramkumar",
    title: "Professor",
    institution: "IIT Kanpur India, Ex Chair of IEEE UP",
    image: "https://res.cloudinary.com/dooi3sikb/image/upload/v1710526984/ConferenceAssets/bysze53ht5kdi2hwicbo.jpg",
    type: "National"
  },
  {
    name: "Prof. (Dr.) Rajiv Saxena",
    title: "Vice Chancellor",
    institution: "Jaypee University, Anoopshahr",
    image: "https://res.cloudinary.com/dooi3sikb/image/upload/v1710526983/ConferenceAssets/agwdve3ak2bmgdfujfj0.jpg",
    type: "National"
  }
];

const Speakers = () => {
  return (
    <div className="select-none py-16 relative overflow-hidden" id="speakers">
      {/* Red gradient borders */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#991b1b] to-transparent"></div>
      <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#991b1b] to-transparent"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 relative">
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1/4 h-1 bg-gradient-to-r from-[#991b1b] to-transparent"></div>
          <h2 className="text-4xl font-bold text-surface-primary mb-4 animate-[fadeIn_1s_ease-in]">Hon'ble Speakers</h2>
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1/4 h-1 bg-gradient-to-l from-[#991b1b] to-transparent"></div>
        </div>

        <div className="w-full bg-surface rounded-lg shadow-2xl">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="p-8"
          >
            {speakers.map((speaker, index) => (
              <SwiperSlide key={index} className="group">
                <div className="p-4 transform transition-transform duration-300 hover:scale-105">
                  <div className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#991b1b]">
                    <div className="relative">
                      <img
                        src={speaker.image}
                        alt={`${speaker.name}'s Photo`}
                        className="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className={`absolute top-4 right-4 ${
                        speaker.type === "National" 
                          ? "bg-amber-600/90" 
                          : "bg-blue-800/90"
                        } text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm animate-[fadeIn_0.5s_ease-in]`}>
                        {speaker.type} Speaker
                      </div>
                    </div>
                    <div className="p-4 backdrop-blur-sm">
                      <h3 className="font-bold text-lg text-surface-primary mb-1 line-clamp-1">
                        {speaker.name}
                      </h3>
                      <p className="text-surface-secondary text-sm mb-1 line-clamp-2">
                        {speaker.title}
                      </p>
                      <p className="text-surface-tertiary text-xs line-clamp-2">
                        {speaker.institution}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="text-center py-8">
            <button 
              onClick={() => window.open('/all-speakers', '_blank')}
              className="inline-flex items-center px-6 py-3 border-2 border-[#991b1b] text-base font-medium rounded-md text-white bg-[#991b1b] hover:bg-transparent hover:text-[#991b1b] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 group"
            >
              View All Speakers
              <svg 
                className="ml-2 -mr-1 w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speakers;