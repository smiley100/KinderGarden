// import React from 'react'


// export default function Section() {
//   return (
//     <section class="h-dvh w-dvw max-h-[80rem] relative">
//         <div class="absolute inset-0 z-[1]">
//             <img class="h-full w-full object-cover object-center" src="/images/cover/principale.jpg" alt=""></img>
//         </div>
//         <div class="max-w-[120rem] mx-auto h-full relative z-[2] px-6 md:px-8 lg:px-10">
//             <div class="h-full w-full  flex flex-col relative space-y-6">
//                 <div class="mt-auto mb-0 text-gray-50 md:pb-36 space-y-6">
//                     <span class="font-light text-2xl text-black ">Bienvenu a kinderGarden</span>
//                     <h1 class="text-3xl md:text-5xl max-w-[30rem] font-medium">Le bien-être de votre enfant,notre priorité</h1>                   
//                 </div>
//             </div>
//         </div>

//    <h2>Garderie</h2>
//    <h3>Jardins d'enfants</h3>
//    <h4>Avec son toit pointu, ses colombages rouges et ses jardinières fleuries, notre jardin d'enfants a tout d'une vraie maison.</h4>
//    <p>Chaque étage possède une salle de vie. L'accueil et les repas se tiennent au rez-de-chaussée. La sieste au 1er. Les multiples activités se déroulent par petits groupes simultanément « en haut » et « en bas ».</p>
//    <p>Situés juste à côté de la crèche du 11 novembre, nous partageons avec elle un nom et aussi un jardin ! Ainsi notre joli jardin s'agrandit comme par magie lorsque s'ouvre le portillon qui le relie à celui de notre voisine...</p>
//    <h3>La crèche en quelques chiffres</h3>
//    <ul>
//      <li>17 enfants</li>
//      <li>169 m2</li>
//      <li>1 jardin</li>
//      <li>6 professionnels de la Petite Enfance</li>
//      <li>2 agents techniques</li>
//      <li>1 homme de cour</li>
//      <li>1 médecin & 1 psychologue</li>
//    </ul>
      
//     </section>  
//     )};  
 




import React from 'react';

export default function Section() {
  return (
    <section className="relative">
      {/* Image de couverture */}
      <div className="relative h-screen overflow-hidden">
        <img 
          src="/images/cover/principale.jpg" 
          alt="Photo d'accueil" 
          className="absolute inset-0 object-cover w-full h-full"
        />
        <div className="absolute bottom-0 left-0 p-6 text-white bg-black bg-opacity-50">
          <span className="text-lg">Bienvenue à KinderGarden</span>
          <h1 className="text-4xl font-bold">Le bien-être de votre enfant, notre priorité</h1>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-8 lg:px-10 py-10">
  <h3 className="text-3xl font-bold text-accent-500 mb-2 underline">Jardins d'enfants</h3>
  <h4 className="text-2xl font-medium text-gray-700 mb-4 italic">Avec son toit pointu, ses colombages rouges et ses jardinières fleuries, notre jardin d'enfants a tout d'une vraie maison.</h4>
  <p className="mb-4 text-gray-600 leading-relaxed">
    Chaque étage possède une salle de vie. L'accueil et les repas se tiennent au rez-de-chaussée. La sieste au 1er. Les multiples activités se déroulent par petits groupes simultanément « en haut » et « en bas ».
  </p>
  <p className="mb-4 text-gray-600 leading-relaxed">
    Situés juste à côté de la crèche du 11 novembre, nous partageons avec elle un nom et aussi un jardin ! Ainsi notre joli jardin s'agrandit comme par magie lorsque s'ouvre le portillon qui le relie à celui de notre voisine...
  </p>

  <h3 className="text-3xl font-bold text-accent-500 mt-8">La crèche en quelques chiffres</h3>
  <ul className="list-disc list-inside mt-4 text-gray-600">
    <li>17 enfants</li>
    <li>169 m²</li>
    <li>1 jardin</li>
    <li>6 professionnels de la Petite Enfance</li>
    <li>2 agents techniques</li>
    <li>1 homme de cour</li>
    <li>1 médecin & 1 psychologue</li>
  </ul>
</div>

    </section>
  );
}
















    