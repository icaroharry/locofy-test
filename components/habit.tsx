import type { NextPage } from "next";
import Link from "next/link";
import DeleteHabitButton from "./delete-habit-button";

type HabitType = {
  habitName?: string;
};

const Habit: NextPage<HabitType> = ({ habitName }) => {
  return (
    <div className="self-stretch flex flex-col items-center justify-start gap-[0.32rem] text-center text-[0.82rem] text-white font-inter">
      <div className="self-stretch flex flex-row items-center justify-between">
        <h3 className="m-0 relative text-[inherit] font-normal font-inherit">
          {habitName}
        </h3>
        <DeleteHabitButton
          vector="/vector3.svg"
          vector1="/vector4.svg"
          vector2="/vector5.svg"
          vector3="/vector6.svg"
        />
      </div>
      <Link
        className="cursor-pointer [text-decoration:none] self-stretch rounded-[4.37px] bg-neutral-800 h-[4.78rem] flex flex-col py-[0rem] pr-[0.01rem] pl-[0rem] box-border items-center justify-center gap-[0.48rem] text-[inherit] font-dosis"
        href="/detalhes-do-hbito"
      >
        <div className="self-stretch flex flex-row py-[0rem] px-[0.36rem] items-center justify-between">
          <div className="relative">Dom</div>
          <div className="relative inline-block w-[1.5rem] shrink-0">Seg</div>
          <div className="relative inline-block w-[1.5rem] shrink-0">Ter</div>
          <div className="relative inline-block w-[1.5rem] shrink-0">Qua</div>
          <div className="relative inline-block w-[1.5rem] shrink-0">Qui</div>
          <div className="relative inline-block w-[1.5rem] shrink-0">Sex</div>
          <b className="relative inline-block w-[1.5rem] shrink-0">Sab</b>
        </div>
        <div className="self-stretch flex flex-row p-[0.36rem] items-center justify-center gap-[1.73rem]">
          <img
            className="flex-1 relative max-w-full overflow-hidden h-[1.19rem]"
            alt=""
            src="/frame-10.svg"
          />
          <img
            className="flex-1 relative max-w-full overflow-hidden h-[1.19rem]"
            alt=""
            src="/frame-13.svg"
          />
          <img
            className="flex-1 relative max-w-full overflow-hidden h-[1.19rem]"
            alt=""
            src="/frame-6.svg"
          />
          <img
            className="flex-1 relative max-w-full overflow-hidden h-[1.19rem]"
            alt=""
            src="/frame-14.svg"
          />
          <img
            className="flex-1 relative max-w-full overflow-hidden h-[1.19rem]"
            alt=""
            src="/frame-12.svg"
          />
          <img
            className="flex-1 relative max-w-full overflow-hidden h-[1.19rem]"
            alt=""
            src="/frame-15.svg"
          />
          <img
            className="flex-1 relative max-w-full overflow-hidden h-[1.19rem]"
            alt=""
            src="/frame-61.svg"
          />
        </div>
      </Link>
    </div>
  );
};

export default Habit;
