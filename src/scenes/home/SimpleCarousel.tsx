import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import { CarouselImage } from './types';

type Props = {
    images: CarouselImage[];
};

const SimpleCarousel = ({ images }: Props) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setDirection(1);
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [images.length]);

    const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
        const threshold = 50;
        if (info.offset.x > threshold) {
            // Swiped right
            setDirection(-1);
            setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
        } else if (info.offset.x < -threshold) {
            // Swiped left
            setDirection(1);
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        touchEndX.current = e.changedTouches[0].clientX;
        const swipeDistance = touchEndX.current - touchStartX.current;
        const threshold = 50;

        if (Math.abs(swipeDistance) > threshold) {
            if (swipeDistance > 0) {
                // Swiped right
                setDirection(-1);
                setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
            } else {
                // Swiped left
                setDirection(1);
                setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
            }
        }
    };

    const nextSlide = () => {
        setDirection(1);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const previousSlide = () => {
        setDirection(-1);
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="relative h-[600px] w-full overflow-hidden rounded-2xl bg-white shadow-lg">
            <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                    key={currentIndex}
                    custom={direction}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    onDragEnd={handleDragEnd}
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                    variants={{
                        enter: (direction) => ({
                            x: direction > 0 ? 1000 : -1000,
                            opacity: 0
                        }),
                        center: {
                            zIndex: 1,
                            x: 0,
                            opacity: 1
                        },
                        exit: (direction) => ({
                            zIndex: 0,
                            x: direction < 0 ? 1000 : -1000,
                            opacity: 0
                        })
                    }}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 }
                    }}
                    className="absolute h-full w-full cursor-grab active:cursor-grabbing"
                >
                    <div className="relative h-full w-full">
                        <img
                            src={images[currentIndex].url}
                            alt={images[currentIndex].title}
                            className="h-full w-full object-contain p-4"
                            draggable="false"
                        />
                        <motion.div 
                            className="absolute bottom-0 left-0 right-0 bg-white/90 p-6"
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            <h3 className="text-2xl font-bold text-gray-800">{images[currentIndex].title}</h3>
                            <p className="mt-2 text-gray-600">{images[currentIndex].description}</p>
                        </motion.div>
                    </div>
                </motion.div>
            </AnimatePresence>
            
            <motion.button
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-gray-100 p-4 text-gray-800 shadow-lg transition hover:bg-gray-200"
                onClick={previousSlide}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                ←
            </motion.button>
            <motion.button
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-gray-100 p-4 text-gray-800 shadow-lg transition hover:bg-gray-200"
                onClick={nextSlide}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                →
            </motion.button>

            <div className="absolute bottom-24 left-1/2 flex -translate-x-1/2 gap-2">
                {images.map((_, index) => (
                    <motion.button
                        key={index}
                        className={`h-2 w-16 rounded-full transition ${
                            index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                        }`}
                        onClick={() => {
                            setDirection(index > currentIndex ? 1 : -1);
                            setCurrentIndex(index);
                        }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    />
                ))}
            </div>
        </div>
    );
};

export default SimpleCarousel;