import { getFAQPageSchema, getPerinatalFAQSchema, getADHDFAQSchema } from './lib/faq-schema.ts';

// Test data
const testFAQ = [
  { q: 'Test question 1?', a: 'Test answer 1.' },
  { q: 'Test question 2?', a: 'Test answer 2.' }
];

console.log('✓ FAQ Schema Generator Validation\n');

// Test 1: Basic FAQPage schema
const basicSchema = getFAQPageSchema(testFAQ, 'https://rainuka-therapy.com/faq', 'Test FAQs');
console.log('1. Basic FAQPage Schema:');
console.log(`   - Type: ${basicSchema['@type']}`);
console.log(`   - Context: ${basicSchema['@context']}`);
console.log(`   - Questions: ${basicSchema.mainEntity.length}`);
console.log(`   - Has breadcrumb: ${!!basicSchema.breadcrumb}`);

// Test 2: Perinatal FAQ schema
const perinatalSchema = getPerinatalFAQSchema(testFAQ, 'https://rainuka-therapy.com/perinatal-faq');
console.log('\n2. Perinatal FAQ Schema:');
console.log(`   - Type: ${JSON.stringify(perinatalSchema['@type'])}`);
console.log(`   - Specialty: ${perinatalSchema.specialty}`);
console.log(`   - Medical audience: ${JSON.stringify(perinatalSchema.medicalAudience)}`);

// Test 3: ADHD FAQ schema
const adhdSchema = getADHDFAQSchema(testFAQ, 'https://rainuka-therapy.com/adhd-faq');
console.log('\n3. ADHD FAQ Schema:');
console.log(`   - Type: ${JSON.stringify(adhdSchema['@type'])}`);
console.log(`   - Specialty: ${adhdSchema.specialty}`);
console.log(`   - Medical audience: ${JSON.stringify(adhdSchema.medicalAudience)}`);

// Test 4: Validate JSON-LD structure
console.log('\n4. JSON-LD Validity:');
try {
  const jsonStr = JSON.stringify(basicSchema);
  console.log(`   ✓ Schema is valid JSON (${jsonStr.length} chars)`);
} catch (e) {
  console.log(`   ✗ Schema JSON error: ${e.message}`);
}

// Test 5: Verify required fields
console.log('\n5. Required Fields Check:');
const required = ['@context', '@type', 'mainEntity'];
const hasRequired = required.every(field => field in basicSchema);
console.log(`   ✓ Has all required fields: ${hasRequired}`);

console.log('\n✅ Validation Complete');
