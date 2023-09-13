function useCalculateRating() {
  const calcMovieRating = (num) => {
    const voteAverage = num;
    const percentage = voteAverage * 10;
    return percentage + "%";
  };

  return { calcMovieRating };
}

export default useCalculateRating;
