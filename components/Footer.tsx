export default function Footer() {
  const currentYear = new Date().getFullYear(); // Otomatis dapat tahun sekarang

  return (
    <footer className="border-t border-foreground/10">
      <div className="container px-5 py-6 text-center">
        <p className="text-sm text-foreground/70">© {currentYear} yudsetiawann. Made with ❤️ using Next.js.</p>
        {/* Di sini Anda bisa menambahkan link media sosial jika mau */}
      </div>
    </footer>
  );
}
