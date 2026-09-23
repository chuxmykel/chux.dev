import React from "react";
import { FaClock } from "react-icons/fa";

export function ReadingTime({ time, className = "" }) {
  return (
    <span className={`flex items-center gap-2 ${className}`}>
      <FaClock />
      <p className="font-bold">{time}</p>
    </span>
  );
}
