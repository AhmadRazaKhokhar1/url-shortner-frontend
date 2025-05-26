import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function NavBarSkeleton() {
  return (
    <nav className="top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-white/20 shadow-xl">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <Skeleton
              width={40}
              height={40}
              borderRadius={12}
              baseColor="lightgray"
              highlightColor="#ffff"
            />
            <Skeleton
              width={80}
              height={24}
              baseColor="lightgray"
              highlightColor="#ffff"
            />
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <Skeleton
                width={34}
                height={34}
                borderRadius="50%"
                baseColor="lightgray"
              />
              <Skeleton
                width={34}
                height={34}
                borderRadius="50%"
                highlightColor="#ffff"
              />
            </div>

            <Skeleton
              width={40}
              height={40}
              baseColor="lightgray"
              highlightColor="#ffff"
            />

            <div className="md:hidden">
              <Skeleton
                width={32}
                height={32}
                borderRadius={8}
                baseColor="lightgray"
                highlightColor="#ffff"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 pointer-events-none"></div>
    </nav>
  );
}
