
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FiCode, FiDatabase, FiPenTool } from "react-icons/fi";

const features = [
  {
    title: "Modern Stack",
    description: "Built with the latest technologies: Next.js, Tailwind CSS, and GSAP.",
    icon: <FiCode className="w-10 h-10 text-blue-500" />,
  },
  {
    title: "Animated & Interactive",
    description: "Engaging user experience with smooth animations powered by GSAP.",
    icon: <FiPenTool className="w-10 h-10 text-green-500" />,
  },
  {
    title: "Easy to Customize",
    description: "Components and styles are designed to be easily customizable.",
    icon: <FiDatabase className="w-10 h-10 text-purple-500" />,
  },
];

const Features = () => {
  return (
    <section id="features" className="section py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
              <CardHeader>
                <div className="mx-auto bg-gray-100 rounded-full p-4 w-24 h-24 flex items-center justify-center">
                  {feature.icon}
                </div>
                <CardTitle className="mt-6 text-2xl font-bold text-gray-800">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
