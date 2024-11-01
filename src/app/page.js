"use client"
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    })
    AOS.refresh()
  }, [])
  return (
    <div>
      <Navbar />
      <Hero />
    </div>
  );
}
