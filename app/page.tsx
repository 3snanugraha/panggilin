'use client';
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [services] = useState([
    { name: "Jasa Tukang", image: "/tukang-services.svg" },
    { name: "Jasa Pungut Sampah", image: "/cleaning-services.svg" },
    { name: "Jasa Kebersihan", image: "/cleaninghome-services.svg" },
    // Tambahkan jasa lainnya
  ]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-gray-800 text-white p-4 flex items-center justify-between">
        <div className="text-2xl font-bold">Panggilin</div>
        <a 
          href="/signup" 
          className="bg-[#7E57C2] hover:bg-[#6D4BBF] text-white py-2 px-4 rounded-full"
        >
          Daftar
        </a>
      </header>

      {/* Hero Section */}
      <section id="hero" className="flex items-center justify-between h-screen bg-gray-100 p-8">
        {/* Kiri: Title dan Button */}
        <div className="flex-1 text-left">
          <h1 className="text-5xl font-extrabold text-gray-800">
            Temukan Jasa Terbaik <br /> dengan Panggilin
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Kami membantu Anda menghubungkan dengan penyedia jasa profesional untuk berbagai kebutuhan.
          </p>
          <a 
            href="#services" 
            className="mt-6 inline-block bg-[#7E57C2] hover:bg-[#6D4BBF] text-white py-3 px-6 rounded-full"
          >
            Lihat Jasa
          </a>
        </div>

        {/* Kanan: Gambar/SVG */}
        <div className="flex-1 flex justify-center">
          <Image
            src="/services.svg"
            alt="Hero Illustration"
            width={500}
            height={500}
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* Jasa yang Tersedia */}
      <section id="services" className="p-8 bg-gray-100">
        <h2 className="text-3xl font-bold text-center text-gray-800">Jasa yang Tersedia</h2>
        <p className="text-center text-gray-600 mt-2">
          Pilih layanan yang sesuai dengan kebutuhan Anda.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white shadow-lg rounded-xl overflow-hidden transform hover:scale-105 transition-transform flex flex-col items-center text-center"
            >
              <div className="relative w-full h-48">
                <Image 
                  src={service.image} 
                  alt={service.name} 
                  layout="fill" 
                  objectFit="contain" 
                  className="p-4"
                />
              </div>
              <div className="p-4 flex flex-col items-center">
                <h4 className="font-semibold text-lg text-gray-800">{service.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cara Kerja */}
      <section id="how-it-works" className="p-8 bg-white">
        <h2 className="text-3xl font-bold text-center text-gray-800">Cara Kerja Panggilin</h2>
        <div className="flex flex-wrap justify-around mt-8 w-full">
          {[
            { step: "1", title: "Daftar Akun", desc: "Buat akun Anda untuk mulai menggunakan layanan kami." },
            { step: "2", title: "Cari Jasa", desc: "Pilih jasa sesuai kebutuhan Anda dari berbagai mitra terpercaya." },
            { step: "3", title: "Hubungi Mitra", desc: "Komunikasikan langsung dengan mitra untuk detail lebih lanjut." },
            { step: "4", title: "Nikmati Layanan", desc: "Terima layanan berkualitas dari mitra kami." },
          ].map((item) => (
            <div key={item.step} className="flex flex-col items-center basis-full md:basis-1/4 text-center w-1/4 p-4">
              <div className="text-4xl font-bold bg-[#7E57C2] text-white w-12 h-12 flex items-center justify-center rounded-full">
                {item.step}
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-800">{item.title}</h3>
              <p className="mt-2 text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Daftar Sekarang */}
      <section id="signup" className="bg-[#7E57C2] text-white p-12 text-center">
        <h2 className="text-3xl font-bold">Daftar Sekarang dan Temukan Solusi Terbaik</h2>
        <p className="mt-4 text-lg">
          Bergabunglah dengan kami dan nikmati berbagai layanan berkualitas.
        </p>
        <a href="/signup" className="mt-6 inline-block bg-white text-[#7E57C2] hover:bg-gray-200 py-3 px-6 rounded-full">
          Daftar Sekarang
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-6 text-center">
        <p>&copy; {new Date().getFullYear()} Panggilin. Semua hak dilindungi.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="hover:underline">Kebijakan Privasi</a>
          <a href="#" className="hover:underline">Syarat & Ketentuan</a>
          <a href="#" className="hover:underline">Kontak Kami</a>
        </div>
      </footer>
    </div>
  );
}
