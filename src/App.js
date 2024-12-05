// App.js
import React from 'react';
import './index.css';

function App() {
  return (
    <div className="squiggly-background items-center justify-center flex flex-col space-y-4 p-4">
        <div class="flex-1 h-[33vh] flex items-center justify-center">
          <img 
            src="PXL_20231017_143911920.PORTRAIT.jpg" 
            alt="ME!" 
            className="max-h-full object-contain"
          />  
        </div>
        <div class="bg-white p-4 max-w-2xl w-full">
            <h1 className="font-mono text-2xl font-bold text-gray-800">Hi, I'm Noah :)</h1>
            <p className="font-mono text-gray-600 text-md leading-relaxed mt-8">
              I am currently a Data Scientist at 
              <a href="https://radformation.com" className="hover:font-bold"> Radformation</a>, and I am excited by all things AI. I live in Halifax NS, where I am currently trying to build a co-working community called <a href="https://lu.ma/CollectHalifax" className="hover:font-bold">Collect.</a> 
              <br />
              <br />
              Some projects I've worked on include:  
              <br />
              <a href="https://www.mcpdigitalhealth.org/article/S2949-7612(24)00100-7/fulltext" className="hover:font-bold"> Training vision models for the prognosis and diagnosis of brain abnormalities in infants</a>,
              <br />
              <a href="https://www.oajaiml.com/uploads/archivepdf/90731167.pdf" className="hover:font-bold"> Developing Augmentation HPO methods for vision-based self-supervised learning</a>, and
              <br />
              <a href="https://www.saltwire.com/nova-scotia/communities/colchester-county/tatamagouches-noah-barrett-building-robots-and-an-appreciation-for-ai-at-st-fx-100574083/" className="hover:font-bold"> Building simple robots with DRL on board</a>.
            </p>
        </div>
        <div class="p-4 bg-white max-w-sm w-full">
          <h2 className="font-mono text-xl font-bold text-gray-800">Connect with me:</h2>
          <ul className="mt-4">
            <li>
              <a href="https://github.com/NoahBarrett98" target="_blank" rel="noopener noreferrer" className="font-mono text-gray-600 text-md leading-relaxed mt-6 hover:font-bold">
                Github
              </a>
            </li>
            <li>
              <a href="https://x.com/noahbarrettx" target="_blank" rel="noopener noreferrer" className="font-mono text-gray-600 text-md leading-relaxed mt-6 hover:font-bold">
                X (formerly Twitter)
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/in/noah-j-barrett" target="_blank" rel="noopener noreferrer" className="font-mono text-gray-600 text-md leading-relaxed mt-6 hover:font-bold">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://scholar.google.com/citations?hl=en&user=fLbGbtMAAAAJ" target="_blank" rel="noopener noreferrer" className="font-mono text-gray-600 text-md leading-relaxed mt-6 hover:font-bold">
                Google Scholar
              </a>
            </li>
          </ul>
      </div>
    </div>
  );
}



export default App;