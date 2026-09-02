#!/bin/bash
# Verify that internal links are properly configured

echo "🔍 Verifying Internal Links Configuration"
echo "=========================================="
echo ""

# Check Perinatal pages
echo "📄 Perinatal Pages:"
echo "  Checking perinatal → perinatal-faq link..."
if grep -q "path: '/perinatal-faq'" app/perinatal/page.tsx; then
  echo "    ✓ Link configured"
else
  echo "    ✗ Link missing"
fi

echo "  Checking perinatal-faq → perinatal backlink..."
if grep -q 'href="/perinatal"' app/perinatal-faq/page.tsx; then
  echo "    ✓ Backlink configured"
else
  echo "    ✗ Backlink missing"
fi

echo ""
echo "🧠 ADHD Pages:"
echo "  Checking adhd → adhd-faq link..."
if grep -q "path: '/adhd-faq'" app/adhd/page.tsx; then
  echo "    ✓ Link configured"
else
  echo "    ✗ Link missing"
fi

echo "  Checking adhd-faq → adhd backlink..."
if grep -q 'href="/adhd"' app/adhd-faq/page.tsx; then
  echo "    ✓ Backlink configured"
else
  echo "    ✗ Backlink missing"
fi

echo ""
echo "🔗 RelatedPosts Component:"
if [ -f "components/RelatedPosts.tsx" ]; then
  echo "  ✓ RelatedPosts component exists"
  if grep -q "interface SpecialtyAccent" components/RelatedPosts.tsx; then
    echo "  ✓ Accepts SpecialtyAccent type"
  fi
else
  echo "  ✗ RelatedPosts component missing"
fi

echo ""
echo "✅ Verification complete!"
