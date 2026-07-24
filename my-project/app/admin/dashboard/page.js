import React from 'react';

// Next.js Server Side Rendering (SSR) implementation for dynamic user records fetch
async function getUsers(search = '') {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users?_limit=5`, { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to retrieve server data');
  let data = await res.json();
  
  if (search) {
    data = data.filter(user => user.name.toLowerCase().includes(search.toLowerCase()));
  }
  return data;
}

export default async function AdminDashboard({ searchParams }) {
  const params = await searchParams;
  const search = params?.search || '';
  const users = await getUsers(search);

  return (
    <div className="min-h-screen bg-gray-50 p-6 font-sans">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-md p-8">
        <div className="flex justify-between items-center border-b pb-4 mb-6">
          <h1 className="text-3xl font-bold text-blue-600">Dashboard</h1>
          <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm font-semibold">
            Logged in: knovator@mailinator.com
          </span>
        </div>

        {/* Search Bar Interface Wrapper */}
        <div className="mb-6">
          <form method="GET" className="flex gap-3">
            <input 
              type="text" 
              name="search" 
              defaultValue={search}
              placeholder="Search users by name..." 
              className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            />
            <button type="submit" className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition">
              Search
            </button>
          </form>
        </div>

        {/* User Data Table Element Layout Container */}
        <div className="overflow-x-auto rounded-lg border border-gray-200">
          <table className="min-w-full divide-y divide-gray-200 bg-white text-sm">
            <thead className="bg-gray-100 text-gray-700 font-semibold uppercase text-xs tracking-wider text-left">
              <tr>
                <th className="px-6 py-3">ID</th>
                <th className="px-6 py-3">Name</th>
                <th className="px-6 py-3">Email</th>
                <th className="px-6 py-3">Company</th>
                <th className="px-6 py-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 text-gray-800">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4 font-bold">{user.id}</td>
                  <td className="px-6 py-4">{user.name}</td>
                  <td className="px-6 py-4">{user.email}</td>
                  <td className="px-6 py-4">{user.company?.name || 'N/A'}</td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex justify-center gap-2">
                      <button className="px-3 py-1 text-xs bg-amber-500 text-white rounded font-medium hover:bg-amber-600">Update</button>
                      <button className="px-3 py-1 text-xs bg-red-500 text-white rounded font-medium hover:bg-red-600">Delete</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}