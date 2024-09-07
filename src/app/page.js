import { allBlogs } from "contentlayer/generated"
import HomeCoverSection from "../components/Home/HomeCoverSection";
import "./globals.css";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <HomeCoverSection blogs={allBlogs}/>
    </main>
  );
}
