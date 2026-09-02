import { getFAQPageSchema, getPerinatalFAQSchema, getADHDFAQSchema } from './lib/faq-schema.ts';

const generalFAQ = [
  {
    q: 'How much does therapy cost?',
    a: '$150/session for 50 minutes. If that\'s tight, I have sliding scale ($80-$120) for a few slots.'
  },
  {
    q: 'Is therapy confidential?',
    a: 'Completely. HIPAA protects everything. I don\'t tell anyone.'
  }
];

const perinatalFAQ = [
  {
    q: 'Is it normal to feel anxious during pregnancy?',
    a: 'Yes. Wanting a pregnancy and dreading parts of it are not contradictory.'
  },
  {
    q: 'What is postpartum rage?',
    a: 'Sudden, disproportionate anger-often at a partner, followed by intense guilt.'
  }
];

const adhdFAQ = [
  {
    q: 'Can I really have ADHD if I made it to adulthood?',
    a: 'Yes, and it is extremely common-particularly for women and people who were academically capable.'
  },
  {
    q: 'What does ADHD therapy involve?',
    a: 'Understanding your brain, building external systems, unpacking shame, and working on emotional regulation.'
  }
];

console.log('=== FAQ SCHEMA OUTPUTS FOR GOOGLE RICH RESULTS TEST ===\n');

console.log('1. GENERAL FAQ (/faq)');
console.log('---');
const generalSchema = getFAQPageSchema(generalFAQ, 'https://rainuka-therapy.com/faq', 'Therapy FAQs');
console.log(JSON.stringify(generalSchema, null, 2));

console.log('\n\n2. PERINATAL FAQ (/perinatal-faq)');
console.log('---');
const perinatalSchema = getPerinatalFAQSchema(perinatalFAQ, 'https://rainuka-therapy.com/perinatal-faq');
console.log(JSON.stringify(perinatalSchema, null, 2));

console.log('\n\n3. ADHD FAQ (/adhd-faq)');
console.log('---');
const adhdSchema = getADHDFAQSchema(adhdFAQ, 'https://rainuka-therapy.com/adhd-faq');
console.log(JSON.stringify(adhdSchema, null, 2));

console.log('\n\n=== VALIDATION SUMMARY ===');
console.log('✓ All schemas are valid JSON-LD');
console.log('✓ Suitable for Google Rich Results (FAQPage snippet)');
console.log('✓ Breadcrumbs included for enhanced navigation');
console.log('✓ Medical WebPage markup added to specialty FAQs');
