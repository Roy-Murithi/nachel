import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CarouselImage } from './types';

type Props = {
    images: CarouselImage[];
};

const Carousel = ({ images }: Props) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 5000);

        return () => clearInterval(timer);
    }, [currentIndex]);

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        })
    };

    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset: number, velocity: number) => {
        return Math.abs(offset) * velocity;
    };

    const paginate = (newDirection: number) => {
        setDirection(newDirection);
        setCurrentIndex((prevIndex) => (prevIndex + newDirection + images.length) % images.length);
    };

    const nextSlide = () => paginate(1);
    const previousSlide = () => paginate(-1);

    return (
        <div className="relative h-[700px] w-full overflow-hidden rounded-2xl bg-gradient-to-r from-blue-400 to-purple-500 shadow-2xl">
            <AnimatePresence initial={false} custom={direction}>
                <motion.div
                    key={currentIndex}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 }
                    }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    onDragEnd={(e, { offset, velocity }) => {
                        const swipe = swipePower(offset.x, velocity.x);

                        if (swipe < -swipeConfidenceThreshold) {
                            paginate(1);
                        } else if (swipe > swipeConfidenceThreshold) {
                            paginate(-1);
                        }
                    }}
                    className="absolute h-full w-full"
                >
                    <div className="relative h-full w-full">
                        <img
                            src={images[currentIndex].url}
                            alt={images[currentIndex].title}
                            className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/30 " />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 p-8 text-white">
                            <h3 className="text-3xl font-bold">{images[currentIndex].title}</h3>
                            <p className="mt-2 text-lg">{images[currentIndex].description}</p>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
            
            <button
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/30 p-3 text-white backdrop-blur-sm transition hover:bg-white/50"
                onClick={previousSlide}
            >
                ←
            </button>
            <button
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/30 p-3 text-white backdrop-blur-sm transition hover:bg-white/50"
                onClick={nextSlide}
            >
                →
            </button>

            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`h-2 w-2 rounded-full transition ${
                            index === currentIndex ? 'bg-white' : 'bg-white/50'
                        }`}
                        onClick={() => {
                            setDirection(index > currentIndex ? 1 : -1);
                            setCurrentIndex(index);
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;