import { useState, useEffect } from "react";
import { GoArrowRight, GoArrowLeft  } from "react-icons/go";

const FlashSale = () => {
  const targetDate = new Date("Jun 20, 2024 18:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft(targetDate));
        }, 1000);

        // Clean up the interval on component unmount
        return () => clearInterval(timer);
    }, [targetDate]);

    function calculateTimeLeft(targetDate) {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance < 0) {
            return {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0,
            };
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        return { days, hours, minutes, seconds };
    }

  

  return (
    <div className="md:px-[5rem] px-0 lg:mt-[5rem]">
      <div className="top__flash-sale flex justify-between items-start">
        <div>
            <div className="top__widge text-[1rem] font-[600] text-[#db4444] flex items-center gap-3 mb-3">
              <span className="widget__block w-[20px] rounded-[.2rem] bg-[#db4444] h-[40px]">
              </span> Today's
            </div>
              <div className="left__section flex items-center lg:gap-[4rem]">
                <h2 className="text-[2rem] font-[500]">Flash Sale</h2>
                <div className="timer__container flex gap-5 items-center">
                  <span className="days">{timeLeft.days}</span> <span className="text-accent text-[1.5rem]">:</span>
                  <span className="hours">{timeLeft.hours}</span> <span className="text-accent text-[1.5rem]">:</span> 
                  <span className="minutes">{timeLeft.minutes}</span> <span className="text-accent text-[1.5rem]">:</span>
                  <span className="seconds">{timeLeft.seconds}</span>
                </div>
              </div>
        </div>
        <div className="left__right-scroller flex items-center gap-3">
          <span className="w-[50px] h-[50px] rounded-[50%] bg-[#f5f5f5] flex items-center justify-center"><GoArrowLeft /></span>
          <span className="w-[50px] h-[50px] rounded-[50%] bg-[#f5f5f5] flex items-center justify-center"><GoArrowRight /></span>
        </div>
      </div>
    </div>
  )
}
export default FlashSale