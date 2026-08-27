import Image from 'next/image';
import SignupForm from './SignupForm';
import { ChevronDownIcon, PlayIcon } from './icons';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-black">
      <Image src="/bg.png" alt="" fill priority className="object-cover" />
      <div className="absolute inset-0 bg-black/55" />
      <div className="caution-stripes absolute inset-0 opacity-20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_65%_75%_at_28%_45%,rgba(0,0,0,0.9),transparent_70%)]" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-10 px-6 py-16 sm:py-24 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
        <h1 className="text-center font-display text-6xl uppercase leading-[1.05] text-white sm:text-6xl lg:text-left lg:text-7xl">
          Como
          <br />
          vendemos
          <br />
          mais de
          <br />
          <span className="relative inline-block text-[#f7931e]">
            R$4 milhões
            <span className="absolute -right-6 -top-6 flex flex-col items-center rounded-full bg-[#e6231e] px-2 py-1 text-[10px] font-sans font-bold leading-none text-white sm:-right-8 sm:-top-7">
              <PlayIcon className="mb-0.5 h-3 w-3" />
              LIVE
            </span>
          </span>
          <br />
          por mês?
        </h1>

        <div className="flex w-full justify-center lg:w-auto">
          <SignupForm idPrefix="hero" />
        </div>
      </div>

      <div className="relative flex justify-center pb-10">
        <ChevronDownIcon className="h-8 w-8 animate-bounce-down text-white/80" />
      </div>
    </section>
  );
}
