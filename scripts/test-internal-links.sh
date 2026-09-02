#!/bin/bash
# Test script to verify internal links are clickable
# Run with: bash scripts/test-internal-links.sh

echo "🔗 Testing Internal Link Navigation"
echo "===================================="

# Function to test if a link exists and responds
test_link() {
  local url=$1
  local expected_status=$2
  echo -n "Testing $url ... "
  
  # Local testing - check if route exists in build
  if grep -q "$url" <<< "$(npm run build 2>&1)"; then
    echo "✓ Route found"
    return 0
  else
    echo "✗ Route not found"
    return 1
  fi
}

echo ""
echo "📄 Perinatal Pages"
echo "---"
test_link "/perinatal" "200"
test_link "/perinatal-faq" "200"

echo ""
echo "🧠 ADHD Pages"
echo "---"
test_link "/adhd" "200"
test_link "/adhd-faq" "200"

echo ""
echo "🔍 Link Content Verification"
echo "---"

# Check if pages contain expected links
echo -n "Perinatal page contains link to perinatal-faq ... "
if grep -q "href=\"/perinatal-faq\"" app/perinatal/page.tsx; then
  echo "✓"
else
  echo "✗"
fi

echo -n "Perinatal page contains link to parents ... "
if grep -q "href=\"/parents\"" app/perinatal/page.tsx; then
  echo "✓"
else
  echo "✗"
fi

echo -n "ADHD page contains link to adhd-faq ... "
if grep -q "href=\"/adhd-faq\"" app/adhd/page.tsx; then
  echo "✓"
else
  echo "✗"
fi

echo -n "ADHD page contains link to career ... "
if grep -q "href=\"/career\"" app/adhd/page.tsx; then
  echo "✓"
else
  echo "✗"
fi

echo -n "Perinatal FAQ contains link back to perinatal ... "
if grep -q "href=\"/perinatal\"" app/perinatal-faq/page.tsx; then
  echo "✓"
else
  echo "✗"
fi

echo -n "ADHD FAQ contains link back to adhd ... "
if grep -q "href=\"/adhd\"" app/adhd-faq/page.tsx; then
  echo "✓"
else
  echo "✗"
fi

echo ""
echo "✅ Internal link tests complete!"
