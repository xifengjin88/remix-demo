import { useParams } from "@remix-run/react";

export default function NoteRoute() {
  const params = useParams();
  return <div>{params.noteId}</div>;
}
