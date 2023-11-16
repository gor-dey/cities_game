type ChildrenType = {
  children: React.ReactNode;
};

export const LayoutProvider = ({ children }: ChildrenType) => (
  <div className="max-w-xl bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-2xl shadow-md box-border">
    {children}
  </div>
);
