import React from "react";
import { useNavigate } from "react-router-dom";

const permission = true;

const AdminPage = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!permission) {
      navigate("/login");
    }
  });
  return <h3>Panel admina - dzień dobry</h3>;
};

export default AdminPage;
