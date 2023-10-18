import React, { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from 'firebase/auth';
export default function Home() {
  const navigate = useNavigate();
  const [user]=useAuthState(auth)
  useEffect(() => {
    // Firebase'in gerçek zamanlı kullanıcı durumu dinleyicisini başlatıyoruz.
    const unsubscribe = auth.onAuthStateChanged((user) => {
      // Eğer kullanıcı giriş yapmamışsa, onu '/signup' sayfasına yönlendiriyoruz.
      if (!user) {
        navigate('/signup');
      }
    });

    // useEffect içerisinde döndürdüğümüz fonksiyon, bu hook'un temizleme fonksiyonudur.
    // Böylece component kaldırıldığında gerçek zamanlı dinleyiciyi de kaldırmış oluruz.
    return () => unsubscribe();
      
  }, [navigate]);
  const handleSignOut=()=>{
    signOut(auth)
  }

  return (
    <div className='text-red-500'>Home
    <p className='text-red-500'>isim:{user.displayName}</p>
    <p className='text-red-500'>isim:{user.email}</p>
    <img className='w-[300px]' src={user.photoURL} alt="" />
    <button onClick={handleSignOut}>sign out</button>
    </div>
  );
}
