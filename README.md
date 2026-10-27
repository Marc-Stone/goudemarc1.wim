# MarketLiv — One-page immersive vitrine

## Lancer le projet
```bash
npm install
npm run dev
```

## Build de production
```bash
npm run build
npm run preview
```

## À personnaliser rapidement
Dans `src/config/site.ts` :
- liens des stores
- WhatsApp
- réseaux sociaux
- statistiques
- feuille de route

## Déploiement
### Vercel
1. Poussez le projet sur GitHub
2. Importez le dépôt dans Vercel
3. Build command : `npm run build`
4. Output : `dist`

### Netlify
1. Connectez le dépôt
2. Build command : `npm run build`
3. Publish directory : `dist`
