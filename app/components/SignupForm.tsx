"use client";

import { useState } from "react";

export default function SignupForm({ idPrefix }: { idPrefix: string }) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="w-full max-w-sm rounded-2xl border-4 border-transparent bg-white p-6 shadow-[0_0_0_3px_rgba(247,147,30,0.9)] sm:p-8">
      <h3 className="text-center font-display text-2xl tracking-wide text-black sm:text-[28px]">
        GARANTA SUA CADEIRA!
      </h3>

      {submitted ? (
        <p className="mt-6 text-center font-semibold text-black">
          Inscrição recebida! Em breve entraremos em contato.
        </p>
      ) : (
        <form className="mt-5 space-y-4" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor={`${idPrefix}-nome`}
              className="mb-1 block text-sm font-semibold text-black"
            >
              Nome:
            </label>
            <input
              id={`${idPrefix}-nome`}
              name="nome"
              type="text"
              required
              className="w-full rounded-md bg-zinc-200 px-3 py-3 text-sm text-black outline-none focus:ring-2 focus:ring-[#f7931e]"
            />
          </div>

          <div>
            <label
              htmlFor={`${idPrefix}-email`}
              className="mb-1 block text-sm font-semibold text-black"
            >
              Email:
            </label>
            <input
              id={`${idPrefix}-email`}
              name="email"
              type="email"
              required
              className="w-full rounded-md bg-zinc-200 px-3 py-3 text-sm text-black outline-none focus:ring-2 focus:ring-[#f7931e]"
            />
          </div>

          <div>
            <label
              htmlFor={`${idPrefix}-telefone`}
              className="mb-1 block text-sm font-semibold text-black"
            >
              Número para contato:
            </label>
            <input
              id={`${idPrefix}-telefone`}
              name="telefone"
              type="tel"
              required
              className="w-full rounded-md bg-zinc-200 px-3 py-3 text-sm text-black outline-none focus:ring-2 focus:ring-[#f7931e]"
            />
          </div>

          <button
            type="submit"
            className="mx-auto block rounded-md bg-gradient-to-r from-[#f7931e] to-[#ffc700] px-6 py-3 text-sm font-bold text-black transition-transform hover:scale-[1.02]"
          >
            Quero participar da call exclusiva
          </button>
        </form>
      )}
    </div>
  );
}
