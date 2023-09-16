const useGetUtcTime = () => {
  const formatToUtcDate = (inputDateStr) => {
    const inputDate = new Date(inputDateStr);
    const utcDate = new Date(
      inputDate.getUTCFullYear(),
      inputDate.getUTCMonth(),
      inputDate.getUTCDate(),
      0,
      0,
      0
    );
    const formattedDate = utcDate.toISOString();
    return formattedDate;
  };
  return { formatToUtcDate };
};
export default useGetUtcTime;
