import type { NextPage } from "next";

const NewHabitButton: NextPage = () => {
  return (
    <button className="cursor-pointer [border:none] py-[0.55rem] px-[4.95rem] bg-aquamarine my-0 mx-[!important] absolute top-[calc(50%_+_327px)] left-[calc(50%_-_162.35px)] rounded-[5.28px] w-[20.23rem] flex flex-row box-border items-center justify-center z-[1]">
      <div className="relative text-[1.98rem] font-dosis text-gray text-center flex items-center justify-center w-[9.54rem] h-[2.12rem] shrink-0">
        novo hábito
      </div>
    </button>
  );
};

export default NewHabitButton;
