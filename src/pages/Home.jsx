import CardMovie from "../components/CardMovie";

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      <CardMovie />
      <CardMovie />
    </div>
  );
}
