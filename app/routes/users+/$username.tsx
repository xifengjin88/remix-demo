import { Link, useParams } from "@remix-run/react";

export default function UserProfileRoute() {
  const params = useParams();
  return (
    <div>
      <h1>User: {params.username}</h1>
      <Link to="notes">Notes</Link>
    </div>
  );
}
