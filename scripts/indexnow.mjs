/**
 * IndexNow ping script — run after build to notify search engines of all URLs.
 *
 * Usage: node scripts/indexnow.mjs
 *
 * Set INDEXNOW_KEY env var to override the default key.
 * Set SITE_URL env var to override the base URL (defaults to https://jexsie.com).
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

const SITE_URL = process.env.SITE_URL || "https://jexsie.com";
const KEY = process.env.INDEXNOW_KEY || "668c95565386b351a3a009242e1ae786";
const INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow";

function collectPostUrls() {
  const postsDir = path.join(ROOT, "content/posts");
  if (!fs.existsSync(postsDir)) return [];

  return fs
    .readdirSync(postsDir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => `${SITE_URL}/posts/${f.replace(/\.md$/, "")}`);
}

async function ping() {
  const urlList = [SITE_URL, `${SITE_URL}/posts`, ...collectPostUrls()];

  console.log(`IndexNow: submitting ${urlList.length} URLs to search engines`);
  urlList.forEach((u) => console.log(`  ${u}`));

  const body = {
    host: new URL(SITE_URL).host,
    key: KEY,
    keyLocation: `${SITE_URL}/${KEY}.txt`,
    urlList,
  };

  try {
    const res = await fetch(INDEXNOW_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (res.ok || res.status === 202) {
      console.log(`IndexNow: submitted successfully (${res.status})`);
    } else {
      const text = await res.text();
      console.error(`IndexNow: failed (${res.status}) — ${text}`);
    }
  } catch (err) {
    console.error("IndexNow: request failed —", err.message);
  }
}

ping();
