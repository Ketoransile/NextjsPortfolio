// "use client";

// import { Button } from "@nextui-org/react";
// import Link from "next/link";
// import React from "react";
// import { IoMdMenu } from "react-icons/io";
// import { IoMdClose } from "react-icons/io";

// const NavbarUi = () => {
//   const [isOpen, setIsOpen] = React.useState(false);
//   const [activeItem, setActiveItem] = React.useState("Home");
//   const handleMenuClick = (item) => {
//     setActiveItem(item);
//     setIsOpen(!isOpen);
//   };

//   return (
//     <>
//       <div className="max-lg:hidden flex justify-between text-slate-400 mx-40 px-12 py-2 border bg-navbar border-slate-600 shadow-xl rounded-lg items-center">
//         <div className="">
//           <h1>ABDI</h1>
//         </div>
//         <div className="">
//           <ul className="flex gap-6 tex-slate-600">
//             {["Home", "About", "Skills", "Projects"].map((item) => (
//               <li
//                 key={item}
//                 className={
//                   activeItem === item ? `text-white` : `text-slate-400`
//                 }
//               >
//                 <Link href="#" onClick={() => setActiveItem(item)}>
//                   {item}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>
//         <div className="">
//           <Button className="bg-primary text-white ">Contact </Button>
//         </div>
//       </div>
//       {/* mobile view */}
//       <div className="bg-navbar lg:hidden flex justify-between px-12 p-4 items-center">
//         <div>
//           {isOpen ? (
//             <IoMdClose
//               className="text-white text-xl"
//               onClick={handleMenuClick}
//             />
//           ) : (
//             <IoMdMenu
//               className="text-white text-xl"
//               onClick={handleMenuClick}
//             />
//           )}
//         </div>
//         <h1 className="text-slate-400 font-bold text-xl">ABDI</h1>
//         <div className="">
//           <Button className="bg-primary text-white ">Contact </Button>
//         </div>
//         <div className="absolute top-40 left-4">
//           {isOpen ? (
//             <div className="">
//               <ul className="flex flex-col">
//                 {["Home", "About", "Skills", "Projects"].map((item) => (
//                   <li
//                     key={item}
//                     className={
//                       activeItem === item ? `text-white` : `text-slate-400`
//                     }
//                   >
//                     <Link href="#" onClick={() => handleMenuClick(item)}>
//                       {item}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ) : (
//             ""
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default NavbarUi;
"use client";

import { Button } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

const NavbarUi = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [activeItem, setActiveItem] = React.useState("Home");

  const handleMenuClick = (item) => {
    setActiveItem(item);
    setIsOpen(false); // Close menu after clicking an item
  };

  return (
    <>
      {/* Desktop Navbar */}
      <div className="max-lg:hidden flex justify-between text-slate-400 mx-40 px-16 py-4 border-none bg-navbar  shadow-xl rounded-full items-center">
        <div>
          <h1>ABDI</h1>
        </div>
        <div>
          <ul className="flex gap-6 text-slate-600">
            {["Home", "About", "Skills", "Projects"].map((item) => (
              <li
                key={item}
                className={
                  activeItem === item ? `text-white` : `text-slate-400`
                }
              >
                <Link href="#" onClick={() => setActiveItem(item)}>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Button className="bg-primary text-white  rounded-full text-lg">
            Contact Me
          </Button>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="bg-navbar  lg:hidden flex justify-between mx-4 px-12 p-4 items-center rounded-full">
        {/* Menu Toggle */}
        <div>
          {isOpen ? (
            <IoMdClose
              className="text-white text-xl cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <IoMdMenu
              className="text-white text-xl cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>

        {/* Brand */}
        <h1 className="text-slate-400 font-bold text-xl">ABDI</h1>

        {/* Contact Button */}
        <div>
          <Button className="bg-primary text-white rounded-full">
            Contact
          </Button>
        </div>
      </div>

      {/* Mobile Menu Items */}
      {isOpen && (
        <div className="absolute top-24 left-4 p-4 rounded-lg shadow-lg w-11/12">
          <ul className="flex flex-col gap-4">
            {["Home", "About", "Skills", "Projects"].map((item) => (
              <li
                key={item}
                className={`cursor-pointer ${
                  activeItem === item
                    ? "text-white font-bold"
                    : "text-slate-400"
                }`}
              >
                <Link href="#" onClick={() => handleMenuClick(item)}>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default NavbarUi;
