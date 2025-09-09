import React from 'react';

const SadPenguin: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 100 100"
    width="120"
    height="120"
    xmlns="http://www.w3.org/2000/svg"
    className="mx-auto"
    {...props}
  >
    <g>
      {/* Feet */}
      <ellipse cx="38" cy="98" rx="12" ry="5" fill="#FFC400" />
      <ellipse cx="62" cy="98" rx="12" ry="5" fill="#FFC400" />
      
      {/* Body */}
      <path d="M50,15 C20,15 15,40 15,65 C15,95 30,100 50,100 C70,100 85,95 85,65 C85,40 80,15 50,15 Z" fill="#333" />
      
      {/* Tummy */}
      <path d="M50,40 C30,40 25,55 25,70 C25,88 35,95 50,95 C65,95 75,88 75,70 C75,55 70,40 50,40 Z" fill="white" />
      
      {/* Droopy Wings */}
      <path d="M15 60 C 5 70, 8 90, 20 88 Z" fill="#333" />
      <path d="M85 60 C 95 70, 92 90, 80 88 Z" fill="#333" />
      
      {/* Face */}
      {/* Sad Eyes */}
      <path d="M35 52 Q 40 45, 45 52" stroke="#333" fill="none" strokeWidth="3" strokeLinecap="round" />
      <path d="M55 52 Q 60 45, 65 52" stroke="#333" fill="none" strokeWidth="3" strokeLinecap="round" />
      
      {/* Sad Beak */}
      <path d="M47 66 Q 50 62, 53 66" stroke="#FF9900" fill="none" strokeWidth="2" strokeLinecap="round" />
      
      {/* Tear */}
      <path className="tear-drop" d="M60 55 Q 60 60, 57 60 Q 63 60, 60 55" fill="#66B2FF" />
    </g>
  </svg>
);

export default SadPenguin;