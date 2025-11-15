import { useEffect, useState } from "react";

type Star = {
  id: number;
  size: number;
  x: number;
  y: number;
  opacity: number;
  animationDuration: number;
};

type Snow = {
  id: number;
  size: number;
  x: number;
  y: number;
  delay: number;
  animationDuration: number;
};

export const StarBackground = () => {
  const [stars, setStars] = useState<Star[]>([]);
  const [snow, setSnow] = useState<Snow[]>([]);

  useEffect(() => {
    generateStars();
    generateSnow();

    const handleResize = () => {
      generateStars();
      generateSnow();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const generateStars = () => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 50000
    );
    const newStars: Star[] = [];

    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2,
      });
    }

    setStars(newStars);
  };

  const generateSnow = () => {
    const numberOfSnow = Math.floor(
      (window.innerWidth * window.innerHeight) / 20000
    );
    const newSnow: Snow[] = [];

    for (let i = 0; i < numberOfSnow; i++) {
      newSnow.push({
        id: i,
        size: Math.random() * 5 + 5, // give each snowflake a visible size (5-10px)
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: 0,
        animationDuration: Math.random() * 50 + 10,
      });
    }

    setSnow(newSnow);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse-subtle"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.x}%`,
            top: `${star.y}%`,
            opacity: star.opacity,
            animationDuration: `${star.animationDuration}s`,
          }}
        />
      ))}

      {snow.map((snowflake) => (
        <div
          key={snowflake.id}
          className="snowflake animate-snowflake"
          style={{
            width: `${snowflake.size}px`,
            height: `${snowflake.size}px`,
            left: `${snowflake.x}%`,
            top: `${snowflake.y}%`,
            animationDelay: `${snowflake.delay}s`,
            animationDuration: `${snowflake.animationDuration}s`,
          }}
        />
      ))}
    </div>
  );
};
