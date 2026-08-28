'use client';

import { useActionState } from 'react';
import { submitSignup, type SignupState } from '../actions';

const initialState: SignupState = { ok: false };

export default function SignupForm({ idPrefix }: { idPrefix: string }) {
  const [state, formAction, pending] = useActionState(submitSignup.bind(null, idPrefix), initialState);

  return (
    <div className="w-full max-w-sm rounded-2xl border-4 border-transparent bg-white p-6 shadow-[0_0_0_3px_rgba(247,147,30,0.9)] sm:p-8">
      <h3 className="text-center font-display text-2xl tracking-wide text-black sm:text-[28px]">
        GARANTA SUA CADEIRA!
      </h3>

      <form className="mt-5 space-y-4" action={formAction}>
        <div>
          <label htmlFor={`${idPrefix}-nome`} className="mb-1 block text-sm font-semibold text-black">
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
          <label htmlFor={`${idPrefix}-email`} className="mb-1 block text-sm font-semibold text-black">
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
          <label htmlFor={`${idPrefix}-telefone`} className="mb-1 block text-sm font-semibold text-black">
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

        {state.message && <p className="text-center text-sm font-semibold text-red-600">{state.message}</p>}

        <button
          type="submit"
          disabled={pending}
          className="mx-auto block rounded-md bg-gradient-to-r from-[#f7931e] to-[#ffc700] px-6 py-3 text-sm font-bold text-black transition-transform hover:scale-[1.02] disabled:opacity-60">
          {pending ? 'Enviando...' : 'Quero receber o link'}
        </button>
      </form>
    </div>
  );
}
