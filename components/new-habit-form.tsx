import type { NextPage } from "next";

const NewHabitForm: NextPage = () => {
  return (
    <form className="flex flex-col items-center justify-start gap-[3.75rem] z-[1]">
      <h1 className="m-0 self-stretch relative text-[3.16rem] font-normal font-dosis text-white text-center">
        novo hábito
      </h1>
      <input
        className="[border:none] bg-neutral-800 relative rounded-[5.27px] w-[15.23rem] h-[3.27rem]"
        type="text"
      />
      <div className="w-[15.23rem] flex flex-col items-center justify-start gap-[1rem]">
        <button className="cursor-pointer [border:none] py-[0.55rem] px-[0rem] bg-aquamarine self-stretch rounded-[5.27px] flex flex-col items-center justify-center">
          <div className="self-stretch relative text-[1.98rem] font-dosis text-gray text-center">
            cadastrar
          </div>
        </button>
        <button className="cursor-pointer [border:none] py-[0.47rem] px-[0rem] bg-neutral-800 self-stretch rounded-[5.27px] h-[3.27rem] flex flex-col box-border items-center justify-center">
          <div className="relative text-[1.98rem] font-dosis text-tomato text-center flex items-center justify-center w-[9.53rem] h-[2.12rem] shrink-0">
            cancelar
          </div>
        </button>
      </div>
    </form>
  );
};

export default NewHabitForm;
