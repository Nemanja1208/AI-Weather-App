const getBasePath = () => {
  let base_url = "http://localhost:3000";
  // let base_url =
  //   process.env.NODE_ENV === "development"
  //     ? "http://localhost:3000"
  //     : `https://${process.env.VERCEL_URL}`;

  return base_url;
};

export default getBasePath;
