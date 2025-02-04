import React from "react";
import { getKbArticlesByCode } from "@/sdk/queries/kb";

export const revalidate = 1;

export default async function AboutUs() {
  const { articles } = await getKbArticlesByCode("about_us");

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50">
      {/* Hero Section */}
      <div className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20 text-center">
        <h1 className="text-4xl font-bold">Бидний Тухай</h1>
        <p className="text-lg mt-2">
          Бидний эрхэм зорилго, үнэт зүйлсийн талаар илүү ихийг мэдэж аваарай
        </p>
      </div>

      {/* Content Section */}
      <div className="container max-w-3xl mx-auto p-6 mt-8 bg-white rounded-2xl shadow-xl">
        <div
          className="text-lg leading-relaxed text-gray-800 overflow-auto max-h-[60vh]"
          dangerouslySetInnerHTML={{
            __html: articles[0]?.content || "Content not available.",
          }}
        />
      </div>
    </div>
  );
}
