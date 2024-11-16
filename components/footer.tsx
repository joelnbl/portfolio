export default function Footer() {
  return (
    <footer className="border-t bg-secondary px-4 md:pl-40">
      <div className="container block md:flex h-14 items-center justify-between">
        <p className="text-sm text-muted-foreground">
          <span className="text-primary font-mono">const</span>{" "}
          <span className="text-blue-400">year</span> ={" "}
          {new Date().getFullYear()};
        </p>
        <p className="text-sm text-muted-foreground font-mono">
          Built with Next.js & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}