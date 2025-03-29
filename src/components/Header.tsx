
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Download } from "lucide-react";

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <header className="relative flex flex-col lg:flex-row items-center justify-between min-h-screen px-6 lg:px-20 py-20">
      <div className={`w-full lg:w-1/2 space-y-6 mb-10 lg:mb-0 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
        <h2 className="text-lg md:text-xl font-medium text-accent">Hello, I'm</h2>
        <h1 className="text-4xl md:text-6xl font-bold text-primary">John Developer</h1>
        <p className="text-xl md:text-2xl text-secondary/80 mt-2 font-light">
          Frontend Developer & UI/UX Enthusiast
        </p>
        <p className="text-base md:text-lg text-primary/70 mt-4 max-w-lg">
          I create responsive websites with modern technologies that help businesses 
          achieve their goals and improve their online presence.
        </p>
        
        <div className="flex space-x-4 mt-8">
          <Button className="btn btn-accent">
            Download CV <Download className="ml-2 h-4 w-4" />
          </Button>
          <Button className="btn btn-outline" onClick={() => {
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
          }}>
            Explore Work <ArrowDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <div className={`w-full lg:w-1/2 flex justify-center items-center ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-accent to-primary rounded-full blur opacity-30"></div>
          <img
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=600&q=80"
            alt="John Developer"
            className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-white shadow-xl"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
