import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Product from "./Product";
import { products } from "./types";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const ProductShowcase = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-gradient-to-b from-white to-blue-50 py-24">
      <motion.div
        className="mx-auto max-w-7xl px-8"
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mb-16 text-center"
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
              Featured Products
            </span>
          </HText>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
            Discover our extensive range of high-quality office supplies and equipment.
            From premium toners to bulk paper supplies, we have everything your business needs.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="mb-12 flex flex-wrap justify-center gap-4">
          {Array.from(new Set(products.map(p => p.category))).map((category) => (
            <button
              key={category}
              className="rounded-full bg-white px-6 py-2 text-sm font-semibold text-gray-700 shadow-md transition-all duration-300 hover:bg-blue-600 hover:text-white"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <motion.div
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.1 }
            }
          }}
        >
          {products.map((product, index) => (
            <Product
              key={`${product.name}-${index}`}
              {...product}
            />
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="mt-20 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-center text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <h3 className="text-2xl font-bold">Need Custom Bulk Orders?</h3>
          <p className="mx-auto mt-4 max-w-2xl text-blue-100">
            We specialize in large-volume orders for businesses and educational institutions.
            Contact our sales team for personalized quotes and special pricing.
          </p>
          <button className="mt-6 rounded-full border-2 border-white bg-transparent px-8 py-3 font-semibold text-white transition duration-300 hover:bg-white hover:text-blue-600">
            Request Quote
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProductShowcase;
