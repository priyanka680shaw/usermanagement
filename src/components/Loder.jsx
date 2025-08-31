import { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

function ClipLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // simulate API call
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      {loading ? (
        <ClipLoader color="#36d7b7" size={60} />
      ) : (
        <h1 className="text-2xl font-bold">Data Loaded!</h1>
      )}
    </div>
  );
}

export default ClipLoader;
