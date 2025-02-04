import Image from "next/image";
import loader from "@/assets/loader.gif";

const LoadingPage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "auto",
        width: "auto",
      }}
    >
      <Image
        src={loader}
        height={150}
        width={150}
        style={{ width: "auto", height: "auto" }}
        alt="Loading..."
      />
    </div>
  );
};

export default LoadingPage;
