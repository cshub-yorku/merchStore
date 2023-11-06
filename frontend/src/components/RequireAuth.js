import { Navigate, useLocation } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react';

const RequireAuth = ({ children }) => {
  const { isSignedIn } = useUser();
  const location = useLocation();

  if (!isSignedIn) {
    return <Navigate to="/sign-in" state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAuth;
