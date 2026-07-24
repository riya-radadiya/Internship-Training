export interface User {
  id: number;
  name: string;
  email: string;
  role: "admin" | "user";
}

let users: User[] = [
  {
    id: 1,
    name: "Admin",
    email: "admin@gmail.com",
    role: "admin",
  },
  {
    id: 2,
    name: "John",
    email: "user@gmail.com",
    role: "user",
  },
];

export function getUsers() {
  return users;
}

export function addUser(user: User) {
  users.push(user);
}

export function updateUser(user: User) {
  users = users.map((u) => (u.id === user.id ? user : u));
}

export function deleteUser(id: number) {
  users = users.filter((u) => u.id !== id);
}