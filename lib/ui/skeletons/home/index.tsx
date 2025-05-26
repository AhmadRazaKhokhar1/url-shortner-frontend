import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import HomeHeaderSkeleton from "./header";

export default function HomeSkeleton() {
  return (
    <div className="flex flex-col h-full w-full">
      <HomeHeaderSkeleton />

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-12 px-4 w-full space-y-6">
        {/* Title Skeleton */}
        <Skeleton
          width={"40%"}
          height={40}
          borderRadius={12}
          baseColor="lightgray"
          highlightColor="#ffffff"
          className="my-4"
        />

        {/* Subtitle Skeleton */}
        <Skeleton
          width={"60%"}
          height={30}
          borderRadius={12}
          baseColor="lightgray"
          highlightColor="#ffffff"
          className="my-4"
        />

        {/* Card Row */}
        <div className="flex flex-wrap gap-6">
          {[1, 2, 3].map((i) => (
            <Skeleton
              key={i}
              width={250}
              height={160}
              borderRadius={12}
              baseColor="lightgray"
              highlightColor="#ffffff"
              className="my-4"
            />
          ))}
        </div>

        {/* Table/Row Skeleton */}
        <div className="space-y-4 mt-8">
          {[1, 2, 3, 4].map((i) => (
            <Skeleton
              key={i}
              width={"100%"}
              height={50}
              borderRadius={12}
              baseColor="lightgray"
              highlightColor="#ffffff"
              className="my-2"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
