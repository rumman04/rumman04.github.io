export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
      <div className="space-y-4 text-center">
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-slate-700 border-t-sky-400" />
        <p className="text-lg">Preparing your portfolio...</p>
      </div>
    </div>
  );
}
