import React from "react";
import logo from "../assets/images/resQlogo.svg";
import Image from "next/image";

const Header = () => {
  return (
    <div className="w-100 bg-black text-white sticky top-0 flex justify-center items-center h-16">
      Header Component(coming from MF 1)
      <Image src={logo} alt="logo" width="20" height="20" />
    </div>
  );
};

export default Header;

// import React from "react";
// import logo from "../assets/images/resQlogo.svg";
// import Image from "next/image";
// import { IcNotification } from "@jds/core-icons";

// const Header = () => {
//   return (
//     <>
//       <div className="w-100 bg-black text-white sticky top-0 flex justify-center items-center h-16">
//         Header Component(coming from MF 1)
//         {/* <Image src={logo} alt="logo" /> */}
//       </div>
//       {/* <IcNotification /> */}
//     </>
//   );
// };

// export default Header;
