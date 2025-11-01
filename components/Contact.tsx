export default function Contact() {
  return (
    // Kita beri latar belakang yang sama dengan 'About'
    <section id="contact" className="container py-20 md:pt-36 bg-primary/50">
      <div className="max-w-2xl mx-auto">
        <h4 className="mb-2 text-lg font-bold text-center text-yellow-500 uppercase">Contact</h4>
        <h2 className="mb-8 text-3xl font-bold text-center md:text-4xl">Reach Out to me</h2>

        {/* Kita gunakan <form> */}
        {/* 'onSubmit' adalah tempat logikanya nanti */}
        <form className="space-y-4">
          {/* Baris Nama */}
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-2 border rounded-lg bg-background text-foreground border-foreground/20 focus:outline-none focus:ring-2 focus:ring-secondary"
              placeholder="Full name"
            />
          </div>

          {/* Baris Email */}
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-2 border rounded-lg bg-background text-foreground border-foreground/20 focus:outline-none focus:ring-2 focus:ring-secondary"
              placeholder="your@gmail.com"
            />
          </div>

          {/* Baris Pesan */}
          <div>
            <label htmlFor="message" className="block mb-2 text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="w-full px-4 py-2 border rounded-lg bg-background text-foreground border-foreground/20 focus:outline-none focus:ring-2 focus:ring-secondary"
              placeholder="Drop your message here..."
            />
          </div>

          {/* Tombol Kirim */}
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
