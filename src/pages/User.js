import React from "react";
import { useParams } from "react-router-dom";

export default function UserPage() {
  const params = useParams();
  return (
    <div>
      <h3>User {params.id} Page</h3>
    </div>
  );
}
