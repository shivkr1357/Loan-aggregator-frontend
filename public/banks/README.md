# Bank logos

Place logo images here so they show on bank detail and loan comparison pages.  
**File names must match the bank “base slug”** (see list below).

## Naming

Use **PNG** or **WebP**, and name files exactly as below (lowercase, hyphenated):

| Bank / Lender      | File name           |
|--------------------|---------------------|
| HDFC Bank          | `hdfc-bank.png`     |
| ICICI Bank         | `icici-bank.png`    |
| Axis Bank          | `axis-bank.png`     |
| Kotak Mahindra Bank | `kotak-mahindra-bank.png` |
| IDFC First Bank   | `idfc-first-bank.png` |
| Bajaj Finserv      | `bajaj-finserv.png` |

Add more files using the same pattern: **base slug** = bank slug without the loan type suffix (e.g. `bajaj-finserv` from `bajaj-finserv-personal`).

## Where to get logos

1. **Official sources (best)**  
   - Bank’s press / media / brand kit page (e.g. “Press”, “Media”, “Brand resources”).  
   - Download the approved logo (PNG with transparent background if possible).

2. **Legal / licensing**  
   - Use only logos you’re allowed to use (e.g. from the bank’s own site or with permission).  
   - Don’t use third‑party logos from random sites without checking rights.

3. **Suggested specs**  
   - Width around 120–240px, transparent background.  
   - PNG or WebP; name the file `{base-slug}.png` (or `.webp` and use that in code if you add support).

After adding files here, refresh the app; the app will use these first and only fall back to API/placeholder if the file is missing or fails to load.
