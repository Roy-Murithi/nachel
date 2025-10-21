import ActionButton from "@/shared/ActionButton";
import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import {
  ComputerDesktopIcon,
  AcademicCapIcon,
  TruckIcon,
  CubeIcon,
  ShieldCheckIcon,
  ClockIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
import Benefit from "./Benefit";

const benefits: Array<BenefitType> = [
  {
    icon: <ComputerDesktopIcon className="h-8 w-8 text-blue-600" />,
    title: "Premium Equipment",
    description:
      "Top-quality computers, laptops, and office equipment from leading brands. We ensure you get the best technology for your needs.",
  },
  {
    icon: <AcademicCapIcon className="h-8 w-8 text-purple-600" />,
    title: "Professional Training",
    description:
      "Comprehensive computer training programs led by industry experts. From basics to advanced software, we've got you covered.",
  },
  {
    icon: <TruckIcon className="h-8 w-8 text-green-600" />,
    title: "Fast Bulk Delivery",
    description:
      "Efficient bulk ordering and timely delivery services. We handle large orders with the same care and precision as small ones.",
  },
  {
    icon: <CubeIcon className="h-8 w-8 text-orange-600" />,
    title: "Complete Solutions",
    description:
      "From individual items to complete office setups, we provide comprehensive solutions for all your business needs.",
  },
  {
    icon: <ShieldCheckIcon className="h-8 w-8 text-red-600" />,
    title: "Quality Guarantee",
    description:
      "All our products come with quality assurance and warranty. We stand behind every item we sell.",
  },
  {
    icon: <ClockIcon className="h-8 w-8 text-indigo-600" />,
    title: "24/7 Support",
    description:
      "Round-the-clock technical support and customer service. We're here when you need us.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="bg-gradient-to-b from-blue-50 to-purple-50 py-24">
      <div className="mx-auto max-w-7xl px-8">
        <motion.div
          onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
        >
          {/* HEADER */}
          <motion.div
            className="mx-auto mb-20 text-center md:w-4/5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: -50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <HText>
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Complete Technology Solutions
              </span>
            </HText>
            <p className="mt-8 text-lg leading-relaxed text-gray-700">
              We deliver comprehensive technology and office solutions, from premium computer equipment 
              to professional training services. With our bulk delivery capabilities and expert support, 
              we're your one-stop destination for all business and educational needs.
            </p>
          </motion.div>

          {/* BENEFITS */}
          <motion.div
            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={container}
          >
            {benefits.map((benefit: BenefitType) => (
              <Benefit
                key={benefit.title}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
                setSelectedPage={setSelectedPage}
              />
            ))}
          </motion.div>

        {/* CALL TO ACTION */}
        <div className="mt-32 rounded-3xl bg-gradient-to-r from-blue-600 to-purple-600 p-12 text-white">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <h2 className="text-4xl font-bold leading-tight">
                Transform Your Workspace with Premium Technology
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-blue-100">
                From individual computers to complete office setups, we provide everything 
                you need to create a modern, efficient workplace. Our expert team is ready 
                to help you choose the perfect solutions for your needs.
              </p>
              
              <div className="mt-10 flex flex-wrap justify-center gap-6">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Get Started Today
                </ActionButton>
                <button 
                  className="rounded-full border-2 border-white bg-transparent px-10 py-2 text-white transition duration-300 hover:bg-white hover:text-blue-600"
                  onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                >
                  Contact Sales
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
    </section>
  );
};

export default Benefits;
