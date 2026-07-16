interface UserProps {
  name: string;
  age: number;
  email: string;
}

export default function UserCard({ name, age, email }: UserProps) {
  return (
    <div className="border rounded-lg p-4 shadow-md max-w-sm">
      <h2 className="text-xl font-bold">{name}</h2>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
    </div>
  );
}