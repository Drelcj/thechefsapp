"use client";
import { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const slides = [
  {
    title: "Welcome to The Chefs Culinary App",
    subtitle: "Explore our shop, school, and blog sections",
    cta: "Shop Now",
    link: "/shop",
    image: "https://res.cloudinary.com/dt3czltxx/image/upload/v1698896548/The%20Chefs%20Culinary%20Background.png"
  },
  {
    title: "Learn from the best at our School",
    subtitle: "Join our classes today",
    cta: "Join Now",
    link: "/school",
    image: "https://res.cloudinary.com/dt3czltxx/image/upload/v1706192658/The_Chefs_Culiground_nvcmqd.jpg"
  },
  {
    title: "Discover Delicious Recipes",
    subtitle: "Read our latest blog posts",
    cta: "Read Now",
    link: "/blog",
    image: "https://res.cloudinary.com/dt3czltxx/image/upload/v1706192655/The_Chefs_Culinary_Bad_rfx8lg.png"
  },
  {
    title: "Shop Fresh Ingredients",
    subtitle: "Browse our online store",
    cta: "Shop Now",
    link: "/shop",
    image: "https://res.cloudinary.com/dt3czltxx/image/upload/v1706192655/The_Chef_Background_hwznkg.jpg"
  },
  {
    title: "Join Our Culinary Community",
    subtitle: "Sign up for updates and special offers",
    cta: "Sign Up",
    link: "/signup",
    image: "https://res.cloudinary.com/dt3czltxx/image/upload/v1706192655/The_Chefs_Culinound_wqc3jm.jpg"
  }
];

const HeroSlider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const timer = setInterval(() => {
      setSlideIndex((prevSlideIndex) => (prevSlideIndex + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  if (!isClient) {
    return <div>Loading...</div>;
  }

  return (
    <div className="relative w-full h-[80vh] bg-cover bg-center">
      {slides.map((slide, index) => (
        <motion.div
          key={index}
          className={`absolute w-full h-[80vh] bg-cover bg-center transition-all duration-1000 ease-in-out ${slideIndex === index ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          style={{ backgroundImage: `url(${slide.image})` }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <div className="h-full flex flex-col justify-center items-center text-white">
            <motion.h1 className="text-4xl mb-4" whileHover={{ scale: 1.1 }}>{slide.title}</motion.h1>
            <motion.p className="text-xl mb-8" whileHover={{ scale: 1.1 }}>{slide.subtitle}</motion.p>
            <Link href={slide.link}>
              <motion.a className="px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-400 hover:text-black transition-colors duration-200" whileHover={{ scale: 1.1 }}>{slide.cta}</motion.a>
            </Link>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default HeroSlider;
