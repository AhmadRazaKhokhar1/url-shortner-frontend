import { BiLink } from "react-icons/bi";
import Skeleton from "react-loading-skeleton";

export default function FormHeaderSkeleton() {
  return (
    <div className="text-center mb-8">
      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
        <BiLink className="w-8 h-8 text-white" />
      </div>
      <h2 className="text-2xl font-bold text-gray-900 mb-2">
        <Skeleton
          width={"30%"}
          height={40}
          borderRadius={12}
          baseColor="lightgray"
          highlightColor="#ffff"
          className="my-4"
        />
      </h2>
      <Skeleton
        width={"30%"}
        height={40}
        borderRadius={12}
        baseColor="lightgray"
        highlightColor="#ffff"
        className="text-gray-600"
      />
    </div>
  );
}
