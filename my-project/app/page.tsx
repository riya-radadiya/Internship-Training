import UserCard from "./components/UserCard";

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen">
      <UserCard
        name="Riya Radadiya"
        age={21}
        email="riya@example.com"
      />
    </main>
  );
}