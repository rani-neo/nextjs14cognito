import { useAuthenticator } from '@aws-amplify/ui-react';

const WelcomeName = () => {
  const { user, signOut} = useAuthenticator((context) => [context.user]);
  console.log(user);
  return (
    <>
      <p className="text-xl text-white">Welcome, {user && user.username ? user.username : "Guest"}!</p>
    </>
  );
};

export default WelcomeName;