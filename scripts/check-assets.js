const fs = require("fs");
const path = require("path");

const srcDir = path.join(__dirname, "..", "src");
const assetsDir = path.join(__dirname, "..", "public", "assets");

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const fp = path.join(dir, file);
    const stat = fs.statSync(fp);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(fp));
    } else {
      results.push(fp);
    }
  });
  return results;
}

const files = walk(srcDir);
const regex = /['"`]((?:\/|)assets\/[\w %\-\.\u0600-\u06FF]+)['"`]/g;
// collect unique references
const refs = new Set();
files.forEach((f) => {
  const txt = fs.readFileSync(f, "utf8");
  let m;
  while ((m = regex.exec(txt)) !== null) {
    let p = m[1];
    // normalize leading slash
    if (p.startsWith("/")) p = p.slice(1);
    refs.add(p);
  }
});

// read actual files
const actualFiles = fs.existsSync(assetsDir) ? fs.readdirSync(assetsDir) : [];
const actualLower = new Map();
actualFiles.forEach((f) => actualLower.set(f.toLowerCase(), f));

const missing = [];
const caseMismatch = [];

refs.forEach((r) => {
  const name = r.replace(/^assets\//, "");
  const lc = name.toLowerCase();
  if (!actualLower.has(lc)) {
    missing.push(r);
  } else {
    const actual = actualLower.get(lc);
    if (actual !== name) {
      caseMismatch.push({ ref: r, actual: "assets/" + actual });
    }
  }
});

console.log("Total unique asset refs found:", refs.size);
console.log("Total files in public/assets:", actualFiles.length);
console.log("");
if (missing.length) {
  console.log("Missing files:");
  missing.forEach((m) => console.log(" -", m));
} else {
  console.log("No missing files.");
}
console.log("");
if (caseMismatch.length) {
  console.log("Case mismatches (ref -> actual):");
  caseMismatch.forEach((c) => console.log(" -", c.ref, "->", c.actual));
} else {
  console.log("No case mismatches.");
}

// exit with code 0
process.exit(0);
