export default function SectionTitle({ title }: { title: string }) {
  return (
    <div className="mb-12 text-center">
      <h2 className="text-2xl lg:text-4xl font-redhat font-bold text-main">
        {title}
      </h2>
    </div>
  );
}
