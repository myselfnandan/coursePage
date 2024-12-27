import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/*header section*/}
    <header>
      <div>
        <p id="companyName">Code<span>Latent</span></p>
      </div>
      <div class="rightHeader">
        <a>Home</a>
        <a>About</a>
        <a>Reach Out</a>
        <button>Get Started</button>
      </div>
    </header>

    {/*----main section-----*/}

    <main>
      <h2>DSA Mastery: Cracking the Code</h2>
      <p>"Master the core concepts of Data Structures and Algorithms (DSA) through hands-on learning and interactive problem-solving. This bootcamp is designed to build a strong foundation in DSA, essential for excelling in technical interviews and solving real-world coding challenges. With expert-led sessions, live coding exercises, and algorithmic problem sets, you'll learn to write efficient, scalable, and optimized code."</p>

      {/*----Course Details-----*/}
      <div>
        <ul>
          <h4>Key Highlights :</h4>
          <li>Comprehensive coverage of fundamental and advanced DSA topics.</li>
          <li>Interactive coding sessions with real-world problem scenarios.</li>
          <li>Focused preparation for technical interviews at top tech companies.</li>
          <li>Build strong algorithmic thinking and problem-solving skills.</li>
          <li>Personalized mentorship and progress tracking.</li>
          <li>Dedicated manager.</li>
          <li>Doubt resolutions within a min.</li>
          <li>Instructors and mentors from industries leading companies.</li>
          <li>Course Completion Certificate.</li>
        </ul>  
          <ol>
            <h4>The Importance of DSA for Aspiring Software Developers</h4>
            <p>Data Structures and Algorithms (DSA) are the backbone of software development, enabling developers to solve problems efficiently and build optimized solutions. Here's why mastering DSA is crucial:</p>
            <li><span>Problem-Solving Skills:</span> DSA trains you to approach problems systematically, breaking them into smaller, manageable parts and finding efficient solutions.</li>
            <li><span>Efficient Code: </span>Understanding DSA helps in writing code that runs faster and uses fewer resources, which is critical in real-world applications.</li>
            <li><span>Technical Interviews:</span> DSA is a core component of coding interviews for software development roles. Companies use it to evaluate your logical thinking and coding proficiency.</li>
            <li><span>Building Scalable Systems:</span> Knowledge of DSA is essential for designing systems that can handle large amounts of data and user interactions, ensuring scalability and performance.</li>
            <li><span>Versatility:</span> DSA concepts apply across different programming languages and domains, making you a versatile developer.</li>
          </ol>
          <p>Mastering DSA not only opens doors to top tech companies but also lays the foundation for a successful and impactful software development career.</p>
      </div>
       
       <h3>Project Building After Completing a DSA Course</h3>
       <div>
       <p>Building projects after completing a Data Structures and Algorithms (DSA) course helps solidify your understanding and showcases your problem-solving skills to potential employers. Here’s a roadmap for project building:</p>
       <ol id="ProjectInfo">
        <li>Hands-On Learning</li>
        <ul>
          <li>Build real-world projects alongside mastering Data Structures and Algorithms.</li>
          <li>Apply theoretical concepts to practical challenges from day one.</li>
        </ul>
        <li>Step-by-Step Guidance</li>
        <ul>
          <li>Learn how to plan, design, and implement projects with mentorship from industry experts.</li>
          <li>Each project includes clear instructions, best practices, and detailed feedback.</li>
        </ul>
        <li>Portfolio-Worthy Projects</li>
        <ul>
          <li>Graduate with a portfolio of impressive projects that showcase your coding skills to potential employers.</li>
        </ul>
        <li>Industry-Relevant Topics</li>
        <ul>
          <li>Topics include search engines, scheduling systems, pathfinding visualizers, and more.
          </li>
          <li>Projects tailored to mimic challenges faced by software developers in the industry.</li>
        </ul>
        <li>Collaborative Learning</li>
        <ul>
          <li>Work on group projects to improve teamwork and communication skills.</li>
          <li>Participate in peer reviews to learn from others' perspectives.</li>
        </ul>
        <li>Career-Boosting Skills</li>
        <ul>
          <li>Gain experience in solving end-to-end problems, preparing you for coding interviews and development roles.</li>
          <li>Develop project management and debugging expertise alongside coding skills.</li>
        </ul>
        <li>Continuous Support</li>
        <ul>
          <li>1:1 mentorship and project-specific Q&A sessions to ensure no one is left behind.</li>
          <li>Regular checkpoints to monitor progress and provide assistance.
          </li>
        </ul>
       </ol>
       </div>
       <button>Enroll Now</button>
    </main>

    {/*----footer section-----*/}

    <footer>
      <p>Connect Us</p>
      <div>
      <a class="footerLogo" href='https://www.instagram.com/codelatent?igsh=d24zcHo0ODB1MG1l' target='_blank'>
        <img src="sources\insta.png" alt="Instagram"/>
      </a>

      <a href='' target='_blank'>
        <img src="sources/gmail.png" alt="Instagram"/>
      </a>

      <a href='' target='_blank'>
        <img src="sources\linkedin.png" alt="Instagram"/>
      </a>

      <a href='' target='_blank'>
        <img src="sources\twitter.png" alt="Instagram"/>
      </a>
      </div>
      <p>© 2024 codelatent.com</p>
    </footer>
    </>
  )
}

export default App
