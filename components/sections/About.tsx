
'use client';

import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="section py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">About Us</h2>
            <p className="text-gray-600 mb-4">
              We are a team of passionate developers dedicated to creating beautiful and functional web experiences. Our mission is to combine cutting-edge technology with elegant design to deliver outstanding results.
            </p>
            <p className="text-gray-600">
              This landing page is a showcase of our skills, demonstrating our expertise in Next.js, shadcn UI, and GSAP animations.
            </p>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <Card className="w-full max-w-md shadow-lg overflow-hidden">
              <CardContent className="p-0">
                <Image
                  src="/placeholder-about.jpg"
                  alt="About Us"
                  width={500}
                  height={400}
                  className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-500"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
