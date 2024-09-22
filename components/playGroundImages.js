// import fs from 'fs';
// import path from 'path';

// export default async function PlayGroundImages() {
//   try {
//     const imagesPath = path.join(process.cwd(), 'public/images', 'playground');
    
//     const fichiers = fs.readdirSync(imagesPath);

//     const images = fichiers.map((filename) => ({
//       src: `images/playground/${filename}`,
//       alt: filename, 
//     }));

//     return (
//       <div>
//         <h1>PlayGroundImages</h1>
//         <div>
//           {images.length > 0 ? (
//             images.map((image, index) => (
//               <img key={index} src={image.src} alt={image.alt} />
//             ))
//           ) : (
//             <p>Aucune image disponible pour le moment.</p>
//           )}
//         </div>
//       </div>
//     );
//   } catch (error) {
//     // Gestion des erreurs si la récupération des fichiers échoue
//     console.error('Erreur lors de la récupération des images:', error);
//     return <div>Erreur : {error.message}</div>;
//   }
// }


// // Best way to include the PlayGroundImages component?
// //How to organise the components and pages?

















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
      <div className="max-w-5xl mx-auto px-6 md:px-8 lg:px-10 py-10">
        <h1 className="text-3xl font-bold mb-6">Aire de jeux</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.length > 0 ? (
            images.map((image, index) => (
              <div key={index} className="relative overflow-hidden bg-gray-200 h-60">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="object-cover w-full h-full transition-transform duration-300 transform hover:scale-105"
                />
              </div>
            ))
          ) : (
            <p>Aucune image disponible pour le moment.</p>
          )}
        </div>
      </div>
    );
  } catch (error) {
    console.error('Erreur lors de la récupération des images:', error);
    return <div className="text-red-500">Erreur : {error.message}</div>;
  }
}
