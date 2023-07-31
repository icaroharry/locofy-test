import type { NextPage } from "next";

const Calendar: NextPage = () => {
  return (
    <section className="rounded-[4.54px] bg-neutral-800 w-[22.69rem] overflow-hidden flex flex-col p-[1rem] box-border items-center justify-start gap-[1.5rem] text-center text-[0.85rem] text-neutral-500 font-inter">
      <div className="w-[20.69rem] flex flex-row items-center justify-between">
        <img
          className="relative w-[0.71rem] h-[0.43rem]"
          alt=""
          src="/vector20.svg"
        />
        <div className="relative">Julho de 2023</div>
        <img
          className="relative w-[0.71rem] h-[0.43rem]"
          alt=""
          src="/vector21.svg"
        />
      </div>
      <ul className="m-0 w-[20.69rem] flex flex-row items-center justify-start relative gap-[0.63rem] text-white font-dosis">
        <div className="relative z-[0]">Dom</div>
        <div className="absolute my-0 mx-[!important] top-[0rem] left-[calc(50%_-_97.95px)] z-[1]">
          Seg
        </div>
        <div className="absolute my-0 mx-[!important] top-[0rem] left-[calc(50%_-_51.07px)] z-[2]">
          Ter
        </div>
        <div className="absolute my-0 mx-[!important] top-[0rem] left-[calc(50%_-_7.22px)] z-[3]">
          Qua
        </div>
        <div className="absolute my-0 mx-[!important] top-[0rem] left-[calc(50%_+_40.79px)] z-[4]">
          Qui
        </div>
        <div className="absolute my-0 mx-[!important] top-[0rem] left-[calc(50%_+_85.4px)] z-[5]">
          Sex
        </div>
        <div className="absolute my-0 mx-[!important] top-[0rem] left-[calc(50%_+_131.9px)] z-[6]">
          Sab
        </div>
      </ul>
      <ol className="m-0 self-stretch h-[18.56rem] flex flex-row flex-wrap items-start justify-start gap-[0.94rem]">
        <button className="cursor-pointer [border:none] py-[0rem] px-[0.38rem] bg-[transparent] w-[2rem] h-[2rem] flex flex-col box-border items-center justify-start gap-[0.13rem]">
          <div className="relative text-[0.85rem] font-light font-inter text-neutral-500 text-center">
            1
          </div>
          <img
            className="relative w-[1.23rem] h-[0.92rem]"
            alt=""
            src="/vector22.svg"
          />
        </button>
        <button className="cursor-pointer [border:none] py-[0rem] px-[0.38rem] bg-[transparent] w-[2rem] h-[2rem] flex flex-col box-border items-center justify-start gap-[0.13rem]">
          <div className="relative text-[0.85rem] tracking-[1.29em] font-light font-inter text-neutral-500 text-center">
            2
          </div>
          <div className="relative rounded-[50%] bg-gainsboro w-[0.57rem] h-[0.57rem]" />
        </button>
        <div className="w-[2rem] h-[2rem] flex flex-col py-[0rem] px-[0.38rem] box-border items-center justify-start gap-[0.13rem]">
          <div className="relative tracking-[1.29em] font-light">3</div>
          <div className="relative rounded-[50%] bg-gainsboro w-[0.57rem] h-[0.57rem]" />
        </div>
        <div className="w-[2rem] h-[2rem] flex flex-col py-[0rem] px-[0.38rem] box-border items-center justify-start gap-[0.13rem]">
          <div className="relative tracking-[1.29em] font-light">4</div>
          <div className="relative rounded-[50%] bg-gainsboro w-[0.57rem] h-[0.57rem]" />
        </div>
        <div className="w-[2rem] h-[2rem] flex flex-col py-[0rem] px-[0.38rem] box-border items-center justify-start gap-[0.13rem]">
          <div className="relative tracking-[1.29em] font-light">4</div>
          <div className="relative rounded-[50%] bg-gainsboro w-[0.57rem] h-[0.57rem]" />
        </div>
        <div className="w-[2rem] h-[2rem] flex flex-col py-[0rem] px-[0.38rem] box-border items-center justify-start gap-[0.13rem]">
          <div className="relative tracking-[1.29em] font-light">5</div>
          <div className="relative rounded-[50%] bg-gainsboro w-[0.57rem] h-[0.57rem]" />
        </div>
        <div className="w-[2rem] h-[2rem] flex flex-col py-[0rem] px-[0.38rem] box-border items-center justify-start gap-[0.13rem]">
          <div className="relative tracking-[1.29em] font-light">6</div>
          <img
            className="relative w-[1.23rem] h-[0.92rem]"
            alt=""
            src="/vector22.svg"
          />
        </div>
        <div className="w-[2rem] h-[2rem] flex flex-col py-[0rem] px-[0.38rem] box-border items-center justify-start gap-[0.13rem]">
          <div className="relative tracking-[1.29em] font-light">7</div>
          <img
            className="relative w-[1.23rem] h-[0.92rem]"
            alt=""
            src="/vector22.svg"
          />
        </div>
        <div className="w-[2rem] h-[2rem] flex flex-col py-[0rem] px-[0.38rem] box-border items-center justify-start gap-[0.13rem]">
          <div className="relative tracking-[1.29em] font-light">8</div>
          <img
            className="relative w-[1.23rem] h-[0.92rem]"
            alt=""
            src="/vector22.svg"
          />
        </div>
        <div className="w-[2rem] h-[2rem] flex flex-col py-[0rem] px-[0.38rem] box-border items-center justify-start gap-[0.13rem]">
          <div className="relative tracking-[1.29em] font-light">9</div>
          <img
            className="relative w-[0.85rem] h-[0.85rem]"
            alt=""
            src="/vector23.svg"
          />
        </div>
        <div className="w-[2rem] h-[2rem] flex flex-col py-[0rem] px-[0.38rem] box-border items-center justify-start gap-[0.13rem]">
          <div className="relative font-light">10</div>
          <img
            className="relative w-[1.23rem] h-[0.92rem]"
            alt=""
            src="/vector22.svg"
          />
        </div>
        <div className="w-[2rem] h-[2rem] flex flex-col py-[0rem] px-[0.38rem] box-border items-center justify-start gap-[0.13rem]">
          <div className="relative font-light">10</div>
          <img
            className="relative w-[1.23rem] h-[0.92rem]"
            alt=""
            src="/vector22.svg"
          />
        </div>
        <div className="w-[2rem] h-[2rem] flex flex-col py-[0rem] px-[0.38rem] box-border items-center justify-start gap-[0.13rem]">
          <div className="relative font-light">11</div>
          <img
            className="relative w-[0.85rem] h-[0.85rem]"
            alt=""
            src="/vector23.svg"
          />
        </div>
        <div className="w-[2rem] h-[2rem] flex flex-col py-[0rem] px-[0.38rem] box-border items-center justify-start gap-[0.13rem]">
          <div className="relative font-light">12</div>
          <img
            className="relative w-[0.85rem] h-[0.85rem]"
            alt=""
            src="/vector24.svg"
          />
        </div>
        <div className="w-[2rem] h-[2rem] flex flex-col py-[0rem] px-[0.38rem] box-border items-center justify-start gap-[0.13rem]">
          <div className="relative font-light">12</div>
          <img
            className="relative w-[0.85rem] h-[0.85rem]"
            alt=""
            src="/vector23.svg"
          />
        </div>
        <div className="w-[2rem] h-[2rem] flex flex-col py-[0rem] px-[0.38rem] box-border items-center justify-start gap-[0.13rem]">
          <div className="relative font-light">12</div>
          <img
            className="relative w-[0.85rem] h-[0.85rem]"
            alt=""
            src="/vector23.svg"
          />
        </div>
        <div className="w-[2rem] h-[2rem] flex flex-col py-[0rem] px-[0.38rem] box-border items-center justify-start gap-[0.13rem]">
          <div className="relative font-light">12</div>
          <img
            className="relative w-[0.85rem] h-[0.85rem]"
            alt=""
            src="/vector23.svg"
          />
        </div>
        <div className="w-[2rem] h-[2rem] flex flex-col py-[0rem] px-[0.38rem] box-border items-center justify-start gap-[0.13rem]">
          <div className="relative font-light">12</div>
          <img
            className="relative w-[0.85rem] h-[0.85rem]"
            alt=""
            src="/vector23.svg"
          />
        </div>
        <div className="w-[2rem] h-[2rem] flex flex-col py-[0rem] px-[0.38rem] box-border items-center justify-start gap-[0.13rem]">
          <div className="relative font-light">10</div>
          <img
            className="relative w-[1.23rem] h-[0.92rem]"
            alt=""
            src="/vector22.svg"
          />
        </div>
        <div className="w-[2rem] h-[2rem] flex flex-col py-[0rem] px-[0.38rem] box-border items-center justify-start gap-[0.13rem]">
          <div className="relative font-light">10</div>
          <img
            className="relative w-[1.23rem] h-[0.92rem]"
            alt=""
            src="/vector22.svg"
          />
        </div>
        <div className="w-[2rem] h-[2rem] flex flex-col py-[0rem] px-[0.38rem] box-border items-center justify-start gap-[0.13rem]">
          <div className="relative font-light">10</div>
          <img
            className="relative w-[1.23rem] h-[0.92rem]"
            alt=""
            src="/vector22.svg"
          />
        </div>
        <div className="w-[2rem] h-[2rem] flex flex-col py-[0rem] px-[0.38rem] box-border items-center justify-start gap-[0.13rem]">
          <div className="relative font-light">10</div>
          <img
            className="relative w-[1.23rem] h-[0.92rem]"
            alt=""
            src="/vector22.svg"
          />
        </div>
        <div className="w-[2rem] h-[2rem] flex flex-col py-[0rem] px-[0.38rem] box-border items-center justify-start gap-[0.13rem]">
          <div className="relative font-light">10</div>
          <img
            className="relative w-[1.23rem] h-[0.92rem]"
            alt=""
            src="/vector22.svg"
          />
        </div>
        <div className="w-[2rem] h-[2rem] flex flex-col py-[0rem] px-[0.38rem] box-border items-center justify-start gap-[0.13rem]">
          <div className="relative tracking-[1.29em] font-light">4</div>
          <div className="relative rounded-[50%] bg-gainsboro w-[0.57rem] h-[0.57rem]" />
        </div>
        <div className="w-[2rem] h-[2rem] flex flex-col py-[0rem] px-[0.38rem] box-border items-center justify-start gap-[0.13rem]">
          <div className="relative tracking-[1.29em] font-light">4</div>
          <div className="relative rounded-[50%] bg-gainsboro w-[0.57rem] h-[0.57rem]" />
        </div>
        <div className="w-[2rem] h-[2rem] flex flex-col py-[0rem] px-[0.38rem] box-border items-center justify-start gap-[0.13rem]">
          <div className="relative font-light">10</div>
          <img
            className="relative w-[1.23rem] h-[0.92rem]"
            alt=""
            src="/vector22.svg"
          />
        </div>
        <div className="w-[2rem] h-[2rem] flex flex-col py-[0rem] px-[0.38rem] box-border items-center justify-start gap-[0.13rem]">
          <div className="relative font-light">12</div>
          <img
            className="relative w-[0.85rem] h-[0.85rem]"
            alt=""
            src="/vector23.svg"
          />
        </div>
        <div className="w-[2rem] h-[2rem] flex flex-col py-[0rem] px-[0.38rem] box-border items-center justify-start gap-[0.13rem]">
          <div className="relative font-light">12</div>
          <img
            className="relative w-[0.85rem] h-[0.85rem]"
            alt=""
            src="/vector24.svg"
          />
        </div>
        <div className="w-[2rem] h-[2rem] flex flex-col py-[0rem] px-[0.38rem] box-border items-center justify-start gap-[0.13rem]">
          <div className="relative font-light">12</div>
          <img
            className="relative w-[0.85rem] h-[0.85rem]"
            alt=""
            src="/vector23.svg"
          />
        </div>
        <div className="w-[2rem] h-[2rem] flex flex-col py-[0rem] px-[0.38rem] box-border items-center justify-start gap-[0.13rem]">
          <div className="relative font-light">12</div>
          <img
            className="relative w-[0.85rem] h-[0.85rem]"
            alt=""
            src="/vector23.svg"
          />
        </div>
        <div className="w-[2rem] h-[2rem] flex flex-col py-[0rem] px-[0.38rem] box-border items-center justify-start gap-[0.13rem]">
          <div className="relative font-light">12</div>
          <img
            className="relative w-[0.85rem] h-[0.85rem]"
            alt=""
            src="/vector23.svg"
          />
        </div>
        <div className="w-[2rem] h-[2rem] flex flex-col py-[0rem] px-[0.38rem] box-border items-center justify-start gap-[0.13rem]">
          <div className="relative font-light">12</div>
          <img
            className="relative w-[0.85rem] h-[0.85rem]"
            alt=""
            src="/vector23.svg"
          />
        </div>
        <div className="w-[2rem] h-[2rem] flex flex-col py-[0rem] px-[0.38rem] box-border items-center justify-start gap-[0.13rem]">
          <div className="relative font-light">12</div>
          <img
            className="relative w-[0.85rem] h-[0.85rem]"
            alt=""
            src="/vector23.svg"
          />
        </div>
      </ol>
    </section>
  );
};

export default Calendar;
