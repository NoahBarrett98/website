// App.js
import React from 'react';
import './index.css';

function App() {
  return (
    // <div className="squiggly-background">
    //   <img src="PXL_20231017_143911920.PORTRAIT.jpg" alt="ME!" className="max-w-sm w-full h-auto mb-4 rounded-lg" />  
    //   <div className="flex items-center justify-center h-screen">
    //     <div className="bg-white p-8 overflow-auto max-w-xl w-full">
    //       <h1 className="font-mono text-2xl font-bold text-gray-800">Hey, I am Noah!</h1>
    //       <p className="font-mono text-gray-600 text-xl leading-relaxed mt-8">
    //         I am currently a Data Scientist at <a href="https://radformation.com">Radformation</a>, and I am excited by all things AI.
    //         <br/>
    //         <br/>
    //         Some projects I've worked on include:  <br/>
    //         <a href="https://www.saltwire.com/nova-scotia/communities/colchester-county/tatamagouches-noah-barrett-building-robots-and-an-appreciation-for-ai-at-st-fx-100574083/">Building simple robots with DRL on board,</a><br/>
    //         <a href="https://www.oajaiml.com/uploads/archivepdf/90731167.pdf">Developing Augmentation HPO methods for vision-based self-supervised learning, </a><br/>
    //         <a href="https://www.mcpdigitalhealth.org/article/S2949-7612(24)00100-7/fulltext">Training vision models for the prognosis and diagnosis of brain abnormalities in infants.</a>
    //       </p>
    //     </div>
    //   </div>
    // </div>
    <div className="squiggly-background flex flex-col items-center justify-center min-h-screen space-y-4">
      
  {/* <!-- Image --> */}
  <img 
    src="PXL_20231017_143911920.PORTRAIT.jpg" 
    alt="ME!" 
    className="max-w-sm w-full h-auto"
  />  

  {/* <!-- Text Box --> */}
  <div className="bg-white p-8 overflow-auto max-w-4xl w-full">
    <h1 className="font-mono text-2xl font-bold text-gray-800">Hi, I'm Noah :)</h1>
    <p className="font-mono text-gray-600 text-xl leading-relaxed mt-8">
      I am currently a Data Scientist at 
      <a href="https://radformation.com" className="hover:font-bold"> Radformation</a>, and I am excited by all things AI. I live in Halifax NS, where I am currently trying to build a co-working community called <a href="https://lu.ma/CollectHalifax" className="hover:font-bold">Collect.</a> 
      <br />
      <br />
      Some projects I've worked on include:  
      <br />
      <a href="https://www.mcpdigitalhealth.org/article/S2949-7612(24)00100-7/fulltext" className="hover:font-bold"> Training vision models for the prognosis and diagnosis of brain abnormalities in infants.</a>
      <br />
      <a href="https://www.oajaiml.com/uploads/archivepdf/90731167.pdf" className="hover:font-bold"> Developing Augmentation HPO methods for vision-based self-supervised learning,</a>
      <br />
      <a href="https://www.saltwire.com/nova-scotia/communities/colchester-county/tatamagouches-noah-barrett-building-robots-and-an-appreciation-for-ai-at-st-fx-100574083/" className="hover:font-bold"> Building simple robots with DRL on board</a>
    </p>
  </div>

  <div className="bg-white p-6 max-w-xl w-full">
    <h2 className="font-mono text-xl font-bold text-gray-800">Connect with me:</h2>
    <ul className="mt-4 space-y-2">
      <li>
        <a href="https://github.com/NoahBarrett98" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:font-bold">
          Github
        </a>
      </li>
      <li>
        <a href="https://x.com/noahbarrettx" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:font-bold">
          X (formerly Twitter)
        </a>
      </li>
      <li>
        <a href="https://linkedin.com/in/noah-j-barrett" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:font-bold">
          LinkedIn
        </a>
      </li>
      <li>
        <a href="https://scholar.google.com/citations?hl=en&user=fLbGbtMAAAAJ" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:font-bold">
          Google Scholar
        </a>
      </li>
    </ul>
  </div>
</div>


    // {/* <p className="text-gray-600 mt-8">I am currently a Data Scientist at Radformation, and I am excited by all things AI. </p>
    //     <p className="text-gray-600 mt-8">In the past I've built simple robots with DRL on board to interact with eachother and their environment,  </p>
    //     <p className="text-gray-600 mt-8">In the past I've built simple robots with DRL on board to interact with eachother and their environment, </p>
    //     <p className="text-gray-600 mt-8">developed Augmentation HPO methods for vision-based self-supervised learning</p>
    //     <p className="text-gray-600 mt-8">and helped train vision models for the prognosis and diagnosis of brain abnormalities in infants. </p> */}
    //   {/* <div className="items-center justify-center">
    //     <div className="bg-white p-8 rounded shadow-md">
    //       <h1 className="text-2xl font-bold text-gray-800">Hey, I'm Noah!</h1>
    //       <p className="text-gray-600 mt-8">I am currently a Data Scientist at Radformation, and I am excited by all things AI. 
    //                                         In the past I've built simple robots with DRL on board to interact with eachother and their environment, 
    //                                         developed Augmentation HPO methods for vision-based self-supervised learning, 
    //                                         and helped train vision models for the prognosis and diagnosis of brain abnormalities in infants. 
    //                                         </p>
    //     </div>
    //   </div> */}
    // </div>
  );
}



export default App;