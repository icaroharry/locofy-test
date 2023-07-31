import type { NextPage } from "next";
import Link from "next/link";
import Logo from "../components/logo";
import Calendar from "../components/calendar";

const DetalhesDoHbito: NextPage = () => {
  return (
    <div className="relative [background:linear-gradient(#171717,_#171717),_#171717] w-full h-[52.75rem] flex flex-col pt-[11rem] px-[4.73rem] pb-[1.51rem] box-border items-center justify-start gap-[17.35rem] text-center text-[1.44rem] text-white font-dosis">
      <Logo
        logoTop="calc(50% - 378.02px)"
        vector="/vector@2x.png"
        vector1="/vector1.svg"
        vector2="/vector2.svg"
        logoLeft="calc(50% - 150.92px)"
        logoZIndex="0"
      />
      <div className="self-stretch flex flex-col items-center justify-start gap-[3rem] z-[1]">
        <h2 className="m-0 relative text-[inherit] font-normal font-inherit">
          Beber 2 litros de água
        </h2>
        <div className="flex flex-col items-start justify-start gap-[0.5rem] text-left text-[0.66rem] font-inter">
          <Link
            className="cursor-pointer [text-decoration:none] w-[3.24rem] h-[0.81rem] flex flex-row items-center justify-start gap-[0.13rem] text-[inherit]"
            href="/"
          >
            <img
              className="relative w-[0.66rem] h-[0.66rem] overflow-hidden shrink-0"
              alt=""
              src="/frame.svg"
            />
            <div className="relative inline-block w-[2.42rem] shrink-0">
              Voltar
            </div>
          </Link>
          <Calendar />
        </div>
      </div>
    </div>
  );
};

export default DetalhesDoHbito;
