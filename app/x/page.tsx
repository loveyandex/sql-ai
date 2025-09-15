// app/page.tsx
export default function LandingPage() {
  return (
    <main className="min-h-screen bg-background text-foreground flex items-center justify-center">
      <div className="p-8 rounded-xl border border-border shadow-lg space-y-4">
        <h1 className="text-4xl font-bold text-primary">Amethyst Haze</h1>
        <p className="text-muted">
          This is a test of your TweakCN theme using TailwindCSS v3 and ShadCN UI.
        </p>
        <button className="px-4 py-2 rounded-md bg-accent text-accent-foreground hover:opacity-80 transition">
          Try Me
        </button>
      </div>
    </main>
  );
}
