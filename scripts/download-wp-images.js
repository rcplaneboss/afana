import { writeFileSync, mkdirSync } from "fs";

const images = [
  {
    url: "https://afanaanimalfuture.wordpress.com/wp-content/uploads/2026/01/task_01kf8aempyfg69vmyn7qqzfpfg_1768732257_img_0.webp",
    filename: "hero-banner.webp",
  },
  {
    url: "https://afanaanimalfuture.wordpress.com/wp-content/uploads/2026/01/task_01kfezefwnezfsg46r3jm6bjey_1768955554_img_0.webp",
    filename: "focus-research.webp",
  },
  {
    url: "https://afanaanimalfuture.wordpress.com/wp-content/uploads/2026/01/task_01kfezkgpnfwqtjc7e3t4e9emf_1768955713_img_0.webp",
    filename: "focus-advocacy.webp",
  },
  {
    url: "https://afanaanimalfuture.wordpress.com/wp-content/uploads/2026/01/task_01kfeyczs3egfbqpc06j5wxp55_1768954457_img_0-1.webp",
    filename: "focus-capacity.webp",
  },
  {
    url: "https://afanaanimalfuture.wordpress.com/wp-content/uploads/2026/01/task_01kfh670vze8d8kmcgy3aabhr4_1769029754_img_0.webp",
    filename: "focus-community.webp",
  },
  {
    url: "https://afanaanimalfuture.wordpress.com/wp-content/uploads/2026/01/task_01kfh6n0x9e81ryww0r6cgfdhg_1769030225_img_0.webp",
    filename: "focus-education.webp",
  },
  {
    url: "https://afanaanimalfuture.wordpress.com/wp-content/uploads/2026/02/chatgpt-image-feb-6-2026-at-03_35_06-am.png?w=1024",
    filename: "team-farhan.png",
  },
  {
    url: "https://afanaanimalfuture.wordpress.com/wp-content/uploads/2026/02/chatgpt-image-feb-6-2026-at-03_42_42-am.png?w=1024",
    filename: "team-kaosarah.png",
  },
];

mkdirSync("public/images/wp", { recursive: true });

for (const img of images) {
  try {
    console.log(`Downloading ${img.filename}...`);
    const res = await fetch(img.url);
    if (!res.ok) {
      console.log(`  FAILED: ${res.status} ${res.statusText}`);
      continue;
    }
    const buffer = Buffer.from(await res.arrayBuffer());
    writeFileSync(`public/images/wp/${img.filename}`, buffer);
    console.log(`  Saved: public/images/wp/${img.filename} (${buffer.length} bytes)`);
  } catch (err) {
    console.log(`  ERROR: ${err.message}`);
  }
}

console.log("\nDone!");
