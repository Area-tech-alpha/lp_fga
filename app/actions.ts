'use server';

import { redirect } from 'next/navigation';
import { getPool } from './lib/db';
import { appendLeadToSheet } from './lib/sheets';

const WHATSAPP_GROUP_URL = 'https://chat.whatsapp.com/JKIuFIWSIvaEM6rkA6BT5S?mode=gi_t';

let schemaReady: Promise<void> | null = null;

function ensureSchema() {
  if (!schemaReady) {
    schemaReady = getPool().query(`
      CREATE TABLE IF NOT EXISTS inscricoes (
        id SERIAL PRIMARY KEY,
        nome TEXT NOT NULL,
        email TEXT NOT NULL,
        telefone TEXT NOT NULL,
        origem TEXT,
        created_at TIMESTAMPTZ NOT NULL DEFAULT now()
      )
    `).then(() => undefined);
  }
  return schemaReady;
}

export type SignupState = {
  ok: boolean;
  message?: string;
};

export async function submitSignup(idPrefix: string, _prevState: SignupState, formData: FormData): Promise<SignupState> {
  const nome = String(formData.get('nome') ?? '').trim();
  const email = String(formData.get('email') ?? '').trim();
  const telefone = String(formData.get('telefone') ?? '').trim();

  if (!nome || !email || !telefone) {
    return { ok: false, message: 'Preencha todos os campos.' };
  }

  await ensureSchema();
  const { rows } = await getPool().query(
    'INSERT INTO inscricoes (nome, email, telefone, origem) VALUES ($1, $2, $3, $4) RETURNING id, created_at',
    [nome, email, telefone, idPrefix]
  );
  const { id, created_at: createdAt } = rows[0];

  try {
    await appendLeadToSheet({ id, nome, email, telefone, origem: idPrefix, createdAt });
  } catch (error) {
    console.error('Failed to sync lead to Google Sheets:', error);
  }

  redirect(WHATSAPP_GROUP_URL);
}
