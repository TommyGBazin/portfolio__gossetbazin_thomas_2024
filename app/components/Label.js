export default function Label({ children }) {
  return (
    <h2 className="text-sm text-gray-300 tracking-widest">
      {'('} <span className="px-2">{children}</span> {')'}
    </h2>
  );
} 