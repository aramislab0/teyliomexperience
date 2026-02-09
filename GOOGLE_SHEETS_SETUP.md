# TEYLIOM EXPERIENCE — Google Apps Script Setup

## Instructions pour configurer l'intégration Google Sheets

### Étape 1: Créer la Google Sheet

1. Créer une nouvelle Google Sheet nommée **"TEYLIOM EXPERIENCE - Leads"**
2. Ajouter les colonnes suivantes dans la première ligne:
   - `Timestamp`
   - `Prénom`
   - `Nom`
   - `Email`
   - `Téléphone`
   - `Projet`
   - `Source`

### Étape 2: Apps Script

1. Dans la Google Sheet, aller à **Extensions > Apps Script**
2. Supprimer le code par défaut
3. Coller le code suivant:

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);
    
    // Ajouter le lead
    sheet.appendRow([
      new Date().toISOString(),
      data.firstName || '',
      data.lastName || '',
      data.email || '',
      data.phone || '',
      data.project || '',
      data.source || 'teyliom-experience'
    ]);
    
    // Email notification (optionnel)
    try {
      MailApp.sendEmail({
        to: 'commercial@teyliom.com', // REMPLACER PAR L'EMAIL RÉEL
        subject: '🏠 Nouveau lead TEYLIOM EXPERIENCE - ' + (data.project || 'Non spécifié'),
        body: 'Nouveau contact intéressé :\n\n' +
              'Nom : ' + data.firstName + ' ' + data.lastName + '\n' +
              'Email : ' + data.email + '\n' +
              'Téléphone : ' + data.phone + '\n' +
              'Projet : ' + data.project + '\n' +
              'Date : ' + new Date().toLocaleString('fr-FR') + '\n\n' +
              '---\nTEYLIOM EXPERIENCE'
      });
    } catch (emailError) {
      console.log('Email notification failed:', emailError);
    }
    
    return ContentService.createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    console.log('Error:', error);
    return ContentService.createTextOutput(JSON.stringify({ success: false, error: error.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Pour permettre les requêtes OPTIONS (CORS)
function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({ status: 'ok' }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

4. Modifier l'email de notification: `commercial@teyliom.com`

### Étape 3: Déployer

1. Cliquer sur **Déployer > Nouveau déploiement**
2. Cliquer sur l'icône engrenage ⚙️ > **Application Web**
3. Configuration:
   - **Exécuter en tant que**: Moi
   - **Qui peut y accéder**: Tout le monde
4. Cliquer **Déployer**
5. **Copier l'URL du déploiement** (elle ressemble à `https://script.google.com/macros/s/XXXXX/exec`)

### Étape 4: Configuration Environnement

#### Développement Local

Créer/Modifier `.env.local`:
```
GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/VOTRE_ID_SCRIPT/exec
```

#### Production (Vercel)

1. Aller sur Vercel Dashboard
2. Projet > **Settings > Environment Variables**
3. Ajouter:
   - **Name**: `GOOGLE_SCRIPT_URL`
   - **Value**: L'URL du script déployé
   - **Environment**: Production (et Preview si besoin)
4. **Redéployer** le projet pour que la variable soit prise en compte

### Test

1. Soumettre un formulaire de test
2. Vérifier l'apparition de la ligne dans Google Sheet
3. Vérifier la réception de l'email (si configuré)

### Partage de la Google Sheet

Partager la Google Sheet avec l'équipe commerciale:
- **Fichier > Partager**
- Ajouter les emails
- Permissions: **Éditeur** (pour pouvoir trier/filtrer)
