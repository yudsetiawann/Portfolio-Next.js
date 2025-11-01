"use client"; // 1. WAJIB: Tandai sebagai Client Component

import { useState } from "react"; // 2. Impor 'useState' untuk mengelola state

export default function Contact() {
  // 3. Buat state untuk setiap input
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // 4. Fungsi yang akan berjalan saat formulir disubmit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Mencegah halaman refresh

    const phoneNumber = "6285186072004";

    // 5. Format pesan untuk WhatsApp
    // (%0A adalah kode untuk "baris baru")
    const waMessage = `
Halo,
Saya: ${name}
Email: ${email}

Pesan:
${message}
    `;

    // 6. Encode pesan agar aman untuk URL
    const encodedMessage = encodeURIComponent(waMessage);

    // 7. Buat URL WhatsApp
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // 8. Buka URL di tab baru
    window.open(url, "_blank");
  };

  return (
    <section id="contact" className="container py-20 md:py-24 bg-primary/50 reveal">
      <div className="max-w-2xl mx-auto">
        <h4 className="mb-2 text-lg font-bold text-center text-yellow-500 uppercase">Contact</h4>
        <h2 className="mb-4 text-3xl font-bold text-center text-foreground">Reach Out to Me</h2>
        <p className="max-w-2xl mx-auto mb-12 text-foreground/80 md:text-center">
          If you`d like to discuss, collaborate, or simply say hello, feel free to reach out! I`m always open to new opportunities and sharing insights. Send me a message via social media or email, and I`ll get back to you as soon as
          possible. 🚀✨
        </p>

        {/* 9. Hubungkan fungsi 'handleSubmit' ke 'onSubmit' formulir */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Baris Nama */}
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-foreground/80">
              Name
            </label>
            <input
              type="text"
              id="name"
              required
              className="w-full px-4 py-2 border rounded-lg bg-background text-foreground border-border focus:outline-none focus:ring-2 focus:ring-secondary"
              placeholder="Full Name"
              // 10. Hubungkan input ke state
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* Baris Email */}
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-foreground/80">
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              className="w-full px-4 py-2 border rounded-lg bg-background text-foreground border-border focus:outline-none focus:ring-2 focus:ring-secondary"
              placeholder="youremail@gmail.com"
              // 11. Hubungkan input ke state
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Baris Pesan */}
          <div>
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-foreground/80">
              Message
            </label>
            <textarea
              id="message"
              required
              rows={5}
              className="w-full px-4 py-2 border rounded-lg bg-background text-foreground border-border focus:outline-none focus:ring-2 focus:ring-secondary"
              placeholder="Write your message here..."
              // 12. Hubungkan input ke state
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          {/* Tombol Kirim (ini sudah benar) */}
          <div>
            <button type="submit" className="w-full px-6 py-3 font-semibold transition-opacity bg-yellow-500 rounded-lg text-secondary-foreground hover:opacity-90">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
