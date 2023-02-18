import Image from 'next/image';
import { Inter } from '@next/font/google';
import Navbar from '@/component/Navbar';
import Footer from '@/component/Footer';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Footer />
    </div>
  );
}
