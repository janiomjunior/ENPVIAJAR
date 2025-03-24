const calculateAvgRating = reviews =>{

    const totalRating = reviews?.reduce((acc, item) => acc + item.rating, 0);
  const avgRating =
  totalRating === 0
      ? ""
      : totalRating === 1
      ? totalRating
      : parseFloat((totalRating / reviews?.length).toFixed(1)); // Set to 2 decimal places


    return {
        totalRating,
        avgRating
    }
};

export default calculateAvgRating;

