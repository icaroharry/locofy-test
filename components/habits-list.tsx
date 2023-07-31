import type { NextPage } from "next";
import Habit from "./habit";

const HabitsList: NextPage = () => {
  return (
    <section className="w-[19.41rem] flex flex-col items-center justify-center gap-[1.46rem] max-h-[28.02rem] z-[2] text-center text-[0.82rem] text-white font-inter lg:flex-row lg:pl-[7.5rem] lg:pr-[7.5rem] lg:box-border md:pl-[1.88rem] md:pr-[1.88rem] md:box-border sm:flex-col sm:pl-[0rem] sm:pr-[0rem] sm:box-border">
      <Habit habitName="Beber 2 litros de água" />
      <Habit habitName="Beber 2 litros de água" />
      <Habit habitName="Beber 2 litros de água" />
    </section>
  );
};

export default HabitsList;
