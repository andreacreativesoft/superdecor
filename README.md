# SuperDecor

Site oficial al **SuperDecor Brașov** — perdele, draperii, sine și galerii, jaluzele, rolete, lenjerii de pat și mobilă la comandă.

🌐 **Producție:** [superdecor.ro](https://superdecor.ro)

## Stack

- Next.js 16 (App Router) · React 19 · TypeScript strict
- Tailwind CSS v4 · shadcn/ui (Nova preset) · Radix · Lucide
- MDX pentru conținut
- Vercel Analytics + Speed Insights
- Deploy automat pe Vercel

## Rulare locală

```bash
nvm use            # Node 22 (vezi .nvmrc)
npm install
cp .env.example .env.local   # opțional, pentru variabile custom
npm run dev
```

Apoi deschide [http://localhost:3000](http://localhost:3000).

## Scripturi

| Comandă | Ce face |
| --- | --- |
| `npm run dev` | Server de dezvoltare |
| `npm run build` | Build de producție |
| `npm run start` | Server de producție (după build) |
| `npm run lint` | Linting Next.js |
| `npm run format` | Prettier + Tailwind plugin |

## Context pentru contributori

Mai multe detalii despre arhitectură, convenții, cum se adaugă pagini și produse — vezi [`CLAUDE.md`](./CLAUDE.md).

## Licență

© SuperDecor SRL — toate drepturile rezervate.
