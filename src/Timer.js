import { useEffect, useState } from "react";
import "./Timer.css";
import "./index.css";

function Timer({ targetDate }) {
  // --- склонения ---
  const labels = {
    days: ["день", "дня", "дней"],
    hours: ["час", "часа", "часов"],
    minutes: ["минута", "минуты", "минут"],
    seconds: ["секунда", "секунды", "секунд"],
  };

  function pluralize(value, words) {
    const mod10 = value % 10;
    const mod100 = value % 100;

    if (mod10 === 1 && mod100 !== 11) return words[0];
    if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20))
      return words[1];
    return words[2];
  }
  function calculateTimeLeft() {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timerComponents = Object.keys(timeLeft).map((unit) => (
    <span key={unit} className="timer-block">
      {timeLeft[unit]} {pluralize(timeLeft[unit], labels[unit])}{" "}
    </span>
  ));

  return (
    <div className="timer">
      {timerComponents.length ? timerComponents : <span>Время вышло!</span>}
    </div>
  );
}

export default Timer;
