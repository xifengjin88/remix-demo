import { Outlet } from "@remix-run/react";

export default function NotesLayout() {
  return (
    <div>
      <h1>Notes</h1>
      <aside>Sidebar</aside>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
