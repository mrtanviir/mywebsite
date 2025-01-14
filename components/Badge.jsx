'use client';
import CountUp from "react-countup";



const Badge = ({
  containerStyles,
  icon,
  endCountNum,
  endCountText,
  badgeText,
}) => {
  return <div className={`badge ${containerStyles}`}>
    <div className="text-3xl text-primary">
      {icon}
    </div>
    <div className="flex items-center gap-x-2">
      <div className="text-4xl leading-none font-bold text-primary">
        <CountUp start={0} end={endCountNum} delay={1} duration={4} />
      </div>
      <div className="max-w-[70px] leading-none text-[16px] font-medium text-black">{badgeText}</div>
    </div>
  </div>
}

export default Badge
