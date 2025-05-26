export const getClicksColor = (count: number) => {
    if (count >= 3000) return "text-green-600 bg-green-50";
    if (count >= 1000) return "text-blue-600 bg-blue-50";
    if (count >= 500) return "text-yellow-600 bg-yellow-50";
    return "text-gray-600 bg-gray-50";
  };