import React, { useEffect, useState } from "react";

const CircularProgressBar = ({ percentage, notes }) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let start = 0;
    const interval = setInterval(() => {
      if (start <= percentage) {
        setOffset(start);
        start += 1;
      } else {
        clearInterval(interval);
      }
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, [percentage]);

  const strokeWidth = 8;
  const radius = 50;
  const normalizedRadius = radius - strokeWidth / 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (offset / 100) * circumference;

  const gradientId = "progressGradient"; 
  const gradientColorStops = [
    { offset: "15%", color: "#EA8D8D" },
    { offset: "37%", color: "#fe90cc" },
    { offset: "53%", color: "#dd90fe" },
    { offset: "91%", color: "#909dfe" },
  ];

  return (
    <div className="circular-progress-container">
      <svg width="220" height="220" className="circular-progress">
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
            {gradientColorStops.map((stop, index) => (
              <stop
                key={index}
                offset={stop.offset}
                style={{ stopColor: stop.color }}
              />
            ))}
          </linearGradient>
        </defs>
        <circle
          className="progress-bg-circle"
          strokeWidth={strokeWidth}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          className="progress-fill-circle"
          strokeWidth={strokeWidth}
          stroke={`url(#${gradientId})`} 
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <text
          x="45%"
          y="45%"
          dominantBaseline="middle"
          textAnchor="middle"
          className="percentage"
        >
          {offset}%
        </text>
      </svg>
      
    </div>
  );
};

export default CircularProgressBar;
