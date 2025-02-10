// import React from "react";
// import { getKbArticlesByCode } from "@/sdk/queries/kb";
// import Image from "next/image";
// import Link from "next/link";

// export const revalidate = 1;

// export default async function AboutUs() {
//   const { articles } = await getKbArticlesByCode("news");

//   return (
//     <div className="flex flex-col md:flex-row gap-6 p-4 md:p-6 container mx-auto">
//       <div className="md:w-2/3 w-full relative">
//         <div className="relative rounded-lg shadow-lg overflow-hidden h-[40vh] z-20 md:h-[50vh]">
//           <div className="bg-yellow-400 text-black text-lg font-bold px-4 py-2 w-max rounded-lg mb-4 ">
//             Шинэ мэдээ
//           </div>
//           <div
//             className="absolute inset-0 bg-cover bg-center h-full"
//             style={{
//               backgroundImage: `url(https://pamsmongolia.api.erxes.io/api/read-file?key=${articles[0]?.image?.url})`,
//             }}
//           ></div>
//           <div className="absolute z-10 p-4 bottom-0">
//             <p className="text-gray-500 mb-4">{articles[0].summary}</p>
//             <Link href={`/news/${articles[0]._id}`}>
//               <h1 className="text-2xl text-white font-bold mb-2">
//                 {articles[0].title}
//               </h1>
//             </Link>
//             <Link href={`/news/${articles[0]._id}`}>
//               <button className="border text-white px-6 py-2 rounded-3xl shadow-md">
//                 Цааш унших
//               </button>
//             </Link>
//           </div>
//           <div className="absolute inset-0 bg-black opacity-30"></div>
//         </div>
//       </div>

//       <div className="md:w-1/3 w-full flex overflow-y-scroll h-[40vh] md:h-[50vh]">
//         <div className="space-y-4 flex flex-col overflow-y-auto">
//           {articles.map((article, idx) => (
//             <div
//               key={idx}
//               className="flex flex-row items-center bg-white rounded-lg shadow-md p-4"
//             >
//               <div className="w-24 h-24 flex-shrink-0">
//                 <Image
//                   src={`https://pamsmongolia.api.erxes.io/api/read-file?key=${article?.image?.url}`}
//                   alt={"news"}
//                   width={96}
//                   height={96}
//                   className="object-cover rounded-lg"
//                 />
//               </div>
//               <div className="ml-4 flex-1">
//                 <Link href={`/news/${article._id}`}>
//                   <h2 className="text-base font-bold">{article.title}</h2>
//                 </Link>
//                 <div className="flex items-center justify-between">
//                   <p className="text-gray-400 text-sm">{article.summary}</p>
//                   <Link href={`/news/${articles[0]._id}`}>
//                     <button className=" text-gray-500   text-sm mt-2">
//                       Цааш унших
//                     </button>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
import React from "react";

export default function page() {
  return <div>page</div>;
}
