"use client";

// Hooks
import { useParams } from "next/navigation";
import { useEffect, useRef } from "react";

export default function RedirectionMain() {
  // Hooks
  const { id } = useParams();
  const isRedirected = useRef(false);

  // Handlers
  async function getOriginalUrl() {
    isRedirected.current = true;
    try {
      const resp = await fetch(
        `http://localhost:8080/redirect-to-tiny-url?shortUrl=${id}`,
        {
          method: "GET",
        },
      );
      const response = await resp.json();
      if (response?.originalUrl) {
        window.location.replace(response.originalUrl);
      }
    } catch (error) {
      console.error(error);
    }
  }

  // UseEffects
  useEffect(() => {
    if (id && !isRedirected.current) {
      getOriginalUrl();
    }
  }, []);
  return (
    <div className="flex flex-col w-full h-full m-auto text-center">
      <span className=" text-">
        Please wait while we redirect to your destination...
      </span>
    </div>
  );
}
