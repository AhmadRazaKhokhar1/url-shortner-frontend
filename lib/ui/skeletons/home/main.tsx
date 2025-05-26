import { Field } from "formik";
import { BiLink } from "react-icons/bi";
import Skeleton from "react-loading-skeleton";
import AppIntro from "../../screen-components/home/AppIntro";
import FormHeaderSkeleton from "./form-header";

export default function HomeMainSkeleton() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-12 w-full">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AppIntro />
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-white/20">
            <FormHeaderSkeleton />
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="originalUrl"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                 <Skeleton
                  width={"30%"}
                  height={40}
                  borderRadius={12}
                  baseColor="lightgray"
                  highlightColor="#ffff"
                  className="my-4"
                />
                </label>
                <div className="relative">
                  <Field
                    type="url"
                    name="originalUrl"
                    placeholder="https://example.com/your-very-long-url-here"
                    className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-white/70 backdrop-blur-sm"
                  />
                  <BiLink className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                </div>
              </div>

              <button
                type="button"
                onClick={() => {}}
                className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-3 px-6 rounded-xl font-semibold shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:scale-105 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
              >
                <Skeleton
                  width={"30%"}
                  height={40}
                  borderRadius={12}
                  baseColor="lightgray"
                  highlightColor="#ffff"
                  className="my-4"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
