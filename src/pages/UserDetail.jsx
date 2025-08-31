 import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import UserForm from "../components/UserForm";

function UserDetail() {
  const { id } = useParams();
  console.log(id)
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((err) => console.error(err));
  }, [id]);

  const handleUpdate = (updatedUser) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "PUT",
      body: JSON.stringify(updatedUser),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((res) => res.json())
      .then(() => navigate("/"))
      .catch((err) => console.error(err));
  };

  return user ? <UserForm user={user} onSubmit={handleUpdate} /> : <p>Loading...</p>;
}

export default UserDetail;
