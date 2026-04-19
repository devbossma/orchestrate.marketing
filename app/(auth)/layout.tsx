// Exists because /login and /signup should share a minimal centered-card shell,
// distinct from the full app shell on /dashboard.
// The (auth) group keeps the URLs clean: /login not /auth/login.

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-background flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="w-full max-w-sm">{children}</div>
    </div>
  );
}
