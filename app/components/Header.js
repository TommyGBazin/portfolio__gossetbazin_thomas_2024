import Label from './Label';

export default function Header() {
  return (
    <div className="grid grid-cols-2 items-center">
      <Label>designer</Label>
      <Label>developer</Label>
    </div>
  );
}