const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-[1100px] mx-auto min-h-screen bg-gray-200 flex flex-col">
      {children}
    </div>
  );
};

export default Container;
