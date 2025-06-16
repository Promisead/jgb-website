export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] py-16 px-4">
      <h2 className="text-4xl font-bold mb-4 text-blue-900">Welcome to JGB Accounting</h2>
      <p className="text-lg mb-8 max-w-2xl text-center">
        JGB Accounting provides professional, reliable, and tailored accounting services for businesses and individuals. 
        Let us help you achieve financial clarity and success with our expert team and personalized approach.
      </p>
      <a
        href="/contact"
        className="inline-block bg-blue-900 text-white px-6 py-3 rounded hover:bg-blue-800 transition"
      >
        Get Started
      </a>
    </section>
  );
}