import { Link } from "@remix-run/react";

const users = [
  {
    id: "f4a9b1c0-1b5a-4b2c-9c5d-1f7a9b3c8d4e",
    username: "john-doe-92",
  },
  {
    id: "a2b3c4d5-e6f7-4a9b-8c1d-2e3f4a5b6c7d",
    username: "jane-smith-78",
  },
  {
    id: "1a2b3c4d-5e6f-4a7b-8c9d-1e2f3a4b5c6d",
    username: "mike-johnson-85",
  },
  {
    id: "a1b2c3d4-e5f6-4a7b-8c9d-1e2f3a4b5c6d",
    username: "sara-wilson-93",
  },
  {
    id: "1f2e3d4c-5b6a-4a7b-8c9d-1e2f3a4b5c6d",
    username: "david-brown-76",
  },
  {
    id: "a4b5c6d7-e8f9-4a1b-8c2d-3e4f5a6b7c8d",
    username: "emily-davis-81",
  },
  {
    id: "1a2b3c4d-5e6f-4a7b-8c9d-0e1f2a3b4c5d",
    username: "jacob-taylor-94",
  },
  {
    id: "a1b2c3d4-e5f6-4a7b-8c9d-1e2f3a4b5c6d",
    username: "olivia-anderson-87",
  },
  {
    id: "1f2e3d4c-5b6a-4a7b-8c9d-1e2f3a4b5c6d",
    username: "liam-martinez-90",
  },
  {
    id: "a4b5c6d7-e8f9-4a1b-8c2d-3e4f5a6b7c8d",
    username: "sophia-robinson-83",
  },
];

export default function UsersRoute() {
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <Link key={`${user.id}`} to={user.username}>
            <li key={user.id}>{user.username}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
