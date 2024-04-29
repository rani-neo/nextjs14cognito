// components/Footer.tsx
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="bg-gray-700 p-4 text-center text-white">
      © 2024 Rashmi Neo. All rights reserved.
      <br />
      <Link href="https://github.com/rani-neo/nextjs14cognito">
        Visit my GitHub
      </Link>
    </footer>
  );
};