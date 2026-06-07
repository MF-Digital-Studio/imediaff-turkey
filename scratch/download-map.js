const fs = require('fs');

async function download() {
  const url = "https://raw.githubusercontent.com/dnomak/svg-turkiye-haritasi/master/css/svg-turkiye-haritasi.css";
  console.log("Downloading from", url);
  try {
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    });
    console.log("Status:", res.status, res.statusText);
    if (!res.ok) {
      const text = await res.text();
      console.log("Error body:", text.substring(0, 500));
      return;
    }
    const data = await res.text();
    fs.writeFileSync('scratch/dnomak-map.css', data);
    console.log("Successfully downloaded to scratch/dnomak-map.css");
  } catch (err) {
    console.error("Fetch failed:", err);
  }
}

download();
