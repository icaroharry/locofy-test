import type { NextPage } from "next";
import Logo from "../components/logo";

const TelaVazia: NextPage = () => {
  return (
    <div className="relative [background:linear-gradient(#171717,_#171717),_#171717] w-full h-[52.75rem] flex flex-col py-[1.51rem] px-[4.73rem] box-border items-center justify-center gap-[17.34rem] text-center text-[1.89rem] text-white font-dosis">
      <h3 className="m-0 relative text-[inherit] font-normal font-inherit inline-block w-[20.22rem] z-[0]">
        você não tem hábitos cadastrados
      </h3>
      <Logo
        logoTop="2.75rem"
        vector="/vector17@2x.png"
        vector1="/vector18.svg"
        vector2="/vector19.svg"
        logoLeft="calc(50% - 149.96px)"
        logoZIndex="1"
      />
      <button className="cursor-pointer [border:none] py-[0.55rem] px-[4.95rem] bg-aquamarine my-0 mx-[!important] absolute top-[calc(50%_+_327px)] left-[calc(50%_-_162px)] rounded-[5.28px] w-[20.22rem] flex flex-row box-border items-center justify-center z-[2]">
        <div className="relative text-[1.98rem] font-dosis text-gray text-center flex items-center justify-center w-[9.53rem] h-[2.12rem] shrink-0">
          novo hábito
        </div>
      </button>
    </div>
  );
};

export default TelaVazia;
