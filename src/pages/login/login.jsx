import React, { useEffect, useState } from "react";
import Loading from "../../components/shared/Loading";
export default function login() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading && <Loading />}
      <div className="text-red-500">login</div>
    </>
  );
}
