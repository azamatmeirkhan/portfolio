export function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-[var(--text)]/10">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm text-[var(--text-muted)]">
          © {new Date().getFullYear()} Azamat Meirkhan
        </p>
      </div>
    </footer>
  );
}
