
'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";

const Contact = () => {
  return (
    <section id="contact" className="section py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Get in Touch</h3>
            <p className="text-gray-600 mb-8">Have a question or want to work together? Fill out the form and we&apos;ll get back to you as soon as possible.</p>
            <form>
              <div className="mb-4">
                <Input type="text" placeholder="Your Name" className="w-full" />
              </div>
              <div className="mb-4">
                <Input type="email" placeholder="Your Email" className="w-full" />
              </div>
              <div className="mb-4">
                <Textarea placeholder="Your Message" className="w-full" />
              </div>
              <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white">Send Message</Button>
            </form>
          </div>
          <div>
            <Card className="bg-gray-50 p-8 shadow-lg">
              <CardContent>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
                <div className="flex items-center mb-4">
                  <FiMapPin className="w-6 h-6 text-blue-500 mr-4" />
                  <p className="text-gray-600">123 Main Street, Anytown, USA</p>
                </div>
                <div className="flex items-center mb-4">
                  <FiPhone className="w-6 h-6 text-blue-500 mr-4" />
                  <p className="text-gray-600">(123) 456-7890</p>
                </div>
                <div className="flex items-center">
                  <FiMail className="w-6 h-6 text-blue-500 mr-4" />
                  <p className="text-gray-600">contact@example.com</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
