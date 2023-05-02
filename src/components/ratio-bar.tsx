import React from "react";

type Props = {
  value: number;
};

export const RatioBar = ({ value }: Props) => {
  const femaleRate = value;
  const genderRatioFemale = 12.5 * femaleRate;
  const genderRatioMale = 12.5 * (8 - femaleRate);

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
