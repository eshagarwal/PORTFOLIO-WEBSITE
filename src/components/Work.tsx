import "./styles/Work.css";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import WorkImage from "./WorkImage";

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
                    <h4>Video Understanding and Q\&A System</h4>
                    <p>Vision-Language Models</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>
                  • Designed a video Q\&A system by integrating video captioning with a chatbot using a Retrieval-Augmented Generation (RAG) pipeline. <br /><br />
                  • Converted video into time-based caption chunks and stored them with timestamps to enable efficient search instead of reprocessing the video. <br /><br />
                  • Implemented semantic search using embeddings (embeddinggemma) and ChromaDB to retrieve relevant video segments based on user queries. <br /><br />
                  • Handled challenges like memory limits, model hallucinations, and Colab environment issues by using quantized models, prompt grounding, and persistent storage (Google Drive). <br /><br />                  
                  • <u><a href="https://github.com/eshagarwal/ComputerVisionVideoProblems/blob/master/Solution3/Coding_Challenge_3_Video_Caption_Chatbot.ipynb">GitHub Link</a></u> <br /><br />                  
                </p>
              </div>
              {/* <WorkImage image="/images/placeholder.webp" alt="" /> */}
            </div>

            <div className="work-box">
              <div className="work-info">
                <div className="work-title">
                  <h3>02</h3>

                  <div>
                    <h4>Video Captioning</h4>
                    <p>Vision-Language Models (Hugging Face)</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>
                  • Built and evaluated a video captioning system using a lightweight Vision-Language Model (SmolVLM) with Hugging Face Transformers. <br /><br />
                  • Compared different open-source VLMs and selected the best one based on GPU limits, performance, and caption quality. <br /><br />
                  • Solved challenges in capturing video flow by using uniform frame sampling and optimizing model settings (FP16, memory usage) to get better captions with limited resources. <br /><br />
                  • Evaluated caption quality across different frame sampling strategies and prompt settings. <br /><br /> 
                  • <u><a href="https://github.com/eshagarwal/ComputerVisionVideoProblems/blob/master/Solution1/Coding_Challenge_1_Video_Captioning_1.ipynb">GitHub Link</a></u> <br /><br />                  
                </p>
              </div>
              {/* <WorkImage image="/images/placeholder.webp" alt="" /> */}
            </div>

            <div className="work-box">
              <div className="work-info">
                <div className="work-title">
                  <h3>03</h3>

                  <div>
                    <h4>AI Face Analyzer</h4>
                    <p>Multi-Task Computer Vision System</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>
                  • Built a multi-task computer vision system using PyTorch to predict age, gender, and ethnicity from face images in real-time. <br /><br />
                  • Used a shared MobileNetV3 backbone to replace multiple models, reducing computation cost and improving inference speed. <br /><br />
                  • Developed an end-to-end pipeline with OpenCV for face detection and preprocessing, combined with PyTorch for training and inference. <br /><br />
                  • Trained and evaluated the model on the UTKFace dataset, ensuring reliable performance for real-time applications. <br /><br /> 
                  • <u><a href="https://github.com/eshagarwal/face-analyzer">GitHub Link</a></u> <br /><br />                  
                </p>
              </div>
              {/* <WorkImage image="/images/placeholder.webp" alt="" /> */}
            </div>

            <div className="work-box">
              <div className="work-info">
                <div className="work-title">
                  <h3>04</h3>

                  <div>
                    <h4>Human-in-the-Loop AI Decision System</h4>
                    <p>XDesign Club × Superchat × Lovable Hackathon</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>
                  • Identified the limitation of binary approval flows in AI systems, where business users lack context and control when approving high-stakes actions (e.g., refunds, upgrades). <br /><br />
                  • Designed an evaluation-aware human-in-the-loop AI system enabling decision-makers to validate AI recommendations through contextual insights, with feedback loops for continuous model improvement. <br /><br />
                  • Developed a mobile-first interface focused on explainability and usability, incorporating real-time feedback loops where human decisions are reintegrated to improve system behavior aligning with responsible AI principles. <br /><br />
                  • <u><a href="https://approve-ai-play.lovable.app/">Prototype Link</a></u> <br /><br />                  
                </p>
              </div>
              {/* <WorkImage image="/images/placeholder.webp" alt="" /> */}
            </div>

            <div className="work-box">
              <div className="work-info">
                <div className="work-title">
                  <h3>05</h3>

                  <div>
                    <h4>AI Booking Agentic System</h4>
                    <p>Superchat × Needle Builder's Night Project</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>
                  • Manual handling of booking requests led to delays, errors, and missed appointments due to manual data extraction, availability checks and replies. <br /><br />
                  • Collaborated to build an AI-driven agentic system that processes natural language booking requests, extracts structured data, and coordinates actions across external systems (availability checks, confirmations). <br /><br />
                  • Implemented an LLM-powered pipeline using prompt engineering, API orchestration, and webhook-based workflows, demonstrating real-world deployment of conversational AI agents in task automation scenarios. <br /><br />
                  • <u><a href="https://needle.app/workflow-templates/superchat-booking-to-sheets">Workflow Link</a></u> <br /><br />                  
                </p>
              </div>
              {/* <WorkImage image="/images/placeholder.webp" alt="" /> */}
            </div>

            <div className="work-box">
              <div className="work-info">
                <div className="work-title">
                  <h3>06</h3>

                  <div>
                    <h4>AI-Powered Research Study Notes Automation</h4>
                    <p>AI Automation</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>
                  • Self-learning often requires significant time spent searching, reading, and organizing information across multiple sources, reducing time available for actual learning. <br /><br />
                  • Designed an autonomous AI system that performs multi-step research, synthesizes information, and generates structured outputs, simulating intelligent data processing pipelines. <br /><br />
                  • Integrated multiple external services (web search, Google Sheets, Notion) into a coordinated workflow with parallel agent execution, showcasing scalable AI-driven data integration and transformation. <br /><br />
                  • <u><a href="https://needle.app/workflow-templates/generate-study-notes-in-notion">Workflow Link</a></u> <br /><br />                  
                </p>
              </div>
              {/* <WorkImage image="/images/placeholder.webp" alt="" /> */}
            </div>

            <div className="work-box">
              <div className="work-info">
                <div className="work-title">
                  <h3>07</h3>

                  <div>
                    <h4>SmolBrain - AI Chrome Extension</h4>
                    <p>AI-powered extension that simplifies complex web content in real time</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>
                  • Built a Chrome extension that generates clear, real-time explanations of webpage content using AI. <br /><br />
                  • Designed multiple explanation modes through prompt engineering, allowing users to adjust how content is simplified <br /><br />
                  • Published on the Chrome Web Store - <u><a href="https://chromewebstore.google.com/detail/jhkpgjobmoamadofcghfeedpclbmappi?utm_source=item-share-cb">Download Here</a></u> <br /><br />                  
                  • <u><a href="https://github.com/eshagarwal/SmolBrain_Chrome-extension">GitHub Link</a></u> <br /><br />                  

                </p>
              </div>
              {/* <WorkImage image="/images/placeholder.webp" alt="" /> */}
            </div>

            <div className="work-box">
              <div className="work-info">
                <div className="work-title">
                  <h3>08</h3>

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
                  • <u><a href="https://github.com/eshagarwal/SmartBI-AI-Powered_Self-Service_Business_Intelligence_System">GitHub Link</a></u> <br /><br />            

                </p>
              </div>
              {/* <WorkImage image="/images/placeholder.webp" alt="" /> */}
            </div>

            <div className="work-box">
              <div className="work-info">
                <div className="work-title">
                  <h3>09</h3>

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
                  • <u><a href="https://eshagarwal.github.io/Ethical-Analysis-of-Loan-Approval-Dataset-Ethical-Issues-of-AI/">Deployed Notebook Link</a></u> <br /><br />
                  • <u><a href="https://github.com/eshagarwal/Ethical-Analysis-of-Loan-Approval-Dataset-Ethical-Issues-of-AI">GitHub Link</a></u>
                  <br /><br />                  

                </p>
              </div>
              {/* <WorkImage image="/images/placeholder.webp" alt="" /> */}
            </div>

            {/* <div className="work-box">
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
            {/* </div> */}

            {/* <div className="work-box">
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
              </div> */}
              {/* <WorkImage image="/images/placeholder.webp" alt="" /> */}
            {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Work;
