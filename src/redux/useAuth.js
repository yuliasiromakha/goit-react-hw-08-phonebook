import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectProfile, selectIsRefreshing } from './selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectProfile);

  return {
    isLoggedIn,
    isRefreshing,
    user,
  };
};