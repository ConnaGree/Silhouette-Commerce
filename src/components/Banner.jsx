import { useState, useEffect } from "react";
import { speaker } from "../assets";

const calculateTimeLeft = (targetTime) => {
    const now = new Date().getTime()
    const distance = targetTime - now

    if (distance === 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      };
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((distance % (1000 * 60)) / (1000))

    return {
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds
    }
}

const Banner = () => {
  const targetTime = new Date("July 30, 2024 18:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetTime));


  useEffect(() => {
    const setTime = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetTime));
    }, 1000);

    return () => clearInterval(setTime);
  }, [targetTime])

  return (
    <div className="flex justify-between flex-wrap md:flex-nowrap gap-y-[3rem] md:px-[5rem] mt-[1rem] px-[2rem] py-[3rem] lg:mt-[3rem] bg-black">
      <div className="left__section">
        <span className="text-[.8rem] text-[#00FF66]">Category</span>
        <h2 className="lg:text-[3rem] text-[2rem] text-[#fff] font-[600] my-4">
          Enhance Your <br /> Music Experience
        </h2>

        <div className="timer__container flex items-center gap-5 mb-[2.5rem]">
          <span className="banner__days text-black bg-white flex items-center justify-center w-[60px] h-[60px] rounded-[50%]">
            {timeLeft.days}
          </span>
          <span className="banner__hours text-black bg-white flex items-center justify-center w-[60px] h-[60px] rounded-[50%]">
            {timeLeft.hours}
          </span>
          <span className="banner__minutes text-black bg-white flex items-center justify-center w-[60px] h-[60px] rounded-[50%]">
            {timeLeft.minutes}
          </span>
          <span className="banner__seconds text-black bg-white flex items-center justify-center w-[60px] h-[60px] rounded-[50%]">
            {timeLeft.seconds}
          </span>
        </div>

        <button className="text-[#fff] font-[600] text-[.8rem] bg-[#00FF66] rounded-[.3rem] px-10 py-4">
          Buy Now!
        </button>
      </div>
      <div className="right__section">
        <img className="speaker__img bg-radial-g" src={speaker} alt="speaker" />
      </div>
    </div>
  );
}
export default Banner