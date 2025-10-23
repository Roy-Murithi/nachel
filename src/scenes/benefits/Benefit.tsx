import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

type Props = {
  icon: JSX.Element;
  title: string;
  description: string;
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefit = ({ icon, title, description, setSelectedPage }: Props) => {
  return (
    <motion.div
      variants={childVariant}
      className="group relative overflow-hidden rounded-2xl bg-white p-6 sm:p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
      
      <div className="relative z-10">
        <div className="mb-4 sm:mb-6 inline-block rounded-xl bg-gradient-to-r from-blue-100 to-purple-100 p-3 sm:p-4">
          {icon}
        </div>

        <h4 className="mb-3 sm:mb-4 text-xl sm:text-2xl font-bold text-gray-800 group-hover:text-blue-600">{title}</h4>
        <p className="mb-4 sm:mb-6 text-sm sm:text-base text-gray-600 leading-relaxed">{description}</p>
        
        <AnchorLink
          className="inline-flex items-center text-blue-600 transition-colors duration-300 hover:text-purple-600"
          onClick={() => setSelectedPage(SelectedPage.ContactUs)}
          href={`#${SelectedPage.ContactUs}`}
        >
          <span className="font-semibold">Learn More</span>
          <svg className="ml-2 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </AnchorLink>
      </div>
    </motion.div>
  );
};

export default Benefit;
