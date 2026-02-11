export default function Fab({ children }: { children: React.ReactNode }) {
  return (
    <div className="fixed bottom-2 right-2 z-10 flex max-h-screen flex-col overflow-hidden rounded-full border bg-background p-2 shadow-lg sm:bottom-3 sm:right-3">
      {children}
    </div>
  );
}
