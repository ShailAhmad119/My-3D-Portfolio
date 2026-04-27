import "./styles/Career.css";

const careers = [
  {
    role: "Full-Stack Developer",
    company: "Freelance / Personal Projects",
    period: "2025—Now",
    description:
      "Built and deployed 4+ full-stack web applications using React, Node.js, Express.js, MongoDB Atlas, and Tailwind CSS. Integrated AI APIs into production apps, automating workflows and reducing manual processing time significantly.",
  },
  {
    role: "Graphic Designer",
    company: "Freelance",
    period: "2022—Now",
    description:
      "Designed brand identities, marketing materials, and digital content for clients using Adobe Photoshop, Illustrator, and InDesign. Earned NSDC Certification as Assistant Editor from University of Kashmir.",
  },
  {
    role: "Mathematics Instructor",
    company: "Private Tutor",
    period: "2020—Now",
    description:
      "Teaching Mathematics to 20+ secondary and higher secondary students with consistent grade improvements. Developed structured teaching frameworks — analytical thinking and logic skills applied directly to software engineering.",
  },
];

const Career = () => {
  return (
    <div className="career-section section-container" id="career">
      <div className="career-container">
        <h2>
          My <span>Experience</span>
        </h2>
        <div className="career-list">
          {careers.map((item, index) => (
            <div className="career-item" key={index}>
              <div className="career-left">
                <h3>{item.role}</h3>
                <p className="career-company">{item.company}</p>
              </div>
              <div className="career-middle">
                <h2>{item.period}</h2>
              </div>
              <div className="career-right">
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;