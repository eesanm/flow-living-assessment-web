import Image from "next/image";
import { PropsWithChildren } from "react";

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      <div className="h-20 shrink-0 px-10 flex items-center border-b border-gray-200">
        <Image
          src={"/images/Logo.png"}
          width={100}
          height={50}
          alt="flow living"
        />
      </div>
      <main className="flex-grow overflow-y-scroll">{children}</main>
    </div>
  );
};
