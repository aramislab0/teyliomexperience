#!/bin/bash

# Script pour copier manuellement les images VR de Lynea
# 
# INSTRUCTIONS:
# 1. Enregistrez les 3 images panoramiques sur votre bureau avec ces noms EXACTS:
#    - lynea-salon.jpg (vue salon/salle à manger)
#    - lynea-chambre.jpg (vue chambre)  
#    - lynea-couloir.jpg (vue couloir avec ascenseurs)
#
# 2. Exécutez ce script:
#    chmod +x copy-lynea-vr-images.sh
#    ./copy-lynea-vr-images.sh
#

SOURCE_DIR="$HOME/Desktop"
DEST_DIR="public/360/lynea"

echo "🔍 Recherche des images VR de Lynea sur le Bureau..."

# Vérifier si les fichiers existent
if [ ! -f "$SOURCE_DIR/lynea-salon.jpg" ]; then
    echo "❌ Fichier manquant: lynea-salon.jpg"
    exit 1
fi

if [ ! -f "$SOURCE_DIR/lynea-chambre.jpg" ]; then
    echo "❌ Fichier manquant: lynea-chambre.jpg"
    exit 1
fi

if [ ! -f "$SOURCE_DIR/lynea-couloir.jpg" ]; then
    echo "❌ Fichier manquant: lynea-couloir.jpg"
    exit 1
fi

echo "✅ Tous les fichiers trouvés!"
echo ""
echo "📋 Copie des images..."

# Copier les images
cp "$SOURCE_DIR/lynea-salon.jpg" "$DEST_DIR/salon.jpg"
cp "$SOURCE_DIR/lynea-chambre.jpg" "$DEST_DIR/chambre.jpg"
cp "$SOURCE_DIR/lynea-couloir.jpg" "$DEST_DIR/couloir.jpg"

echo "✅ Images copiées avec succès dans $DEST_DIR/"
echo ""
echo "📊 Vérification des résolutions..."

# Vérifier les résolutions (si sips est disponible)
if command -v sips &> /dev/null; then
    sips -g pixelWidth -g pixelHeight "$DEST_DIR"/*.jpg
fi

echo ""
echo "✨ Terminé! Vous pouvez maintenant tester la visite VR."
