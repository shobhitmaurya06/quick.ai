import { useEffect, useRef } from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import gsap from "gsap";

const Navbar = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  const { openSignIn } = useClerk();

  // Refs for GSAP animation
  const navRef = useRef(null);
  const logoRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate navbar slide from top
      gsap.from(navRef.current, {
        y: -80,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
      });

      // Animate logo fade-in + scale
      gsap.from(logoRef.current, {
        scale: 0.6,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: "back.out(1.7)",
      });

      // Animate button (or user icon)
      gsap.from(buttonRef.current, {
        x: 60,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: "power3.out",
      });
    });

    return () => ctx.revert(); // cleanup on unmount
  }, []);

  return (
    <div
      ref={navRef}
      className="fixed z-50 w-full backdrop-blur-2xl flex justify-between items-center py-3 px-4 sm:px-20 xl:px-32"
    >
      <img
        ref={logoRef}
        src={assets.logo}
        alt="logo"
        className="w-32 sm:w-44 cursor-pointer object-contain max-h-14"
        onClick={() => navigate("/")}
      />
      <div ref={buttonRef}>
        {user ? (
          <UserButton />
        ) : (
          <button
            onClick={openSignIn}
            className="flex items-center gap-2 rounded-full text-sm cursor-pointer bg-primary text-white px-10 py-2.5 hover:bg-primary/90 transition"
          >
            Get Started <ArrowRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
