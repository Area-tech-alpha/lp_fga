import SignupForm from './SignupForm';
import VideoEmbed from './VideoEmbed';
import { MedalIcon, PresentationIcon } from './icons';

const EVENT_VIDEO_ID = 'D1KWvfUUfOI';

export default function LiveSection() {
  return (
    <section className="relative overflow-hidden bg-black py-16 sm:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-10 flex justify-center overflow-hidden sm:top-16">
        <span
          className="select-none whitespace-nowrap text-center font-display leading-none text-white/[0.08]"
          style={{ fontSize: 'clamp(150px, 40vw, 760px)' }}>
          FGA
        </span>
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
