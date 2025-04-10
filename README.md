# MovieBooker

```markdown
# Système de Réservation de Films

Ce projet est un système de réservation de films développé avec NestJs, utilisant une base de données PostgreSQL et documenté avec Swagger.

## Objectif

Développer un système de réservation de films avec les fonctionnalités suivantes :
- Authentification des utilisateurs (JWT)
- Connexion à l’API TMDB pour afficher les films
- Système de réservation avec créneaux horaires
- Pagination, filtrage et sécurisation des endpoints
- Documentation avec Swagger

## Prérequis

- Node.js
- NestJs CLI
- PostgreSQL
- Compte TMDB pour l'API

## Installation

1. Clonez le dépôt :
   ```bash
   git clone https://github.com/Davidc1409/MoviieBooker.git
   cd votre-projet
   ```

2. Installez les dépendances :
   ```bash
   npm install
   ```

3. Configurez les variables d'environnement :
   Créez un fichier `.env` à la racine du projet et ajoutez les variables suivantes :
   ```env
    DATABASE_USER=postgres
    DATABASE_PASSWORD=your_database_password
    SECRET=your_secret
    DATABASE_URL=localhost
    DATABASE_PORT=5432
    DATABASE_NAME=your_databse_name
    API_KEY_TMDB=your_api_key
    ACCESS_TOKEN_TMDB=your_token
   ```

4. Démarrez l'application :
   ```bash
   npm run start
   ```

## Utilisation

### Authentification

- **Inscription** : `POST /user/auth/register`
- **Connexion** : `POST /user/auth/login`

### Films

- **Liste des films** : `GET /movies/search?query=[Required Param Movie name]&page=[Required Param n° page][&primary_release_year=[Optionnal Param]]`
- **Détails d'un film** : `GET /movies/discover?[sort_by=[Optionnal Param]&]page=[Required Param n° page]`

### Réservations

- **Créer une réservation** : `POST /reservation/reservations`
- **Liste des réservations d'un utilisateur connecté** : `GET /reservation/reservations`
- **Supprimer une réservation** : `DELETE /reservation/reservations/:id`

### Documentation de l'API

La documentation Swagger est disponible à l'adresse `/api`.

## Fonctionnalités

- **Authentification** : Utilisation de JWT pour sécuriser les endpoints.
- **Connexion à l'API TMDB** : Récupération des informations sur les films depuis l'API TMDB.
- **Système de réservation** : Possibilité de réserver des films avec des créneaux horaires spécifiques.
- **Pagination et filtrage** : Gestion de la pagination et du filtrage des résultats.
- **Sécurisation des endpoints** : Protection des endpoints avec des gardes.
- **Documentation Swagger** : Documentation complète de l'API avec Swagger.

## Contribuer

Les contributions sont les bienvenues ! Veuillez soumettre une pull request ou ouvrir une issue pour discuter des changements proposés.

## Licence

Ce projet est sous licence MIT. Voir le fichier LICENSE pour plus de détails.
```