import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
       <section className="text-center py-16">
      <h2 className="text-4xl font-bold mb-4">Welcome to JGB Accounting</h2>
      <p className="text-lg mb-8">
        Professional accounting services tailored for your business needs.
      </p>
      <a
        href="/contact"
        className="inline-block bg-blue-900 text-white px-6 py-3 rounded hover:bg-blue-800 transition"
      >
        Get Started
      </a>
    </section>   
    </div>
  );
}
