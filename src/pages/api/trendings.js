export default async function handler(request, response) {
  //   const page = req.query;
  const data = await fetch("http:dev.to/api/articles?per_page=4&top=4");
  const trendings = await data.json();
  response.setHeader("Access-Control-Allow-Origin", "*");

  response.status(200).json(trendings);
}
