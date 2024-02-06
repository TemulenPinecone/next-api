// export default async function handler(request, response) {
//   const data = await fetch("http:dev.to/api/articles?per_page=4&top=4");
//   const trendings = await data.json();
//   response.setHeader("Access-Control-Allow-Origin", "*");

//   response.status(200).json(trendings);
// }

export default async function handler(request, response) {
  const data = await fetch(
    "https://dev.to/api/articles?tag=design&per_page=15"
  );
  const posts = await data.json();
  response.setHeader("Access-Control-Allow-Origin", "*");

  response.status(200).json(posts);
}
