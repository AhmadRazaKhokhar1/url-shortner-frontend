import Skeleton from "react-loading-skeleton";

export default function HomeHeaderSkeleton() {
  return (
    <Skeleton
      width={"50%"}
      height={40}
      borderRadius={12}
      baseColor="lightgray"
      highlightColor="#ffff"
      className="my-4"
    />
  );
}
