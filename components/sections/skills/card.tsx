interface Props {
  title: string;
}

export default function Card({ title }: Props) {
  return <div className="w-46 h-64 bg-card border rounded-md">{title}</div>;
}
