import type { NextPage } from "next";
import Head from "next/head";
import Logo from "../components/logo";
import NewHabitButton from "../components/new-habit-button";
import HabitsList from "../components/habits-list";

const TelaInicial: NextPage = () => {
  return (
    <>
      <Head>
        <title>Meta diária - Gerenciador de hábitos</title>
        <meta
          name="description"
          content="Gerencie seus hábitos na palma da sua mão"
        />
      </Head>
      <div className="relative [background:linear-gradient(#171717,_#171717),_#171717] w-full h-[52.75rem] flex flex-col pt-[11rem] px-[4.73rem] pb-[1.51rem] box-border items-center justify-start gap-[17.35rem]">
        <Logo
          vector="/vector@2x.png"
          vector1="/vector1.svg"
          vector2="/vector2.svg"
        />
        <NewHabitButton />
        <HabitsList />
      </div>
    </>
  );
};

export default TelaInicial;
