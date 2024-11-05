import { ReactNode } from "react";

export const Container = ({ content }: { content: ReactNode }) => {
  return (
    <div className="w-[50%] h-[90%] relative mx-5">
      <div
        style={{ boxShadow: "6px 6px 10px 0px rgba(0, 0, 0, 0.4)" }}
        className="h-full w-full absolute bg-white opacity-20 rounded-md shadow-lg "
      ></div>
      <div className="h-full w-full absolute">{content}</div>
    </div>
  );
};

export const Card = ({
  label,
  desc,
  imageurl,
}: {
  label: string;
  desc: string;
  imageurl: string;
}) => {
  return (
    <GreenContainer>
      <div className="flex">
        <div>
          <div className=" text-2xl">{label}</div>
          <div className="w-[90%]">{desc}</div>
        </div>
        <div
          className="rounded w-[50%] h-[100%]"
          style={{
            backgroundImage: `url(${imageurl})`,
            backgroundSize: "contain",
          }}
        ></div>
      </div>
    </GreenContainer>
  );
};

export const GreenContainer = ({ children }: { children: ReactNode }) => (
  <div
    style={{
      boxShadow: "6px 6px 10px 0px rgba(0, 0, 0, 0.4)",
      backgroundColor: "#438372",
      borderRadius: "10px",
    }}
    className="mx-1 my-4 p-5 flex"
  >
    {children}
  </div>
);
