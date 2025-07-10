export default function SectionTitle({ title }: { title: string }) {
  return (
    <div className="mb-12 text-center">
      <h2 className="text-4xl font-bold text-gray-800">{title}</h2>
      <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded"></div>
    </div>
  );
}
