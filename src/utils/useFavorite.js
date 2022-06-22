import { useEffect, useState } from "react";
//custom hook for fetching data and returns the data state and error state
const useFavorite = (favorites, meal) => {
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    if (favorites.includes(meal)) {
      setIsFav(true);
    } else {
      setIsFav(false);
    }
  }, [favorites]);
  return isFav;
};

export default useFavorite;
