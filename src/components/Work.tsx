import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Work = () => {
  useGSAP(() => {
  let translateX: number = 0;

  function setTranslateX() {
    const box = document.getElementsByClassName("work-box");
    const rectLeft = document
      .querySelector(".work-container")!
      .getBoundingClientRect().left;
    const rect = box[0].getBoundingClientRect();
    const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
    let padding: number =
      parseInt(window.getComputedStyle(box[0]).padding) / 2;
    translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
  }

  setTranslateX();

  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".work-section",
      start: "top top",
      end: `+=${translateX}`, // Use actual scroll width
      scrub: true,
      pin: true,
      id: "work",
    },
  });

  timeline.to(".work-flex", {
    x: -translateX,
    ease: "none",
  });

  // Clean up (optional, good practice)
  return () => {
    timeline.kill();
    ScrollTrigger.getById("work")?.kill();
  };
}, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
            <div className="work-box">
              <div className="work-info">
                <div className="work-title">
                  <h3>01</h3>

                  <div>
                    <h4>SmolBrain - AI Chrome Extension</h4>
                    <p>AI-powered extension that simplifies complex web content in real time</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>
                  • Built a Chrome extension that generates clear, real-time explanations of webpage content using AI. <br /><br />
                  • Designed multiple explanation modes through prompt engineering, allowing users to adjust how content is simplified <br /><br />
                  • Published on the Chrome Web Store - Download Here <br /><br />                  
                  • GitHub Link <br /><br />                  

                </p>
              </div>
              {/* <WorkImage image="/images/placeholder.webp" alt="" /> */}
            </div>

            <div className="work-box">
              <div className="work-info">
                <div className="work-title">
                  <h3>02</h3>

                  <div>
                    <h4>Text2SQL - Natural Language to Query System</h4>
                    <p>Making databases accessible using AI</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>
                  • Built an AI-powered system that allows users to query databases using natural language and get instant insights. <br /><br />          
                  • Designed an end-to-end pipeline that converts user queries into SQL, executes them and returns meaningful results. <br /><br />          
                  • Developed a chat-based interface using Streamlit, making data exploration intuitive and conversational. <br /><br />          
                  • Implemented session management and context handling to support continuous user queries. <br /><br />                  
                  • GitHub Link <br /><br />            

                </p>
              </div>
              {/* <WorkImage image="/images/placeholder.webp" alt="" /> */}
            </div>

            <div className="work-box">
              <div className="work-info">
                <div className="work-title">
                  <h3>03</h3>

                  <div>
                    <h4>Bias & Fairness Audit</h4>
                    <p>Analyzing and improving fairness in predictive models</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>
                  • Evaluated predictive models using fairness metrics (Disparate Impact, Treatment, Mistreatment) <br /><br /> 
                  • Built analysis tools in Python to measure bias in loan approval models <br /><br /> 
                  • Presented results in interpretable format for stakeholders <br /><br />                  
                  • GitHub Link <br /><br />                  

                </p>
              </div>
              {/* <WorkImage image="/images/placeholder.webp" alt="" /> */}
            </div>

            <div className="work-box">
              <div className="work-info">
                <div className="work-title">
                  <h3>04</h3>

                  <div>
                    <h4>Project Name</h4>
                    <p>Category</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>Javascript, TypeScript, React</p>
              </div>
              {/* <WorkImage image="/images/placeholder.webp" alt="" /> */}
            </div>

            <div className="work-box">
              <div className="work-info">
                <div className="work-title">
                  <h3>05</h3>

                  <div>
                    <h4>Project Name</h4>
                    <p>Category</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>Javascript, TypeScript, React</p>
              </div>
              {/* <WorkImage image="/images/placeholder.webp" alt="" /> */}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
