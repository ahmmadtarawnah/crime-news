import React from 'react';
import { AlertTriangle } from 'lucide-react';
import NewsTicker  from "../Component/Homecomponent/NewsTicker ";

const AboutUs = () => {
  return (
    <div className="bg-white text-black min-h-screen" style={{ '--primary-color': '#61090b' }}>
      {/* Crime scene tape header */}
      
      {/* News Ticker */}
      <div className="w-full py-2" style={{ backgroundColor: 'var(--primary-color)' }}>
        <NewsTicker />
      </div>
      
      <div className="max-w-6xl mx-auto p-6">
        <div className="text-center mb-12 mt-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <div className="text-6xl font-bold tracking-tighter transition-transform duration-300 hover:scale-105 hover:text-gray-800 cursor-pointer">
              <span className="font-extrabold">CRIME</span>
              <span className="font-light">GAZETTE</span>
            </div>
          </h1>
          <div className="h-1 w-32" style={{ backgroundColor: 'var(--primary-color)' }}></div>
          <p className="text-xl text-gray-700 italic">Because justice begins with information</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="bg-gray-100 bg-opacity-80 p-6 rounded-lg border-l-4" style={{ borderColor: 'var(--primary-color)' }}>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <span className="text-var(--primary-color) mr-2">01.</span> Our Mission
            </h2>
            <p className="text-gray-800">
              In a world of headlines and soundbites, we dig deeper. Crime News Network was founded on the principle that 
              the public deserves comprehensive coverage of criminal justice—not just sensational stories, but the complex 
              realities behind them. We illuminate the shadows where truth hides.
            </p>
          </div>
          
          <div className="bg-gray-100 bg-opacity-80 p-6 rounded-lg border-l-4" style={{ borderColor: 'var(--primary-color)' }}>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <span className="text-var(--primary-color) mr-2">02.</span> Our Approach
            </h2>
            <p className="text-gray-800">
              Our journalists don't just report—they investigate. With backgrounds in criminology, law enforcement, and legal 
              practice, our team brings unparalleled expertise to every story. We follow cases from crime scene to courtroom, 
              providing context that others miss.
            </p>
          </div>
          
          <div className="bg-gray-100 bg-opacity-80 p-6 rounded-lg border-l-4" style={{ borderColor: 'var(--primary-color)' }}>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <span className="text-var(--primary-color) mr-2">03.</span> Our Ethics
            </h2>
            <p className="text-gray-800">
              Sensationalism sells, but integrity matters more. We balance the public's right to know with respect for victims, 
              due process, and the presumption of innocence. Our editorial standards prohibit prejudicial reporting that could 
              influence judicial outcomes.
            </p>
          </div>
          
          <div className="bg-gray-100 bg-opacity-80 p-6 rounded-lg border-l-4" style={{ borderColor: 'var(--primary-color)' }}>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <span className="text-var(--primary-color) mr-2">04.</span> Our Impact
            </h2>
            <p className="text-gray-800">
              Through investigative persistence, we've helped reopen cold cases, exposed misconduct, and advocated for 
              justice system reforms. Our coverage has been cited in legislative hearings and academic research, shaping 
              how society understands and addresses crime.
            </p>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between bg-gray-800 bg-opacity-90 rounded-xl p-8 mb-16">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h3 className="text-3xl font-bold mb-4 text-white">By The Numbers</h3>
            <p className="text-gray-300 mb-4">Our commitment to comprehensive criminal justice coverage spans:</p>
          </div>
          
          <div className="md:w-1/2 grid grid-cols-2 gap-4">
            <div className="text-center p-4 bg-black bg-opacity-70 rounded-lg">
              <div className="text-4xl font-bold text-white mb-2">36K+</div>
              <div className="text-sm text-gray-400">Cases Covered</div>
            </div>
            <div className="text-center p-4 bg-black bg-opacity-70 rounded-lg">
              <div className="text-4xl font-bold text-white mb-2">124</div>
              <div className="text-sm text-gray-400">Global Locations</div>
            </div>
            <div className="text-center p-4 bg-black bg-opacity-70 rounded-lg">
              <div className="text-4xl font-bold text-white mb-2">15+</div>
              <div className="text-sm text-gray-400">Years Reporting</div>
            </div>
            <div className="text-center p-4 bg-black bg-opacity-70 rounded-lg">
              <div className="text-4xl font-bold text-white mb-2">27</div>
              <div className="text-sm text-gray-400">Journalism Awards</div>
            </div>
          </div>
        </div>
        
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold mb-6 text-white">Meet Our Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-800 bg-opacity-30 p-6 rounded-lg hover:bg-gray-700 transition-colors">
              <div className="w-24 h-24 mx-auto mb-4 bg-gray-600 rounded-full overflow-hidden flex items-center justify-center text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-1 text-white">Alexandra Reeves</h4>
              <p className="text-white mb-3 text-sm">Editor-in-Chief</p>
              <p className="text-gray-400 text-sm">Former prosecutor with 15 years experience covering high-profile criminal trials.</p>
            </div>
            
            <div className="bg-gray-800 bg-opacity-30 p-6 rounded-lg hover:bg-gray-700 transition-colors">
              <div className="w-24 h-24 mx-auto mb-4 bg-gray-600 rounded-full overflow-hidden flex items-center justify-center text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-1 text-white">Marcus Chen</h4>
              <p className="text-white mb-3 text-sm">Lead Investigator</p>
              <p className="text-gray-400 text-sm">Retired detective specialized in cold case investigations and forensic analysis.</p>
            </div>
            
            <div className="bg-gray-800 bg-opacity-30 p-6 rounded-lg hover:bg-gray-700 transition-colors">
              <div className="w-24 h-24 mx-auto mb-4 bg-gray-600 rounded-full overflow-hidden flex items-center justify-center text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-1 text-white">Jasmine Torres</h4>
              <p className="text-white mb-3 text-sm">Data Analyst</p>
              <p className="text-gray-400 text-sm">Criminal justice statistician who brings context and pattern analysis to our reporting.</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white-900 bg-opacity-20 border border-var(--primary-color) rounded-lg p-8 mb-16">
          <div className="flex items-center mb-4">
            <AlertTriangle className="text-gray text-3xl mr-3" />
            <h3 className="text-2xl font-bold">Our Editorial Process</h3>
          </div>
          <p className="text-gray-600 mb-6">
            Every story passes through our rigorous 4-step verification process before publication:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-black bg-opacity-50 p-4 rounded text-white  text-center">
              <div className="bg-[#61090b] text-white w-8 h-8 rounded-full  text-white flex items-center justify-center mx-auto mb-2">1</div>
              <p className="text-sm">Initial Source Verification</p>
            </div>
            <div className="bg-black bg-opacity-50 p-4 rounded text-center text-white">
              <div className="bg-[#61090b] text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2">2</div>
              <p className="text-sm">Expert Consultation</p>
            </div>
            <div className="bg-black bg-opacity-50 p-4 rounded text-white  text-center">
              <div className="bg-[#61090b] text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2">3</div>
              <p className="text-sm">Legal Review</p>
            </div>
            <div className="bg-black bg-opacity-50 p-4 rounded text-white  text-center">
              <div className="bg-[#61090b] text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2">4</div>
              <p className="text-sm">Editor Approval</p>
            </div>
          </div>
        </div>
        
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-6">Contact Our Newsroom</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Have a tip? Witness information? Story idea? Our secure channels ensure source protection.
          </p>
          <button
  className="bg-[#61090b] hover:bg-opacity-80 text-white font-bold py-3 px-8 rounded-full transition-colors"
  onClick={() => window.open("https://wa.me/962787967253", "_blank")}
>
  Secure Tip Line
</button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;











// import React from 'react';
// import { Droplet, Search, Shield, FileBadge, FileWarning, Skull } from 'lucide-react';

// const CreativeCrimeNewsAbout = () => {
//   // Your specified colors
//   const primaryColor = "#61090b";
//   const backgroundColor = "#000000";
//   const textColor = "#ffffff";
  
//   return (
//     <div className="bg-black text-white min-h-screen relative">
//       {/* Blood drip header */}
//       <div className="w-full h-12 relative overflow-hidden">
//         <div className="absolute inset-0 flex justify-between">
//           {[...Array(20)].map((_, i) => (
//             <div 
//               key={i} 
//               className="h-24 w-6 rounded-b-full" 
//               style={{backgroundColor: primaryColor, height: `${Math.random() * 60 + 30}px`}}
//             />
//           ))}
//         </div>
//       </div>
      
//       <div className="max-w-6xl mx-auto p-6 relative">
//         {/* Fingerprint background element */}
//         <div className="absolute opacity-5 top-0 right-0 w-full h-full pointer-events-none">
//           <svg viewBox="0 0 100 100" className="w-full h-full">
//             <path d="M50,5 C25,5 5,25 5,50 C5,75 25,95 50,95 C75,95 95,75 95,50 C95,25 75,5 50,5 Z M50,10 C72,10 90,28 90,50 C90,72 72,90 50,90 C28,90 10,72 10,50 C10,28 28,10 50,10 Z" fill={primaryColor} />
//             <path d="M50,15 C30,15 15,30 15,50 C15,70 30,85 50,85 C70,85 85,70 85,50 C85,30 70,15 50,15 Z M50,20 C67,20 80,33 80,50 C80,67 67,80 50,80 C33,80 20,67 20,50 C20,33 33,20 50,20 Z" fill={primaryColor} />
//             <path d="M50,25 C35,25 25,35 25,50 C25,65 35,75 50,75 C65,75 75,65 75,50 C75,35 65,25 50,25 Z M50,30 C62,30 70,38 70,50 C70,62 62,70 50,70 C38,70 30,62 30,50 C30,38 38,30 50,30 Z" fill={primaryColor} />
//             <path d="M50,35 C40,35 35,40 35,50 C35,60 40,65 50,65 C60,65 65,60 65,50 C65,40 60,35 50,35 Z M50,40 C57,40 60,43 60,50 C60,57 57,60 50,60 C43,60 40,57 40,50 C40,43 43,40 50,40 Z" fill={primaryColor} />
//             <path d="M50,45 C47,45 45,47 45,50 C45,53 47,55 50,55 C53,55 55,53 55,50 C55,47 53,45 50,45 Z" fill={primaryColor} />
//           </svg>
//         </div>
        

        
//         <div className="text-center mb-16 mt-12 relative">
//           <div className="inline-block relative">
//             <h1 className="text-5xl md:text-7xl font-bold mb-4" style={{color: textColor}}>
//               CRIME<span style={{color: primaryColor}}>GAZETTE</span>
//             </h1>
//             <Droplet 
//               style={{color: primaryColor}} 
//               className="absolute -bottom-2 -right-2 w-8 h-8"
//             />
//           </div>
//           <div className="h-1 w-32 mx-auto mb-6" style={{backgroundColor: primaryColor}}></div>
//           <p className="text-xl italic" style={{color: "rgba(255,255,255,0.7)"}}>
//             Exposing the truth behind the tape
//           </p>
//         </div>
        
//         {/* Mission statement with blood splatter */}
//         <div className="relative mb-20 p-6 rounded-lg" style={{backgroundColor: "rgba(30,30,30,0.6)"}}>
//           <div className="absolute -top-10 -left-10">
//             <div className="relative">
//               <div className="w-24 h-24 rounded-full" style={{backgroundColor: primaryColor}}></div>
//               <div className="absolute top-2 left-14 w-8 h-8 rounded-full" style={{backgroundColor: primaryColor}}></div>
//               <div className="absolute top-16 left-20 w-4 h-4 rounded-full" style={{backgroundColor: primaryColor}}></div>
//               <div className="absolute top-5 left-5 w-10 h-10 rounded-full" style={{backgroundColor: primaryColor, opacity: 0.7}}></div>
//             </div>
//           </div>
//           <h2 className="text-3xl font-bold mb-6 text-center" style={{color: textColor}}>Our Blood-Sworn Mission</h2>
//           <p className="text-lg text-center max-w-3xl mx-auto" style={{color: "rgba(255,255,255,0.9)"}}>
//             In a world where darkness often conceals the truth, CRIMEWATCH cuts through the shadows. 
//             We don't just report crime—we dissect it, analyze it, and expose the veins of corruption that 
//             feed it. Our journalists pursue truth with the relentless determination of detectives, 
//             because we believe the public deserves nothing less than the complete, uncensored story.
//           </p>
//         </div>
        
//         {/* Core values with crime icons */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
//           <div className="p-6 rounded-lg transform hover:scale-105 transition-transform" style={{backgroundColor: "rgba(30,30,30,0.3)", borderLeft: `4px solid ${primaryColor}`}}>
//             <div className="mb-4 flex justify-center">
//               <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{backgroundColor: "rgba(97,9,11,0.2)"}}>
//                 <Search style={{color: primaryColor}} size={32} />
//               </div>
//             </div>
//             <h3 className="text-xl font-bold mb-3 text-center" style={{color: textColor}}>Uncompromising Investigation</h3>
//             <p className="text-center" style={{color: "rgba(255,255,255,0.7)"}}>
//               We pursue every lead until it bleeds truth. Our investigative team includes former detectives, 
//               forensic specialists, and legal experts who bring decades of experience to every story.
//             </p>
//           </div>
          
//           <div className="p-6 rounded-lg transform hover:scale-105 transition-transform" style={{backgroundColor: "rgba(30,30,30,0.3)", borderLeft: `4px solid ${primaryColor}`}}>
//             <div className="mb-4 flex justify-center">
//               <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{backgroundColor: "rgba(97,9,11,0.2)"}}>
//                 <Shield style={{color: primaryColor}} size={32} />
//               </div>
//             </div>
//             <h3 className="text-xl font-bold mb-3 text-center" style={{color: textColor}}>Victim Advocacy</h3>
//             <p className="text-center" style={{color: "rgba(255,255,255,0.7)"}}>
//               Behind every crime statistic is a human life forever altered. We give voice to victims 
//               and survivors, ensuring their stories aren't lost in the cold narrative of criminal proceedings.
//             </p>
//           </div>
          
//           <div className="p-6 rounded-lg transform hover:scale-105 transition-transform" style={{backgroundColor: "rgba(30,30,30,0.3)", borderLeft: `4px solid ${primaryColor}`}}>
//             <div className="mb-4 flex justify-center">
//               <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{backgroundColor: "rgba(97,9,11,0.2)"}}>
//                 <FileBadge style={{color: primaryColor}} size={32} />
//               </div>
//             </div>
//             <h3 className="text-xl font-bold mb-3 text-center" style={{color: textColor}}>Journalistic Integrity</h3>
//             <p className="text-center" style={{color: "rgba(255,255,255,0.7)"}}>
//               We separate fact from speculation with surgical precision. Our reputation is built on 
//               credibility and accuracy in an age when both are increasingly rare commodities.
//             </p>
//           </div>
//         </div>
        
//         {/* Blood cell-inspired stats section */}
//         <div className="mb-20">
//           <h2 className="text-3xl font-bold mb-10 text-center" style={{color: textColor}}>
//             The Vital Statistics
//           </h2>
//           <div className="flex flex-wrap justify-center gap-6">
//             <div className="w-32 h-32 rounded-full flex flex-col items-center justify-center relative" style={{backgroundColor: "rgba(97,9,11,0.2)", border: `2px solid ${primaryColor}`}}>
//               <div className="absolute inset-0 rounded-full" style={{
//                 background: `radial-gradient(circle at 30% 30%, ${primaryColor} 0%, transparent 50%)`
//               }}></div>
//               <span className="text-3xl font-bold relative" style={{color: primaryColor}}>18+</span>
//               <span className="text-sm relative" style={{color: "rgba(255,255,255,0.7)"}}>Years Active</span>
//             </div>
            
//             <div className="w-40 h-40 rounded-full flex flex-col items-center justify-center relative" style={{backgroundColor: "rgba(97,9,11,0.2)", border: `2px solid ${primaryColor}`}}>
//               <div className="absolute inset-0 rounded-full" style={{
//                 background: `radial-gradient(circle at 30% 30%, ${primaryColor} 0%, transparent 50%)`
//               }}></div>
//               <span className="text-4xl font-bold relative" style={{color: primaryColor}}>10K+</span>
//               <span className="text-sm relative" style={{color: "rgba(255,255,255,0.7)"}}>Cases Covered</span>
//             </div>
            
//             <div className="w-36 h-36 rounded-full flex flex-col items-center justify-center relative" style={{backgroundColor: "rgba(97,9,11,0.2)", border: `2px solid ${primaryColor}`}}>
//               <div className="absolute inset-0 rounded-full" style={{
//                 background: `radial-gradient(circle at 30% 30%, ${primaryColor} 0%, transparent 50%)`
//               }}></div>
//               <span className="text-3xl font-bold relative" style={{color: primaryColor}}>97</span>
//               <span className="text-sm relative" style={{color: "rgba(255,255,255,0.7)"}}>Global Locations</span>
//             </div>
            
//             <div className="w-32 h-32 rounded-full flex flex-col items-center justify-center relative" style={{backgroundColor: "rgba(97,9,11,0.2)", border: `2px solid ${primaryColor}`}}>
//               <div className="absolute inset-0 rounded-full" style={{
//                 background: `radial-gradient(circle at 30% 30%, ${primaryColor} 0%, transparent 50%)`
//               }}></div>
//               <span className="text-3xl font-bold relative" style={{color: primaryColor}}>42</span>
//               <span className="text-sm relative" style={{color: "rgba(255,255,255,0.7)"}}>Awards Won</span>
//             </div>
//           </div>
//         </div>
        
//         {/* Crime dossier team section */}
//         <div className="mb-20">
//           <h2 className="text-3xl font-bold mb-2 text-center" style={{color: textColor}}>The Task Force</h2>
//           <div className="flex justify-center mb-8">
//             <div className="h-1 w-32" style={{backgroundColor: primaryColor}}></div>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {['Lead Investigator', 'Criminal Psychologist', 'Data Analyst'].map((role, index) => (
//               <div key={index} className="p-6 rounded-lg" style={{backgroundColor: "rgba(30,30,30,0.4)"}}>
//                 <div className="flex items-start mb-4">
//                   <div className="mr-4 mt-1">
//                     <div className="w-2 h-16" style={{backgroundColor: primaryColor}}></div>
//                   </div>
//                   <div>
//                     <h4 className="text-lg font-bold" style={{color: primaryColor}}>{role}</h4>
//                     <p className="mb-4" style={{color: "rgba(255,255,255,0.7)"}}>
//                       {index === 0 ? 'Former homicide detective with 20+ years experience solving the most challenging cases.' : 
//                        index === 1 ? 'Specialized in profiling and analyzing the psychological patterns of criminal behavior.' : 
//                        'Expert in forensic data analysis and pattern recognition across large crime datasets.'}
//                     </p>
//                     <div className="flex items-center">
//                       <div className="w-8 h-8 rounded-full bg-gray-700 mr-2 flex items-center justify-center">
//                         <FileWarning size={16} style={{color: primaryColor}} />
//                       </div>
//                       <div style={{color: "rgba(255,255,255,0.5)"}}>
//                         {index === 0 ? 'Cases solved: 127' : 
//                          index === 1 ? 'Profiles created: 89' : 
//                          'Patterns identified: 216'}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
        
//         {/* Crime scene evidence section */}
//         <div className="mb-20 p-8 rounded-lg" style={{backgroundColor: "rgba(97,9,11,0.1)", border: `1px dashed ${primaryColor}`}}>
//           <div className="flex items-center mb-6">
//             <Skull className="mr-3" size={32} style={{color: primaryColor}} />
//             <h2 className="text-3xl font-bold" style={{color: textColor}}>The Evidence of Impact</h2>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             <div>
//               <div className="mb-4 p-4 rounded" style={{backgroundColor: "rgba(0,0,0,0.4)"}}>
//                 <p className="italic" style={{color: "rgba(255,255,255,0.8)"}}>
//                   "CRIMEWATCH's investigation into police misconduct led to 
//                   department-wide reforms and three senior officers facing charges."
//                 </p>
//                 <p className="text-right mt-2" style={{color: primaryColor}}>— National Justice Review</p>
//               </div>
//               <div className="p-4 rounded" style={{backgroundColor: "rgba(0,0,0,0.4)"}}>
//                 <p className="italic" style={{color: "rgba(255,255,255,0.8)"}}>
//                   "Their coverage of the Westside Serial Killings provided crucial leads 
//                   that helped authorities apprehend the suspect within 48 hours."
//                 </p>
//                 <p className="text-right mt-2" style={{color: primaryColor}}>— Chief Daniel Foster, Metro Police</p>
//               </div>
//             </div>
//             <div>
//               <div className="mb-4">
//                 <h3 className="text-xl font-bold mb-2" style={{color: primaryColor}}>Cases Reopened</h3>
//                 <div className="w-full h-4 rounded-full mb-1" style={{backgroundColor: "rgba(255,255,255,0.1)"}}>
//                   <div className="h-full rounded-full" style={{width: "78%", backgroundColor: primaryColor}}></div>
//                 </div>
//                 <p className="text-right text-sm" style={{color: "rgba(255,255,255,0.6)"}}>32 cold cases</p>
//               </div>
//               <div className="mb-4">
//                 <h3 className="text-xl font-bold mb-2" style={{color: primaryColor}}>Justice Served</h3>
//                 <div className="w-full h-4 rounded-full mb-1" style={{backgroundColor: "rgba(255,255,255,0.1)"}}>
//                   <div className="h-full rounded-full" style={{width: "92%", backgroundColor: primaryColor}}></div>
//                 </div>
//                 <p className="text-right text-sm" style={{color: "rgba(255,255,255,0.6)"}}>147 convictions</p>
//               </div>
//               <div>
//                 <h3 className="text-xl font-bold mb-2" style={{color: primaryColor}}>Victims Supported</h3>
//                 <div className="w-full h-4 rounded-full mb-1" style={{backgroundColor: "rgba(255,255,255,0.1)"}}>
//                   <div className="h-full rounded-full" style={{width: "85%", backgroundColor: primaryColor}}></div>
//                 </div>
//                 <p className="text-right text-sm" style={{color: "rgba(255,255,255,0.6)"}}>500+ families</p>
//               </div>
//             </div>
//           </div>
//         </div>
        
//         {/* Contact section with blood fingerprint */}
//         <div className="text-center mb-16 relative">
//           <div className="absolute -right-10 top-0 opacity-20 pointer-events-none">
//             <svg viewBox="0 0 100 140" width="160" height="220">
//               <path d="M50,5 C25,5 5,25 5,50 C5,75 25,95 50,95 C75,95 95,75 95,50 C95,25 75,5 50,5 Z M50,96 C30,96 10,120 10,140 L90,140 C90,120 70,96 50,96 Z" fill={primaryColor} />
//             </svg>
//           </div>
          
//           <h2 className="text-3xl font-bold mb-6" style={{color: textColor}}>Join the Investigation</h2>
//           <p className="text-lg mb-8 max-w-xl mx-auto" style={{color: "rgba(255,255,255,0.7)"}}>
//             Have information on an unsolved case? Witness to corruption? Story tip?
//             Our secure channels protect your identity.
//           </p>
//           <button className="px-8 py-3 rounded-full font-bold text-lg transition-colors" 
//             style={{
//               backgroundColor: primaryColor, 
//               color: textColor,
//               boxShadow: `0 0 20px rgba(97,9,11,0.5)`
//             }}>
//             Anonymous Tip Line
//           </button>
//         </div>
//       </div>
      
//       {/* Blood drip footer */}
//       <div className="w-full h-12 relative overflow-hidden transform rotate-180">
//         <div className="absolute inset-0 flex justify-between">
//           {[...Array(20)].map((_, i) => (
//             <div 
//               key={i} 
//               className="h-24 w-6 rounded-b-full" 
//               style={{backgroundColor: primaryColor, height: `${Math.random() * 60 + 30}px`}}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CreativeCrimeNewsAbout;

