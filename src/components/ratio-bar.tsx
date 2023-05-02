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
    <>
      {femaleRate > 0 ? (
        <span>{`Female: ${genderRatioFemale}% | Male: ${genderRatioMale}%`}</span>
      ) : (
        <span>Genderless</span>
      )}
    </>
  );
};
