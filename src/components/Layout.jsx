const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-dark w-full lg:px-20 md:px-6 px-4 bg-gradient-to-r from-newYellow/10 via-newGreen/10 to-newCyan/10">
      {children}
    </div>
  );
};

export default Layout;
