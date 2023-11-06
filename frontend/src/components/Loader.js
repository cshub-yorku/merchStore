import React, { useEffect, useState } from "react";

const Loader = () => {
  const texts = ["Loading", "Almost there", "Fetching merch"];
  const [currentText, setCurrentText] = useState(texts[0]);
  const [textIndex, setTextIndex] = useState(0);

  // Function to cycle through the texts
  const cycleTexts = () => {
    setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    setCurrentText(texts[textIndex]);
  };

  useEffect(() => {
    // Set up an interval to change the text every few seconds
    const interval = setInterval(cycleTexts, 2000);

    return () => {
      // Clear the interval when the component unmounts
      clearInterval(interval);
    };
  }, [textIndex]);

  return (
    <div className="flex items-center justify-center h-[70dvh]">
      <div className="text-4xl font-semibold text-indigo-50">
        {currentText}
        <span className="animate-pulse">...</span>
      </div>
    </div>
  );
};

export default Loader;
