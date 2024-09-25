const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="h-screen flex items-center justify-center relative mx-auto max-w-6xl bg-dark-1 font-spaceGrotesk">
      {children}
    </main>
  );
};

export default Layout;
