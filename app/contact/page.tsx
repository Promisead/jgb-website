export default function Contact() {
  return (
    <section className="max-w-xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
      <form className="space-y-6">
        <div>
          <label className="block mb-2 font-medium">Name</label>
          <input type="text" className="w-full border rounded px-3 py-2" required />
        </div>
        <div>
          <label className="block mb-2 font-medium">Email</label>
          <input type="email" className="w-full border rounded px-3 py-2" required />
        </div>
        <div>
          <label className="block mb-2 font-medium">Message</label>
          <textarea className="w-full border rounded px-3 py-2" rows={4} required />
        </div>
        <button
          type="submit"
          className="bg-blue-900 text-white px-6 py-2 rounded hover:bg-blue-800 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}