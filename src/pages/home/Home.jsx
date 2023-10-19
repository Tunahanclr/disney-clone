import React, { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import Loading from "../../components/shared/Loading";
import Header from "../../components/home/Header";
export default function Home() {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  useEffect(() => {
    // Firebase'in gerçek zamanlı kullanıcı durumu dinleyicisini başlatıyoruz.
    const unsubscribe = auth.onAuthStateChanged((user) => {
      // Eğer kullanıcı giriş yapmamışsa, onu '/signup' sayfasına yönlendiriyoruz.
      if (!user) {
        navigate("/signup");
      }
    });

    // useEffect içerisinde döndürdüğümüz fonksiyon, bu hook'un temizleme fonksiyonudur.
    // Böylece component kaldırıldığında gerçek zamanlı dinleyiciyi de kaldırmış oluruz.
    return () => unsubscribe();
  }, [navigate]);


  return (
    <>
      {user ? (
        <div className="bg-[#1a1d29] h-screen" >
          <Header />
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}
