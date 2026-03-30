import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Working Student</h4>
                <h5>CrewLinQ GmbH, Berlin</h5>
              </div>
              <h5>Dec 2024 - Jan 2026</h5>
            </div>
            <p>
               At CrewLinQ GmbH, I worked as a Full Stack Working Student, contributing across testing, frontend and product quality in a fast-paced product environment. <br /><br />

               Tech Stack: Playwright, React Native, TypeScript, REST APIs, Material UI, PostgreSQL, Agile workflows <br /><br />

               What I worked on: <br /><br />
              • Built an automated testing setup using Playwright that significantly reduced manual QA effort. <br /><br />
              • Contributed to improving system reliability by identifying backend issues and supporting error handling. <br /><br />
              • Helped implement role-based access control (RBAC), ensuring reliable user access across the platform. <br /><br />
              • Supported the expansion of the product to mobile using React Native, helping maintain consistency across web and mobile platforms. <br /><br />
              • Collaborated regularly with developers, QA and product managers in an agile setup. 
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Frontend Engineer</h4>
                <h5>Ozone API, Pune</h5>
              </div>
              <h5>Apr 2023 - Aug 2024</h5>
            </div>
            <p>
              At Ozone API, I worked on client-facing financial dashboards used by global users, focusing on improving performance, usability and overall product reliability.<br /><br />

              This experience was a turning point for me, where I moved beyond just building UI to thinking about how frontend decisions impact real users.<br /><br />

              Tech Stack: React, TypeScript, REST APIs, Pug.js (migration), Storybook, Agile (Scrum)<br /><br />

              What I worked on: <br /><br />
              • Built and maintained frontend features using React and TypeScript for client-facing financial platforms. <br /><br />
              • Led the migration of the legacy system (Pug.js) to a modern React + TypeScript architecture, making the platform faster and more scalable.<br /><br />
              • Built a reusable component system using Storybook, helping standardize UI patterns and maintain features consistently. <br /><br />
              • Worked closely with backend services by integrating REST APIs and improving how data was handled on the frontend.<br /><br />
              • Collaborated with product, backend and QA teams to translate business requirements into reliable, user-facing features.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Frontend Engineer Intern</h4>
                <h5>Ozone API, Pune</h5>
              </div>
              <h5>Feb 2022 - Mar 2023</h5>
            </div>
            <p>
              At Ozone API, I started my journey as a Frontend Engineering Intern, where I got hands-on experience working on real product features and internal tools.<br /><br />

              This role helped me build a strong foundation in frontend development while understanding how production systems and teams operate.<br /><br />

              What I worked on:<br /><br />

              • Supported development of dashboards and internal tools used for product reporting.<br /><br />
              • Assisted in building data pipelines for analytics and reporting.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
