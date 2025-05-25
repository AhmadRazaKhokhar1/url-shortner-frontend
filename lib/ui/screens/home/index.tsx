"use client";
import { GET_ALL_TINY_URLS } from "@/lib/graphql";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import toast from "react-hot-toast";

export default function HomeScreen() {
  // Hooks
  const router = useRouter();

  // Queries
  const { data, loading, error } = useQuery(GET_ALL_TINY_URLS);

  useEffect(() => {
    if (
      error?.cause?.message &&
      error.cause.message ===
        "Response not successful: Received status code 401"
    ) {
      // localStorage.clear();
      router.push("/login")
    } else if (error?.cause?.message) {
      console.error(error?.cause?.message);
      toast.error(error?.cause?.message);
    }
  }, [error]);
  return <div className="flex flex-col h-full w-full">Home here</div>;
}
