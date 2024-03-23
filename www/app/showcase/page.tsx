import Gallery from "./components/gallery";

export default function Home() {
  return (
    <main className="select-none flex relative min-h-screen flex-col bg-[url('/texture.png')] overflow-hidden bg-white">
      <Gallery />
    </main>
  )
}
