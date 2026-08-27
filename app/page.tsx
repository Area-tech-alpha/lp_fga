import Hero from "./components/Hero";
import LiveSection from "./components/LiveSection";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-black">
      <Hero />
      <LiveSection />
    </div>
  );
}
