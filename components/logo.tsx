import type { NextPage } from "next";
import { useMemo } from "react";
import Link from "next/link";
import CSS, { Property } from "csstype";

type LogoType = {
  vector?: string;
  vector1?: string;
  vector2?: string;

  /** Style props */
  logoTop?: Property.Top;
  logoLeft?: Property.Left;
  logoZIndex?: Property.ZIndex;
};

const Logo: NextPage<LogoType> = ({
  logoTop,
  vector,
  vector1,
  vector2,
  logoLeft,
  logoZIndex,
}) => {
  const logoStyle: CSS.Properties = useMemo(() => {
    return {
      top: logoTop,
      left: logoLeft,
      zIndex: logoZIndex,
    };
  }, [logoTop, logoLeft, logoZIndex]);

  return (
    <Link
      className="cursor-pointer [text-decoration:none] my-0 mx-[!important] absolute top-[2.75rem] left-[calc(50%_-_150.92px)] overflow-hidden flex flex-row py-[0.36rem] px-[2.45rem] items-center justify-center gap-[0.36rem] z-[0]"
      href="/tela-vazia"
      style={logoStyle}
    >
      <img
        className="relative w-[2.25rem] h-[2.25rem] object-cover"
        alt=""
        src={vector}
      />
      <img className="relative w-[5.76rem] h-[1.84rem]" alt="" src={vector1} />
      <img className="relative w-[5.19rem] h-[2.03rem]" alt="" src={vector2} />
    </Link>
  );
};

export default Logo;
