import type { NextPage } from "next";
import Logo from "../components/logo";
import NewHabitForm from "../components/new-habit-form";

const NovoHbito: NextPage = () => {
  return (
    <div className="relative [background:linear-gradient(#171717,_#171717),_#171717] w-full h-[52.75rem] flex flex-col pt-[11rem] px-[4.73rem] pb-[1.51rem] box-border items-center justify-start gap-[17.35rem]">
      <Logo
        logoTop="calc(50% - 378.02px)"
        vector="/vector@2x.png"
        vector1="/vector15.svg"
        vector2="/vector16.svg"
        logoLeft="calc(50% - 150.92px)"
        logoZIndex="0"
      />
      <NewHabitForm />
    </div>
  );
};

export default NovoHbito;
