// import logo from "../../public/images/Excess-logo.png";
// import {
//   Youtube,
//   Facebook,
//   Instagram,
//   MapPin,
//   Mail,
//   Phone,
// } from "lucide-react";

// export function SiteFooter() {
//   return (
//     <footer className="mt-16 bg-yellow-600 text-yellow-50 w-full">
//       <div className="flex flex-col mx-auto max-w-7xl px-10 py-8">
//         <div className="flex justify-between gap-x-6">
//           <div className="space-y-4">
//             <div className="text-2xl font-extrabold">
//               <img src={logo} alt="Logo" className="w-28 h-20" />
//               <div className="flex items-center gap-4 hover:cursor-pointer mt-2">
//                 <Youtube className="w-8 h-8 text-white opacity-75" />
//                 <Facebook className="w-8 h-8 text-white opacity-75 " />
//                 <Instagram className="w-8 h-8 text-white opacity-75" />
//               </div>
//             </div>
//           </div>
//           <div className="text-sm space-y-2 text-neutral-50 pt-5">
//             <div className="flex gap-x-2">
//               <MapPin className="w-5 h-5" />
//               Kothaguda, Hitech City, Hyderabad, 500084
//             </div>
//             <div className="flex gap-x-2">
//               <Mail className="w-4 h-4" />
//               customerservice@Xcess.com
//             </div>
//             <div className="flex gap-x-2">
//               <Phone className="w-4 h-4" />
//               +91 80694 05400
//             </div>
//           </div>

//           {/* <div>
//             <h4 className="font-semibold mb-3">Services</h4>
//             <ul className="text-sm space-y-2 text-purple-100/80">
//               <li>
//                 <a href="#">Xcess Baggage</a>
//               </li>
//               <li>
//                 <a href="#">Package Delivery</a>
//               </li>
//               <li>
//                 <a href="#">Airport Transfer</a>
//               </li>
//               <li>
//                 <a href="#">Storage</a>
//               </li>
//             </ul>
//           </div> */}

//           <div className="flex gap-x-2 pt-5">
//             {/* <h4 className="font-semibold mb-3">Company</h4> */}
//             <div className="flex justify-between gap-x-4 text-sm space-y-2 text-neutral-50">
//               <div>
//                 <a href="#">About Us</a>
//               </div>
//               <div>
//                 <a href="#">Contact</a>
//               </div>
//               <div>
//                 <a href="#">How We Work</a>
//               </div>
//             </div>
//           </div>

//           {/* <div className="space-y-4">
//             <h4 className="font-semibold">Subscribe</h4>
//             <p className="text-sm text-purple-100/80">
//               Get special offers, giveaways, and once‑in‑a‑lifetime deals.
//             </p>
//             <div className="flex gap-2">
//               <Input
//                 placeholder="Enter email address"
//                 className="bg-white text-foreground"
//               />
//               <Button variant="secondary">Subscribe</Button>
//             </div>
//             <div className="pt-2">
//               <p className="text-xs uppercase tracking-wide text-purple-100/70">
//                 Download our app
//               </p>
//               <div className="mt-2 flex gap-2">
//                 <Button
//                   variant="secondary"
//                   className="bg-black text-white hover:bg-black/90 text-xs"
//                 >
//                   App Store
//                 </Button>
//                 <Button
//                   variant="secondary"
//                   className="bg-black text-white hover:bg-black/90 text-xs"
//                 >
//                   Google Play
//                 </Button>
//               </div>
//             </div>
//           </div> */}
//         </div>

//         <div className="mt-5 pt-4 text-xs text-neutral-50 flex flex-col gap-x-6 gap-y-4">
//           <div className="w-full h-[1px] bg-neutral-300"></div>
//           <div className="flex justify-between">
//             <div>©2025 Xcess. All rights reserved.</div>
//             <div className="flex justify-center gap-x-4">
//               <a href="#" className="hover:text-white">
//                 Terms
//               </a>
//               <a href="#" className="hover:text-white">
//                 Privacy
//               </a>
//               <a href="#" className="hover:text-white">
//                 Booking Policy
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

import logo from "../../public/images/Excess-logo.png";
import {
  Youtube,
  Facebook,
  Instagram,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-16 bg-yellow-500 text-yellow-50 w-full">
      <div className="flex flex-col mx-auto max-w-7xl px-6 md:px-10 py-8">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8">
          {/* Logo & Socials */}
          <div>
            <img src={logo} alt="Logo" className="w-28 h-20" />
            <div className="flex items-center gap-4 hover:cursor-pointer mt-2">
              <Youtube className="w-8 h-8 text-white opacity-75" />
              <Facebook className="w-8 h-8 text-white opacity-75" />
              <Instagram className="w-8 h-8 text-white opacity-75" />
            </div>
          </div>
          {/* Address & Contact */}
          <div className="text-sm space-y-2 text-neutral-50 md:pt-4">
            <div className="flex gap-x-2 items-center">
              <MapPin className="w-4 h-4 flex-shrink-0" />
              <span>
                610, Shah & Nahar Industrial Estate, Dr.E.Moses Road, Worli,
                Mumbai, India - 400018
              </span>
            </div>
            <div className="flex gap-x-2 items-center">
              <Mail className="w-4 h-4" />
              <span>customerservice@Xcess.com</span>
            </div>
            <div className="flex gap-x-2 items-center">
              <Phone className="w-4 h-4" />
              <span>+91 1800221945</span>
            </div>
          </div>
          {/* Menu Links */}
          <div className="flex sm:flex-col flex-row gap-2 justify-between text-sm text-neutral-50 pt-2 md:pt-4">
            <a href="/about">About Us</a>
            <a href="/contact">Contact</a>
            <a href="/work">How We Work</a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-6 pt-4 text-xs text-neutral-50 flex flex-col gap-y-4">
          <div className="w-full h-[1px] bg-neutral-300"></div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-y-4">
            <div>©2025 Xcess. All rights reserved.</div>
            <div className="flex gap-x-4">
              <a href="#" className="hover:text-white">
                Terms
              </a>
              <a href="#" className="hover:text-white">
                Privacy
              </a>
              <a href="#" className="hover:text-white">
                Booking Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
