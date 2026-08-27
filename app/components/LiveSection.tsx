import Image from 'next/image';
import SignupForm from './SignupForm';
import VideoEmbed from './VideoEmbed';
import { MedalIcon, PresentationIcon } from './icons';

const EVENT_VIDEO_ID = 'D1KWvfUUfOI';

export default function LiveSection() {
  return (
    <section className="relative overflow-hidden bg-black py-16 sm:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-10 flex justify-center overflow-hidden opacity-[0.08] sm:top-16">
        <div className="relative w-[80vw] max-w-[1100px]" style={{ aspectRatio: '1920 / 1080' }}>
          <Image src="/logo.PNG" alt="" fill className="object-contain" />
        </div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute bottom-10 right-0 hidden h-40 w-40 overflow-hidden opacity-[0.08] sm:block lg:h-56 lg:w-56"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(/logo.PNG)',
            backgroundSize: '500% auto',
            backgroundPosition: '100% 50%',
            backgroundRepeat: 'no-repeat',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="font-display text-5xl uppercase leading-tight text-white sm:text-5xl lg:text-7xl">
            Live de fechamento
            <br />
            <span className="text-[#f7931e]">+</span> aniversário da FGA
          </h2>
          <p className="mt-2 font-script text-2xl text-[#ffc700] sm:text-3xl">+ bônus exclusivo de final de mês</p>
          <p className="mt-3 font-display text-lg uppercase text-white sm:text-xl">31/08 às 19h</p>
        </div>

        <div className="mt-10 sm:mt-14">
          <VideoEmbed videoId={EVENT_VIDEO_ID} title="Live de Fechamento + Aniversário da FGA" />
        </div>

        <div className="mt-10 grid gap-6 sm:mt-14 lg:grid-cols-[1.1fr_1fr] lg:items-stretch">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4 rounded-2xl bg-gradient-to-r from-[#f7931e] to-[#ffc700] px-6 py-5">
              <PresentationIcon className="h-9 w-9 shrink-0 text-black" />
              <p className="font-semibold leading-snug text-black">
                Aprenda o que fazemos dentro da <strong>Alpha</strong> para faturar mais de <strong>4M por mês</strong>
              </p>
            </div>

            <div className="flex items-center gap-4 rounded-2xl bg-gradient-to-r from-[#ffc700] to-[#ffdb4d] px-6 py-5">
              <MedalIcon className="h-9 w-9 shrink-0 text-black" />
              <p className="font-semibold leading-snug text-black">Bônus exclusivo de final de mês</p>
            </div>

            <div className="flex flex-1 flex-col justify-center rounded-2xl bg-gradient-to-r from-[#f7931e] to-[#ffc700] px-6 py-5">
              <span className="font-script text-lg italic text-black/70 line-through">de R$69,90</span>
              <span className="font-display text-5xl text-black sm:text-6xl">
                <span className="align-top text-2xl font-normal italic sm:text-3xl">por </span>
                R$39,90
              </span>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <SignupForm idPrefix="live" />
          </div>
        </div>
      </div>
    </section>
  );
}
