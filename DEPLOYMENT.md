# 🚀 Guide de Déploiement - Portfolio MBTech

## Déploiement sur Vercel (Recommandé)

### Option 1 : Via GitHub (Automatique)

1. Allez sur [Vercel.com](https://vercel.com)
2. Connectez-vous avec GitHub
3. Cliquez "Import Project"
4. Sélectionnez `portfolio-mbtech`
5. Cliquez "Deploy"

**C'est tout !** Vercel détecte automatiquement Vite et fait le déploiement.

### Option 2 : Via CLI

```bash
npm install -g vercel
vercel login
vercel deploy
```

## Variables d'environnement

Si vous utilisez EmailJS, ajoutez ces variables dans les paramètres Vercel :

- `VITE_EMAILJS_SERVICE_ID` = votre service ID
- `VITE_EMAILJS_TEMPLATE_ID` = votre template ID
- `VITE_EMAILJS_PUBLIC_KEY` = votre clé publique

## Résultats attendus

- **Performance** : Lighthouse score > 90
- **Temps de déploiement** : < 5 min
- **URL** : `https://portfolio-mbtech.vercel.app`

## Support de domaine personnalisé

1. Dans les paramètres Vercel
2. Allez à "Domains"
3. Ajoutez votre domaine
4. Configurez les DNS

---

**Besoin d'aide ?** Consultez la [doc Vercel](https://vercel.com/docs)
