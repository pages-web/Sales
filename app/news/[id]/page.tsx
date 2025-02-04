import React from "react";
import { getKbArticleDetail } from "@/sdk/queries/kb";
import Image from "next/image";

export default async function Page({ params }: { params: { id: string } }) {
  const { article } = await getKbArticleDetail({
    variables: { id: params.id },
  });

  return (
    <div className="container  mt-10 h-[100vh] ">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-grow">
          <p className="text-gray-400 text-lg sm:text-xl md:text-2xl">
            {article.summary}
          </p>
          <h2 className="font-sans font-bold text-xl sm:text-2xl md:text-3xl">
            {article.title}
          </h2>
        </div>
      </div>
      <div className="h-auto md:text-[15px] space-y-4 flex flex-col overflow-y-auto">
        <div
          dangerouslySetInnerHTML={{ __html: article.content }}
          className="mt-6  "
        />
      </div>
    </div>
  );
}
