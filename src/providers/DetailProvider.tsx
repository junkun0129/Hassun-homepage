import { createContext, ReactNode, useContext, useState } from "react";
type Props = {
  height: number;
  setheight: (s: number) => void;
};
export const DetailContext = createContext<Props | undefined>(undefined);

const DetailProvider = ({ children }: { children: ReactNode }) => {
  const [height, setheight] = useState<number>(0);
  return (
    <DetailContext.Provider value={{ height, setheight }}>
      {children}
    </DetailContext.Provider>
  );
};

export const useDetailContext = () => {
  const context = useContext(DetailContext);
  if (context === undefined) {
    throw new Error("useDetailContext must be used within a DetailProvider");
  }
  return context;
};

export default DetailProvider;
