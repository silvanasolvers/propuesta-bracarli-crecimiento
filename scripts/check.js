import { readFile } from 'node:fs/promises';

const html = await readFile(new URL('../public/index.html', import.meta.url), 'utf8');

const required = [
  'Bracarli',
  'Un agente de marketing para convertir deseo en crecimiento.',
  'Marketing agéntico operado por SolversAI',
  'Instagram',
  'WhatsApp',
  'pauta',
  'recompra',
  '90 días',
  'SolversAI',
  'Inteligencia de mercado',
  'Contenido que vende',
  'Pauta y adquisición',
  'Conversión por WhatsApp',
  'Data y experimentación',
  'Alta facturación',
  'Media facturación',
  'Baja facturación',
  'No cobramos desarrollo',
  'Referido Mauricio Henao',
  '$6.500.000 COP',
  '$5.000.000 COP',
  '2 pagos quincenales de $2.500.000 COP',
  'BRACARLI',
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
