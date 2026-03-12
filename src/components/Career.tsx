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
                <h4>Senior MEAN Stack Developer</h4>
                <h5>SMKC International</h5>
              </div>
              <h3>2025 - 2026</h3>
            </div>
            <p>
              Built scalable logistics platforms using Angular, NestJS, GraphQL and MongoDB
              supporting $3M+ in annual trade volume. Implemented JWT/OAuth2 security, Redis
              caching, and optimized data pipelines achieving sub-second response times and
              cutting manual processing time by 45%.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Software Engineer</h4>
                <h5>Neo Soft Technologies</h5>
              </div>
              <h3>2020 - 2023</h3>
            </div>
            <p>
              Developed enterprise FinTech applications using Angular, Node.js, NestJS and
              MongoDB supporting 50,000+ concurrent users and enabling $2M+ in additional
              annual revenue. Designed GraphQL APIs, enforced TDD cutting post-release defects
              by 40%, and mentored a 12-member engineering team.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>Aurus IT Solutions</h5>
              </div>
              <h3>2018 - 2020</h3>
            </div>
            <p>
              Built full-stack applications using Angular, Node.js, Express and MongoDB
              achieving 50% faster load times. Implemented GraphQL APIs, JWT/OAuth2 security
              reducing vulnerability exposure by 55%, and automated data pipelines eliminating
              70% of manual reporting effort.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Developer</h4>
                <h5>Revitech Info-solutions</h5>
              </div>
              <h3>2017 - 2018</h3>
            </div>
            <p>
              Developed Angular UI components and Node.js/Express backend services with MongoDB
              and GraphQL APIs, boosting client management efficiency by 45% and cutting query
              retrieval time by 35%. Introduced CI/CD-ready practices and mentored peers on
              Angular architecture and MongoDB aggregation.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Career;
