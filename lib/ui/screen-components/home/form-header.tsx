// Icons
import { BiLink } from "react-icons/bi";

export default function FormHeader() {
  return (
    <div className="text-center mb-8">
      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
        <BiLink className="w-8 h-8 text-white" />
      </div>
      <h2 className="text-2xl font-bold text-gray-900 mb-2">
        Shorten Your URL
      </h2>
      <p className="text-gray-600">Paste your long URL below to get started</p>
    </div>
  );
}
