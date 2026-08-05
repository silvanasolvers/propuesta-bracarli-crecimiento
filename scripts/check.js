import { readFile } from 'node:fs/promises';

const html = await readFile(new URL('../public/index.html', import.meta.url), 'utf8');

const required = [
  'Bracarli',
  'convertir deseo en ventas medibles',
  'Sistema Mensual de Crecimiento Comercial Digital',
  'oro 18K',
  'garantía',
  'certificado',
  'Instagram',
  'WhatsApp',
  'pauta',
  'recompra',
  '90 días',
  'SolversAI',
  'Dirección estratégica',
  'Atracción',
  'Conversión',
  'Medición',
  'La meta no es hacer más ruido',
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
