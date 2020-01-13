export const getTodaysPhoto = async () => {
  const response = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${process.env.VUE_APP_SECRET_KEY}`
  );
  if (!response.ok) {
    throw new Error(
      'Could not get the photo of the day, please try again later.'
    );
  }
  const data = await response.json();

  return data;
};

export const getPotdRange = async (start, end) => {
  const response = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${process.env.VUE_APP_SECRET_KEY}&start_date=${start}&end_date=${end}`
  );
  if (!response.ok) {
    throw new Error(
      `Could not get photos from ${start} to ${end}, please try again later.`
    );
  }
  const data = await response.json();

  return data;
};
