const gradientsByType = {
    grass: "bg-gradient-to-b from-green-600 to-green-300",
    fire: "bg-gradient-to-b from-red-500 to-red-300",
    water: "bg-gradient-to-b from-blue-500 to-blue-300",
    flying: "bg-gradient-to-b from-blue-200",
    poison: "bg-gradient-to-b from-purple-500 to-purple-300",
    dark: "bg-gradient-to-b from-black",
    normal: "bg-gradient-to-b from-pink-500 to-purple-300",
    bug: "bg-gradient-to-b from-yellow-500 to-green-200",
  };

  const borderByType = {
    grass: "border-green-500",
    fire: "border-red-500",
    water: "border-blue-500",
    flying: "border-blue-100",
    poison: "border-purple-500",
    dark: "border-black",
    normal: "border-pink-500",
    bug: "border-yellow-500",
  };

export { gradientsByType, borderByType };