// Utils
import { formatClicks } from "@/utils";

// Hooks
import { useState } from "react";

// Icons
import { GET_ALL_TINY_URLS } from "@/lib/graphql";
import { useAuth } from "@/lib/providers/auth.provider";
import { ITinyUrl } from "@/utils/interfaces/tiny-url";
import { QueryResult, useQuery } from "@apollo/client";
import TinyUrlCard from "./tiny-url-card";

export default function TinyUrlList() {
  // Constants
  const { userId } = useAuth();

  // States
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Queries
  const { data: tinyUrls } = useQuery(GET_ALL_TINY_URLS, {
    variables: { userId },
    skip: !userId,
  }) as QueryResult<
    { getAllUrls: ITinyUrl[] } | undefined,
    { userId: string | undefined }
  >;

  // const tinyUrls = [
  //   {
  //     id: "1",
  //     originalUrl:
  //       "https://www.example.com/very-long-url-that-needs-to-be-shortened-for-better-sharing",
  //     shortUrl: "https://tiny.ly/a7x2k9",
  //     clicksCount: 1247,
  //   },
  //   {
  //     id: "2",
  //     originalUrl:
  //       "https://github.com/AhmadRazaKhokhar1/my-awesome-project-repository",
  //     shortUrl: "https://tiny.ly/b8y3l0",
  //     clicksCount: 892,
  //   },
  //   {
  //     id: "3",
  //     originalUrl:
  //       "https://www.linkedin.com/in/ahmad-raza-khokhar/posts/activity-details-section",
  //     shortUrl: "https://tiny.ly/c9z4m1",
  //     clicksCount: 2156,
  //   },
  //   {
  //     id: "4",
  //     originalUrl:
  //       "https://docs.google.com/document/d/1234567890abcdefghijklmnopqrstuvwxyz/edit",
  //     shortUrl: "https://tiny.ly/d0a5n2",
  //     clicksCount: 445,
  //   },
  //   {
  //     id: "5",
  //     originalUrl:
  //       "https://www.youtube.com/watch?v=dQw4w9WgXcQ&feature=youtu.be&t=42s",
  //     shortUrl: "https://tiny.ly/e1b6o3",
  //     clicksCount: 3821,
  //   },
  // ];

  const copyToClipboard = (url: string, id: string) => {
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  if (!userId) return <div></div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                Your Tiny URLs
              </h1>
              <p className="text-gray-600">
                Manage and track your shortened links
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-white/70 backdrop-blur-sm rounded-xl px-4 py-2 border border-white/20">
                <span className="text-sm text-gray-600">Total Links: </span>
                <span className="font-semibold text-gray-900">
                  {tinyUrls?.getAllUrls?.length}
                </span>
              </div>
              {tinyUrls?.getAllUrls?.length && (
                <div className="bg-white/70 backdrop-blur-sm rounded-xl px-4 py-2 border border-white/20">
                  <span className="text-sm text-gray-600">Total Clicks: </span>
                  <span className="font-semibold text-gray-900">
                    {formatClicks(
                      tinyUrls?.getAllUrls?.reduce(
                        (sum, url) => Number(sum) + Number(url.clicksCount),
                        0,
                      ),
                    )}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="grid gap-4">
          {tinyUrls?.getAllUrls?.map((url: ITinyUrl) => (
            <TinyUrlCard
              key={url?._id}
              copyToClipboard={copyToClipboard}
              copiedId={copiedId??""}
              url={url}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
