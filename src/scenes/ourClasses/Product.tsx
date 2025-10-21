import { motion } from "framer-motion";

type Props = {
    name: string;
    description: string;
    image: string;
    category: string;
};

const Product = ({ name, description, image, category }: Props) => {
    return (
        <motion.div 
            className="group relative mx-4 flex w-[300px] flex-col overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            {/* Image Container */}
            <div className="relative h-[250px] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <img 
                    alt={name} 
                    src={image} 
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 transition-all duration-300 group-hover:bottom-2 group-hover:opacity-100">
                    <p className="text-sm font-medium">{description}</p>
                </div>
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col p-6">
                <div className="mb-2">
                    <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-600">
                        {category}
                    </span>
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">{name}</h3>
            </div>
        </motion.div>
    );
};

export default Product;