// Utils
import { formatClicks, getClicksColor, shortenUrl } from "@/utils";

// Icons
import { BiCheckCircle, BiCopy, BiTrendingUp } from "react-icons/bi";
import { BsEye, BsLink } from "react-icons/bs";
import { TbExternalLink } from "react-icons/tb";

export default function TinyUrlCard({ url, copiedId, copyToClipboard }) {
    
  return (
    <div
      key={url.id}
      className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.01]"
    >
      <div className="flex items-start justify-between">
        <div className="flex-1 min-w-0 pr-4">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
              <BsLink className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-gray-900 mb-1 flex items-center">
                Short URL
                <span
                  className={`ml-3 px-3 py-1 rounded-full text-xs font-medium ${getClicksColor(
                    url.clicksCount,
                  )}`}
                >
                  <BsEye className="w-3 h-3 inline mr-1" />
                  {formatClicks(url.clicksCount)} clicks
                </span>
              </h3>
              <div className="flex items-center space-x-2 bg-gray-50 rounded-lg px-3 py-2 border">
                <code className="text-blue-600 font-mono text-sm flex-1 min-w-0 truncate">
                  {location.origin?.concat("/".concat(url.shortUrl))}
                </code>
                <button
                  onClick={() => copyToClipboard(location.origin.concat("/")?.concat(url.shortUrl), url._id)}
                  className="flex items-center space-x-1 px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-colors duration-200 text-sm flex-shrink-0"
                >
                  {copiedId === url._id ? (
                    <>
                      <BiCheckCircle className="w-3 h-3" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <BiCopy className="w-3 h-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          <div className="pl-13">
            <p className="text-sm text-gray-500 mb-2">Original URL:</p>
            <div className="flex items-center justify-between bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg px-3 py-2 border">
              <span
                className="text-gray-700 text-sm font-mono flex-1 min-w-0 truncate"
                title={url.originalUrl}
              >
                {shortenUrl(url.originalUrl)}
              </span>
              <a
                href={url.originalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 p-1 text-gray-400 hover:text-blue-500 transition-colors duration-200 flex-shrink-0"
              >
                <TbExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex items-start space-x-2 flex-shrink-0">
          <div className="text-right">
            <div className="flex items-center space-x-2 mb-2">
              <BiTrendingUp
                className={`w-4 h-4 ${
                  url.clicksCount > 1000 ? "text-green-500" : "text-gray-400"
                }`}
              />
              <span className="text-2xl font-bold text-gray-900">
                {formatClicks(url.clicksCount)}
              </span>
            </div>
            <p className="text-xs text-gray-500">Total Clicks</p>
          </div>
        </div>
      </div>
    </div>
  );
}
