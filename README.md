# Why Do We Use <main> in layout.tsx?

<main> Is an HTML5 semantic tag that tells browsers, search engines and especially for accessibility and SEO.

# "use client" ka kaam kya hai?

Jab tum "use client" likhte ho kisi React component ke top pe, Next.js us component ko Client Component ke roop mein treat karta hai.

Yeh zaroori hai kyunki Next.js App Router by default sabhi components ko Server Components maanta hai, jab tak tum explicitly "use client" na likho.

### Kab zarurat hoti hai?

Jab tum component ke andar:

useState / useEffect / useRef jaise React Hooks use karte ho

Browser-specific APIs use karte ho (jaise window, localStorage, document)

Event listeners lagate ho (onClick, onChange, etc.)
