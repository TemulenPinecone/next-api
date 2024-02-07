import { Main } from "next/document";

export default function Home() {
  async function getArticle() {
    const res = await fetch("https://dev.to/api/articles/1747862");
    const article = await res.json();
  }
  getArticle;

  return (
    <main>
      <div></div>;
    </main>
  );
}
