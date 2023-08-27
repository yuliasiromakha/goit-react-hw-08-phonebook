import { useSelector } from 'react-redux';

export const useAuth = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const isRefreshing = useSelector(state => state.auth.isLoading);
  const user = useSelector(state => state.auth.profile);

  return {
    isLoggedIn,
    isRefreshing,
    user,
  };
};