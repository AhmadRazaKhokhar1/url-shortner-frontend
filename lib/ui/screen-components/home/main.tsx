"use client";

// Formik
import { ErrorMessage, Field, Formik } from "formik";

// Hooks
import { useState } from "react";

// Icons
import { tinyUrlSchema } from "@/utils";
import { ApolloError, MutationResult, useMutation } from "@apollo/client";
import { BiCheckCircle, BiCopy, BiLink } from "react-icons/bi";
import AppIntro from "./AppIntro";
import FormHeader from "./form-header";
import TinyUrlList from "./tiny-url-list";

// Toast
import { GET_ALL_TINY_URLS, MAKE_TINY_URL } from "@/lib/graphql";
import { useAuth } from "@/lib/providers/auth.provider";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function HomeMain() {
  // States
  const [tinyUrl, setTinyUrl] = useState("");
  const [copied, setCopied] = useState(false);

  // Hooks
  const router = useRouter();
  const { userId } = useAuth();

  // Mutations
  const [makeTinyUrl, { loading: makingTinyUrl }] = useMutation<
    MutationResult | undefined,
    { input: { originalUrl: string; userId: string } }
  >(MAKE_TINY_URL, {
    refetchQueries: [{ query: GET_ALL_TINY_URLS, variables: { userId } }],
  });

  // Handlers
  const handleSubmit = async (originalUrl: string) => {
    if (!userId) {
      router.push("/login");
      return toast.error(
        "Your session has been expired, please login again to continue",
      );
    }
    try {
      const { data } = await makeTinyUrl({
        variables: {
          input: { originalUrl, userId },
        },
      });
      console.log("🚀 ~ handleSubmit ~ data:", data);
      setTinyUrl(data?.data?.tinyUrl ?? "");
      toast.success("Successfully created the tiny url");
    } catch (err) {
      const error = err as ApolloError;
      console.error(error);
      toast.error("An error occured while creating the tiny url");
    }
  };

  // Copy to clip board
  const copyToClipboard = () => {
    navigator.clipboard.writeText(tinyUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-12 w-full">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AppIntro />
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-white/20">
            <FormHeader />
            <Formik
              initialValues={{ originalUrl: "" }}
              validationSchema={tinyUrlSchema}
              onSubmit={(values) => handleSubmit(values.originalUrl)}
            >
              {({ values, handleSubmit: formikHandleSubmit }) => (
                <div className="space-y-6">
                  <div>
                    <label
                      htmlFor="originalUrl"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Original URL
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
                    <ErrorMessage
                      name="originalUrl"
                      component="div"
                      className="mt-2 text-sm text-red-600"
                    />
                  </div>

                  <button
                    type="button"
                    onClick={() => formikHandleSubmit()}
                    disabled={makingTinyUrl || !values.originalUrl}
                    className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-3 px-6 rounded-xl font-semibold shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:scale-105 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                  >
                    {makingTinyUrl ? (
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>Generating...</span>
                      </div>
                    ) : (
                      "Get URL"
                    )}
                  </button>
                </div>
              )}
            </Formik>

            {tinyUrl && (
              <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-gray-900 flex items-center">
                    <BiCheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Your Tiny URL is Ready!
                  </h3>
                </div>
                <div className="flex items-center space-x-3 bg-white rounded-lg p-3 border">
                  <input
                    type="text"
                    value={tinyUrl}
                    readOnly
                    className="flex-1 bg-transparent outline-none text-gray-800 font-mono"
                  />
                  <button
                    onClick={copyToClipboard}
                    className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-200 hover:scale-105"
                  >
                    {copied ? (
                      <>
                        <BiCheckCircle className="w-4 h-4" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <BiCopy className="w-4 h-4" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <p className="text-sm text-gray-600 mt-3">
                  Share this link anywhere! It will redirect to your original
                  URL.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      <TinyUrlList />
    </div>
  );
}
