import { Navigate } from "react-router-dom";

export default function NotFound() {
  // Navigate back to home page
  return <Navigate to="/" />;
}
