import { useState, useCallback } from "react";

const COMIC_WORDS = ["POW!", "BAM!", "ZAP!", "BOOM!", "WHAM!", "SMASH!"];

export const useComicImpact = () => {
  const [impacts, setImpacts] = useState([]);

  const triggerImpact = useCallback((event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const newImpact = {
      id: Date.now() + Math.random(),
      x,
      y,
      word: COMIC_WORDS[Math.floor(Math.random() * COMIC_WORDS.length)],
      rotation: Math.random() * 30 - 15, // Random rotation between -15 and 15
    };

    setImpacts((prev) => [...prev, newImpact]);

    // Auto-remove after 800ms
    setTimeout(() => {
      setImpacts((prev) => prev.filter((impact) => impact.id !== newImpact.id));
    }, 800);
  }, []);

  return { impacts, triggerImpact };
};
