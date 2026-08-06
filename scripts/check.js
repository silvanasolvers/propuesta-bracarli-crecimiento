import { readFile } from 'node:fs/promises';

const html = await readFile(new URL('../public/index.html', import.meta.url), 'utf8');

const required = [
  'Bracarli',
  'Más personas descubren Bracarli.',
  'Más clientes vuelven.',
  'Plan comercial · 90 días',
  'El crecimiento no ocurre en una publicación.',
  'Así se convierte una señal en una acción comercial.',
  'Solvers opera. Bracarli habilita.',
  'El agente trabaja detrás.',
  'Instagram',
  'WhatsApp',
  'Meta Ads',
  'recompra',
  '90 días',
  'SolversAI',
  '+30 años',
  '+5.000 clientes',
  'Oro 18K',
  'Detectamos una ocasión',
  'Construimos la activación',
  'Acompañamos la conversación',
  'Documentamos la decisión',
  'No cobramos desarrollo',
  'Referido Mauricio Henao',
  '$6.500.000 COP',
  '$5.000.000',
  'Dos pagos de $2.500.000',
];

const missing = required.filter((text) => !html.includes(text));
if (missing.length) {
  console.error('Missing required content:', missing.join(', '));
  process.exit(1);
}

const forbidden = ['Amarella', 'Atlab', 'Parkcol', 'Ritwal', 'Quebec', 'Hylia'];
const presentForbidden = forbidden.filter((text) => html.includes(text));
if (presentForbidden.length) {
  console.error('Forbidden legacy content:', presentForbidden.join(', '));
  process.exit(1);
}

console.log('check ok');
