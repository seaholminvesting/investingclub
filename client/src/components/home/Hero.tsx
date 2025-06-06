import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import HousePhoto from "../../public/HousePhoto.png";

const Hero = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        <motion.div 
          className="w-full lg:w-1/2 space-y-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Learn <span className="text-primary">Investing</span>, Grow Your <span className="text-secondary">Wealth</span>
          </h1>
          <p className="text-xl text-gray-600">
            Join our Seaholm high school's premier investing and finance club to gain essential financial literacy skills and start building wealth early.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-medium transition-transform hover:scale-105">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="border-gray-300 hover:border-primary text-gray-800 font-medium">
              Learn More
            </Button>
          </div>
        </motion.div>
        <motion.div 
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <img 
            src={HousePhoto}
            alt="House with money and finance" 
            className="rounded-xl shadow-lg w-full h-auto" 
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
