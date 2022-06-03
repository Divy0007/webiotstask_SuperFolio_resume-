import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light px-sm-5 position-sticky top-0">
      <div className="container-fluid">
        <NavLink
          to="/"
          className="text-decoration-none color-secondary text-dark fw-bold"
        >
          Super Folio
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0 "> */}
          <ul className="navbar-nav  justify-content-end ">
            <li className="nav-item mx-2">
              <NavLink
                to="/about"
                className="text-decoration-none text-dark nav-link"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink
                to="/Services"
                className="text-decoration-none text-dark nav-link"
              >
                Services
              </NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink
                to="/Skils"
                className="text-decoration-none text-dark nav-link"
              >
                Skils
              </NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink
                to="/Portfolio"
                className="text-decoration-none text-dark nav-link"
              >
                Portfolio
              </NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink
                to="/Experience"
                className="text-decoration-none text-dark nav-link"
              >
                Experience
              </NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink
                to="/contact"
                className="text-decoration-none text-dark nav-link"
              >
                contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// const Navbar = () => {
//   const [width, setWidth] = useState(null);
//   useEffect(() => {
//     setWidth(window.innerWidth);
//     window.addEventListener("resize", () => setWidth(window.innerWidth));
//   }, [width]);

//   if (width > 768) {
//     return (
//       <div className="fixed-top">
//         <nav className="navbar bg-light">
//           <div className="container-sm">
//             <span className="navbar-brand mb-0 h1">
//               <NavLink
//                 to="/"
//                 className="text-decoration-none color-secondary text-dark"
//               >
//                 Super Folio
//               </NavLink>
//             </span>
//             <ul className="nav justify-content-end">
//   <li className="nav-item mx-2">
//     <NavLink to="/about" className="text-decoration-none text-dark">
//       About
//     </NavLink>
//   </li>
//   <li className="nav-item mx-2">
//     <NavLink
//       to="/Services"
//       className="text-decoration-none text-dark"
//     >
//       Services
//     </NavLink>
//   </li>
//   <li className="nav-item mx-2">
//     <NavLink to="/Skils" className="text-decoration-none text-dark">
//       Skils
//     </NavLink>
//   </li>
//   <li className="nav-item mx-2">
//     <NavLink
//       to="/Portfolio"
//       className="text-decoration-none text-dark"
//     >
//       Portfolio
//     </NavLink>
//   </li>
//   <li className="nav-item mx-2">
//     <NavLink
//       to="/Experience"
//       className="text-decoration-none text-dark"
//     >
//       Experience
//     </NavLink>
//   </li>
//   <li className="nav-item mx-2">
//     <NavLink
//       to="/contact"
//       className="text-decoration-none text-dark"
//     >
//       contact
//     </NavLink>
//   </li>
//             </ul>
//           </div>
//         </nav>
//       </div>
//     );
//   } else {
//     return (
//       <div className="fixed-top">
//         <nav className="navbar bg-light fixed-top">
//           <div className="container-fluid">
//             <NavLink
//               to="/"
//               className="text-decoration-none color-secondary text-dark"
//             >
//               <h2 className="fw-bold">Super Folio</h2>
//             </NavLink>
//             <button
//               className="navbar-toggler"
//               type="button"
//               data-bs-toggle="offcanvas"
//               data-bs-target="#offcanvasNavbar"
//               aria-controls="offcanvasNavbar"
//             >
//               <span className="navbar-toggler-icon"></span>
//             </button>
//             <div
//               className="offcanvas offcanvas-end"
//               tabIndex="-1"
//               id="offcanvasNavbar"
//               aria-labelledby="offcanvasNavbarLabel"
//             >
//               <div className="offcanvas-header">
//                 <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
//                   <NavLink
//                     to="/"
//                     className="text-decoration-none color-secondary text-dark"
//                   >
//                     Super Folio
//                   </NavLink>
//                 </h5>
//                 <button
//                   type="button"
//                   className="btn-close"
//                   data-bs-dismiss="offcanvas"
//                   aria-label="Close"
//                 ></button>
//               </div>
//               <div className="offcanvas-body">
//                 <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
//                   <li className="nav-item my-2" data-bs-dismiss="offcanvas">
//                     <NavLink
//                       to="/about"
//                       className="text-decoration-none text-dark"
//                     >
//                       About
//                     </NavLink>
//                   </li>
//                   <li className="nav-item my-2" data-bs-dismiss="offcanvas">
//                     <NavLink
//                       to="/Services"
//                       className="text-decoration-none text-dark"
//                     >
//                       Services
//                     </NavLink>
//                   </li>
//                   <li className="nav-item my-2" data-bs-dismiss="offcanvas">
//                     <NavLink
//                       to="/Skils"
//                       className="text-decoration-none text-dark"
//                     >
//                       Skils
//                     </NavLink>
//                   </li>
//                   <li className="nav-item my-2" data-bs-dismiss="offcanvas">
//                     <NavLink
//                       to="/Portfolio"
//                       className="text-decoration-none text-dark"
//                     >
//                       Portfolio
//                     </NavLink>
//                   </li>
//                   <li className="nav-item my-2" data-bs-dismiss="offcanvas">
//                     <NavLink
//                       to="/Experience"
//                       className="text-decoration-none text-dark"
//                     >
//                       Experience
//                     </NavLink>
//                   </li>
//                   <li className="nav-item my-2" data-bs-dismiss="offcanvas">
//                     <NavLink
//                       to="/contact"
//                       className="text-decoration-none text-dark"
//                     >
//                       contact
//                     </NavLink>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </nav>
//       </div>
//     );
//   }
// };

// export default Navbar;
