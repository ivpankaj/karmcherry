// app/login/page.tsx
import dynamic from "next/dynamic";

// Dynamically import client component
const LoginPage = dynamic(() => import('@/components/login/Main'));

const Page = async () => {
  // You can also fetch SSR data here if needed
  return <LoginPage />;
};

export default Page;
