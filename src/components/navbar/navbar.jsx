import { FingerPrint } from "../../assets/auth";

const Navbar = () => {
  return (
    <header className="bg-tiffany-blue p-2 md:p-5 flex flex-row justify-center items-center gap-x-3">
      <img src={FingerPrint} width={50} height={50} alt="" className="w-10" />
      <p className="text-white gilory-semibold  text-[0.8rem] text-center md:text-2xl">
        <b> Phishing Warning</b>: please make sure you’re visiting{" "}
        <a className="text-white" href="https://seedify.fund">
          https://seedify.fund
        </a>
        - check the URL carefully.
      </p>
      <img src={FingerPrint} width={50} height={50} alt="" className="w-10" />
    </header>
  );
};

export { Navbar };
