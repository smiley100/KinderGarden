import fs from 'fs';
import path from 'path';

export default async function PlayGroundImages() {
  try {
    const imagesPath = path.join(process.cwd(), 'public/images', 'playground');
    
    const fichiers = fs.readdirSync(imagesPath);

    const images = fichiers.map((filename) => ({
      src: `images/playground/${filename}`,
      alt: filename, 
    }));

    return (
      <div>
        <h1>PlayGroundImages</h1>
        <div>
          {images.length > 0 ? (
            images.map((image, index) => (
              <img key={index} src={image.src} alt={image.alt} />
            ))
          ) : (
            <p>Aucune image disponible pour le moment.</p>
          )}
        </div>
      </div>
    );
  } catch (error) {
    // Gestion des erreurs si la récupération des fichiers échoue
    console.error('Erreur lors de la récupération des images:', error);
    return <div>Erreur : {error.message}</div>;
  }
}


// Best way to include the PlayGroundImages component?
//How to organise the components and pages?
