import React from 'react';

const HappyPenguin: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 100 100"
    width="120"
    height="120"
    xmlns="http://www.w3.org/2000/svg"
    className="mx-auto"
    {...props}
  >
    <g className="animate-bounce-gentle">
      {/* Feet */}
      <ellipse cx="38" cy="98" rx="12" ry="5" fill="#FFC400" />
      <ellipse cx="62" cy="98" rx="12" ry="5" fill="#FFC400" />
      
      {/* Body */}
      <path d="M50,15 C20,15 15,40 15,65 C15,95 30,100 50,100 C70,100 85,95 85,65 C85,40 80,15 50,15 Z" fill="#333" />
      
      {/* Tummy */}
      <path d="M50,40 C30,40 25,55 25,70 C25,88 35,95 50,95 C65,95 75,88 75,70 C75,55 70,40 50,40 Z" fill="white" />
      
      {/* Wings */}
      <path d="M15 55 C 5 65, 5 85, 18 85 L 15 55 Z" fill="#333" />
      <path d="M85 55 C 95 65, 95 85, 82 85 L 85 55 Z" fill="#333" />
      
      {/* Face */}
      {/* Eyes */}
      <circle cx="40" cy="50" r="8" fill="#333" />
      <circle cx="60" cy="50" r="8" fill="#333" />
      {/* Eye Sparkle */}
      <circle cx="43" cy="47" r="2.5" fill="white" />
      <circle cx="63" cy="47" r="2.5" fill="white" />
      
      {/* Blush */}
      <ellipse cx="30" cy="58" rx="5" ry="3" fill="#FFB6C1" opacity="0.8" />
      <ellipse cx="70" cy="58" rx="5" ry="3" fill="#FFB6C1" opacity="0.8" />
      
      {/* Beak */}
      <polygon points="47,60 53,60 50,66" fill="#FF9900" />
    </g>
  </svg>
);

export default HappyPenguin;