import type { NextPage } from "next";

type DeleteHabitButtonType = {
  vector?: string;
  vector1?: string;
  vector2?: string;
  vector3?: string;
};

const DeleteHabitButton: NextPage<DeleteHabitButtonType> = ({
  vector,
  vector1,
  vector2,
  vector3,
}) => {
  return (
    <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[1.09rem] h-[1.09rem] overflow-hidden shrink-0">
      <img
        className="absolute h-[8.33%] w-[83.33%] top-[20.83%] right-[8.33%] bottom-[70.83%] left-[8.33%] max-w-full overflow-hidden max-h-full"
        alt=""
        src={vector}
      />
      <img
        className="absolute h-[91.67%] w-[66.67%] top-[4.17%] right-[16.67%] bottom-[4.17%] left-[16.67%] max-w-full overflow-hidden max-h-full"
        alt=""
        src={vector1}
      />
      <img
        className="absolute h-[33.33%] w-[8.33%] top-[41.67%] right-[54.17%] bottom-[25%] left-[37.5%] max-w-full overflow-hidden max-h-full"
        alt=""
        src={vector2}
      />
      <img
        className="absolute h-[33.33%] w-[8.33%] top-[41.67%] right-[37.5%] bottom-[25%] left-[54.17%] max-w-full overflow-hidden max-h-full"
        alt=""
        src={vector3}
      />
    </button>
  );
};

export default DeleteHabitButton;
