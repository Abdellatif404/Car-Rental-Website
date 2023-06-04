import { useEffect, useState } from 'react';

const useAuthentication = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const userId = localStorage.getItem('id');
    setIsLoggedIn(Boolean(userId));
    setIsLoading(false);
  }, []);

  const setLoggedIn = (value) => {
    setIsLoggedIn(value);
  };

  return { isLoggedIn, isLoading, setLoggedIn };
};

export default useAuthentication;
