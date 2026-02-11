const resp = await fetch("https://afanaanimalfuture.wordpress.com/about/");
const html = await resp.text();

// Extract all image src URLs
const imgRegex = /<img[^>]+src="([^"]+)"[^>]*>/gi;
let match;
const images = [];
while ((match = imgRegex.exec(html)) !== null) {
  images.push(match[1]);
}

console.log("=== ALL IMAGE URLs ===");
images.forEach((url, i) => {
  console.log(`${i + 1}: ${url}`);
});

// Also look for wp-content URLs in the full HTML
const wpRegex = /https?:\/\/[^"'\s]+wp-content\/uploads\/[^"'\s]+/gi;
const wpImages = [];
let wpMatch;
while ((wpMatch = wpRegex.exec(html)) !== null) {
  wpImages.push(wpMatch[0]);
}

console.log("\n=== WP-CONTENT IMAGE URLs ===");
wpImages.forEach((url, i) => {
  console.log(`${i + 1}: ${url}`);
});

// Also check for background images in style attributes
const bgRegex = /background[^:]*:\s*url\(['"]?([^'")]+)['"]?\)/gi;
let bgMatch;
console.log("\n=== BACKGROUND IMAGE URLs ===");
while ((bgMatch = bgRegex.exec(html)) !== null) {
  console.log(bgMatch[1]);
}

// Check for wordpress.com hosted images
const wpComRegex = /https?:\/\/[^"'\s]*\.wp\.com\/[^"'\s]+/gi;
let wpComMatch;
console.log("\n=== WP.COM HOSTED IMAGE URLs ===");
while ((wpComMatch = wpComRegex.exec(html)) !== null) {
  console.log(wpComMatch[0]);
}

// General i0.wp.com, i1.wp.com, i2.wp.com pattern
const iWpRegex = /https?:\/\/i[0-2]\.wp\.com\/[^"'\s)]+/gi;
let iWpMatch;
console.log("\n=== i*.wp.com IMAGE URLs ===");
while ((iWpMatch = iWpRegex.exec(html)) !== null) {
  console.log(iWpMatch[0]);
}
