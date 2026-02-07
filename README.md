# WETOPO — Site Web

Site web professionnel du cabinet d'ingénierie topographique **WETOPO**, basé à Marrakech, Maroc.

## Arborescence

```
SITE WETOPO/
├── index.html              Page d'accueil
├── about.html              À propos
├── services.html           Services détaillés
├── projects.html           Projets / Réalisations
├── contact.html            Contact + formulaire
├── css/
│   └── style.css           Styles principaux (variables, composants, responsive)
├── js/
│   ├── main.js             Navigation, animations, FAQ, filtres projets
│   └── form.js             Validation du formulaire de contact
├── assets/
│   └── images/
│       └── logo.jpg        Logo WETOPO
└── README.md
```

## Stack technique

- **HTML5** sémantique (h1/h2/h3, sections, aria-labels)
- **CSS3** avec Custom Properties (variables), Flexbox, Grid, animations
- **JavaScript** vanilla (ES6+, Intersection Observer, formulaire)
- Aucune dépendance externe (sauf Google Fonts)

## Installation

Aucune installation requise. Le site est statique et prêt à être ouvert directement dans un navigateur.

```bash
# Ouvrir dans le navigateur
# Double-cliquer sur index.html
# Ou utiliser un serveur local :
npx serve .
# ou
python -m http.server 8000
```

## Déploiement

Le site peut être déployé sur n'importe quel hébergement statique :

- **Netlify** : glisser-déposer le dossier sur app.netlify.com
- **Vercel** : connecter le repo ou uploader
- **GitHub Pages** : pousser sur un repo et activer Pages
- **Hébergement classique** : uploader via FTP sur le serveur

## Personnalisation

### Coordonnées

Rechercher et remplacer dans tous les fichiers HTML :

- `+212 6XX XXX XXX` → votre numéro de téléphone
- `contact@wetopo.ma` → votre email
- `tel:` → `tel:+212XXXXXXXXX`
- `https://wa.me/` → `https://wa.me/212XXXXXXXXX`

### Couleurs

Les couleurs sont définies dans `css/style.css` via des variables CSS (`:root`). Modifier les valeurs de `--color-primary`, `--color-secondary`, etc.

### Projets

Pour ajouter un projet, dupliquer un bloc `<div class="project-card">` dans `projects.html`. Modifier `data-category` parmi : `leve`, `foncier`, `implantation`, `avance`.

### Photo profil

Remplacer le placeholder dans `about.html` par une balise `<img>` avec la photo de Hicham Ait Bihi.

### Carte

Le bloc carte dans `contact.html` est un placeholder. Remplacer par un iframe Google Maps ou OpenStreetMap.

## SEO

- Meta title et description sur chaque page
- Structure sémantique h1 > h2 > h3
- Données structurées LocalBusiness (schema.org) sur index.html
- URLs propres (fichiers .html)
- Images avec attributs alt et dimensions

## Accessibilité

- Contrastes respectés (WCAG AA)
- Labels sur les champs de formulaire
- Focus states visibles
- aria-labels sur les landmarks
- Support de `prefers-reduced-motion`

## Navigateurs supportés

- Chrome, Firefox, Safari, Edge (versions récentes)
- Responsive : mobile, tablette, desktop
