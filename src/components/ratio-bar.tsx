import React from "react";

type Props = {
  value1: number;
};

export const RatioBar = ({ value1 }: Props) => {
  const femaleRate = value1;
  const genderRatioFemale = 12.5 * femaleRate;
  const genderRatioMale = 12.5 * (8 - femaleRate);

  //   const percentage = (genderRatioMale / genderRatioFemale) * 100;

  return (
    // <div>
    //   {/* <div className="bg-blue-500 w-full h-4 rounded-full overflow-hidden">
    //     <div
    //       className="bg-pink-600 h-full"
    //       style={{ width: `${percentage}%` }}
    //     ></div>
    //   </div> */}
    <span>{`Female: ${genderRatioFemale}% | Male: ${genderRatioMale}%`}</span>
    // </div>
  );
};
