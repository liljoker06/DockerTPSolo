# TP Individuel Docker / Docker Compose

## Projet : Application Full Stack Citations - Backend Node.js / Frontend React Vite + Nginx

### ✨ Description rapide
Cette application est composée de :
- Un **backend Node.js** avec Express qui expose une route `/quotes` pour retourner une citation aléatoire.
- Un **frontend React** (Vite.js) servi avec **Nginx**.
- Un écosystème **Docker Compose** propre, avec un réseau personnalisé et des images optimisées.

Le frontend communique avec le backend via l'URL de l'API injectée par fichier `.env` pendant le build.

---

## 📦 Installation et exécution

### Prérequis
- Docker Desktop installé et en mode Linux
- Docker Compose

### Lancer le projet
1. Cloner le dépôt
2. Assurez-vous que le fichier `.env` est bien présent dans le dossier `frontend/` avec ce contenu :

```bash
VITE_API_URL=http://localhost:5000
```

3. Build et lancement des containers :

```bash
docker-compose up --build
```

4. Accéder à l'application :
- Frontend : http://localhost:3000
- Backend API : http://localhost:5000/quotes

---

## 🎓 Questions de réflexion

### 1. Quelle différence fais-tu entre un Dockerfile et un docker-compose.yml ?
- **Dockerfile** : décrit comment construire une image individuelle de container.
- **docker-compose.yml** : orchestre plusieurs containers (services) ensemble dans un seul environnement.

### 2. Quels sont les avantages de séparer les services dans une architecture Docker ?
- Isolation des services : mise à jour et maintenance facilitées.
- Scalabilité indépendante de chaque service.
- Meilleure sécurité et clarté de l'architecture.

### 3. En quoi Docker Compose facilite-t-il le travail en équipe et le déploiement ?
- Une seule commande pour tout lancer.
- Environnement de travail unifié pour toute l'équipe.
- Prêt pour intégration continue et déploiement CI/CD.

### 4. Pourquoi est-il utile de publier une image sur Docker Hub même pour un projet perso ?
- Facile à partager et déployer sur d'autres machines.
- Permet de sauvegarder l'état de ton image.
- Utilisation dans des workflows d'intégration continue.

---

## 🚀 Commandes utiles

Build et lancement :
```bash
docker-compose up --build
```

Stopper les containers :
```bash
docker-compose down
```

Nettoyer les images inutiles :
```bash
docker system prune -af --volumes
```

Lister les images :
```bash
docker images
```

Suivre les logs :
```bash
docker-compose logs -f
```

---


