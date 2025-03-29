# Backend MAF - Système d'envoi d'emails

Ce backend fournit une API pour l'envoi d'emails depuis le formulaire de contact du site MAF.

## Configuration

1. Assurez-vous d'avoir Node.js installé sur votre machine.

2. Installez les dépendances :
   ```
   npm install
   ```

3. Configurez les variables d'environnement dans le fichier `.env` :
   - `PORT` : Port sur lequel le serveur sera exécuté (par défaut : 5000)
   - `EMAIL_USER` : Votre adresse email Gmail
   - `EMAIL_PASS` : Votre mot de passe d'application Gmail (pas votre mot de passe normal)
   - `EMAIL_RECIPIENT` : Adresse email qui recevra les messages du formulaire

### Comment obtenir un mot de passe d'application Gmail

Pour utiliser Gmail avec nodemailer, vous devez créer un "mot de passe d'application" :

1. Activez l'authentification à deux facteurs sur votre compte Google
2. Allez sur [https://myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
3. Sélectionnez "Application" et "Autre (nom personnalisé)"
4. Entrez un nom (ex: "MAF Contact Form")
5. Cliquez sur "Générer" et copiez le mot de passe généré
6. Collez ce mot de passe dans votre fichier `.env` comme valeur pour `EMAIL_PASS`

## Démarrage du serveur

Pour démarrer le serveur :

```
node server.js
```

Ou avec nodemon pour le développement :

```
npx nodemon server.js
```

Le serveur sera accessible à l'adresse : http://localhost:5000

## API Endpoints

- `POST /api/email/send` : Envoie un email à partir des données du formulaire de contact
  - Corps de la requête (JSON) :
    ```json
    {
      "name": "Nom de l'expéditeur",
      "email": "email@exemple.com",
      "subject": "Sujet du message",
      "message": "Contenu du message"
    }
    ```
  - Réponse en cas de succès (200) :
    ```json
    {
      "success": true,
      "message": "Votre message a été envoyé avec succès"
    }
    ```
