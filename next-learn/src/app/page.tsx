import Image from "next/image";

export default function Home() {
  return (<div className="flex flex-wrap items-center justify-items-center min-h-screen p-8 pb-5 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <div className="text-center">
      <h1 className="text-xl font-bold">Welcome to contact manager</h1>
      <p className="text-lg text-gray-600">Manage your contact easily and efficiently</p>
    </div>
    <Image src="/images.jpeg" alt="contact manager" width={300} height={300} className="rounded-lg shadow-lg" />

    <div className="text-center">
      <p className="text-lg text-gray-600">Stat managing the contacts today </p>
    </div>
  </div>
  );
}
