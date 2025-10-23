import { SelectedPage } from "@/shared/types";
import SimpleCarousel from "./SimpleCarousel";
import { carouselImages } from "./types";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
    return (
        <section 
            id="home" 
            className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-28"
            onMouseEnter={() => setSelectedPage(SelectedPage.Home)}
        >
            <div className="mx-auto w-11/12 max-w-7xl">
                {/* MAIN HEADER */}
                <div className="mb-20 space-y-6 text-center">
                    <h1 className="text-7xl font-bold tracking-tight">
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Nechal Enterprise
                        </span>
                    </h1>
                    <p className="text-3xl font-semibold text-gray-700">
                        Your Trusted Technology & Office Solutions Partner
                    </p>
                    <p className="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-gray-600">
                        Empowering businesses and institutions with premium computer equipment, comprehensive office solutions, 
                        and professional-grade stationery. Experience excellence in every interaction with our curated selection 
                        of products and exceptional customer service.
                    </p>
                </div>

                {/* CAROUSEL */}
                <div className="relative mx-auto max-w-7xl rounded-3xl bg-gradient-to-r from-blue-100 to-purple-100 p-8 shadow-2xl">
                    <SimpleCarousel images={carouselImages} />
                </div>

                {/* FEATURES */}
                <div className="mt-32 grid grid-cols-1 gap-12 md:grid-cols-3">
                    <div className="group rounded-2xl bg-white p-10 shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
                        <div className="mb-6 inline-block rounded-xl bg-blue-100 p-4">
                            <svg className="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 group-hover:text-blue-600">Premium Quality</h3>
                        <p className="mt-4 text-lg leading-relaxed text-gray-600">Top-tier products from trusted brands, ensuring reliability and performance.</p>
                    </div>
                    <div className="group rounded-2xl bg-white p-10 shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
                        <div className="mb-6 inline-block rounded-xl bg-purple-100 p-4">
                            <svg className="h-8 w-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 group-hover:text-purple-600">Fast Delivery</h3>
                        <p className="mt-4 text-lg leading-relaxed text-gray-600">Quick and reliable shipping service to meet your urgent needs.</p>
                    </div>
                    <div className="group rounded-2xl bg-white p-10 shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
                        <div className="mb-6 inline-block rounded-xl bg-indigo-100 p-4">
                            <svg className="h-8 w-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 group-hover:text-indigo-600">Expert Support</h3>
                        <p className="mt-4 text-lg leading-relaxed text-gray-600">Professional guidance and dedicated assistance for all your needs.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;