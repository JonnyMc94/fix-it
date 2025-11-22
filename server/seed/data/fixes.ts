import crypto from 'crypto';
import { products } from './products.ts';

export const fixes = [
  {
    id: crypto.randomUUID(),
    product_id: products[0]?.id,
    title: 'Dyson V10 not turning on',
    description: 'Unit does not power on even though battery is charged.',
    steps: JSON.stringify([
      { step: 1, text: 'Check the battery connection and remove/reinsert battery' },
      { step: 2, text: 'Try a different charger and check the charging light' },
      { step: 3, text: 'Inspect the brushroll for obstructions' }
    ]),
    source_type: 'Community',
    verified: false
  },
  {
    id: crypto.randomUUID(),
    product_id: products[0]?.id,
    title: 'Dyson V10 brush roll stuck',
    description: 'Brushroll not spinning.',
    steps: JSON.stringify([
      { step: 1, text: 'Remove debris from brushroll' },
      { step: 2, text: 'Check bearings for wear' },
      { step: 3, text: 'Replace brushroll if necessary' }
    ]),
    source_type: 'AI',
    verified: true
  },
  {
    id: crypto.randomUUID(),
    product_id: products[1]?.id,
    title: 'Washer 3000 won’t drain',
    description: 'Water remains after spin cycle.',
    steps: JSON.stringify([
      { step: 1, text: 'Check the drain pump filter' },
      { step: 2, text: 'Check the drain hose for kinks' },
      { step: 3, text: 'Run a pump test cycle' }
    ]),
    source_type: 'Official Manual',
    verified: true
  },
  {
    id: crypto.randomUUID(),
    product_id: products[2]?.id,
    title: 'Printer paper jam frequently',
    description: 'Paper jam in feed tray.',
    steps: JSON.stringify([
      { step: 1, text: 'Check the paper path for torn bits' },
      { step: 2, text: 'Use recommended paper type' },
      { step: 3, text: 'Clean feed rollers' }
    ]),
    source_type: 'Community',
    verified: false
  }
];
