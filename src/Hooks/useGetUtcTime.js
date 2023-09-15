const useGetUtcTime = () => {
  const formattedDate = (date) => {
    const today = new Date(date);

    // Extract year, month, and day components
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, "0"); // Add 1 because months are zero-based
    const day = today.getDate().toString().padStart(2, "0");

    // Create the formatted date string
    const getDate = `${year}-${month}-${day}`;
    return getDate;
  };
  // Display the formatted date

  return { formattedDate };
};
export default useGetUtcTime;
