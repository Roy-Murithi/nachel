export type ProductType = {
    name: string;
    description: string;
    image: string;
    category: string;
};

export const products: Array<ProductType> = [
    {
        name: "Premium Toner Collection",
        description: "High-quality toner cartridges compatible with major printer brands. Long-lasting, vivid prints for your business needs.",
        image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6",

        category: "Printer Supplies"
    },
    {
        name: "Bulk A4 Paper",
        description: "Premium quality A4 paper, perfect for high-volume printing and copying. Available in various weights and finishes.",
        image: "https://images.unsplash.com/photo-1589330694653-ded6df03f754",

        category: "Paper Products"
    },
    {
        name: "Professional Printer Set",
        description: "High-performance printers for office use. Fast, reliable, and economical printing solutions.",
        image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6",

        category: "Equipment"
    },
    {
        name: "Classroom Chalk Set",
        description: "Dust-free, non-toxic chalk perfect for educational settings. Available in white and vibrant colors.",
        image: "https://images.unsplash.com/photo-1519419166318-4f5c601b8e6c",

        category: "School Supplies"
    },
    {
        name: "Filing Solutions",
        description: "Comprehensive range of filing products including folders, dividers, and storage solutions.",
        image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4",

        category: "Organization"
    },
    {
        name: "Bulk Stationery Pack",
        description: "Complete stationery sets including pens, pencils, markers, and accessories for office or school use.",
        image: "https://plus.unsplash.com/premium_photo-1722729629224-4397a1ce8267?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1507",

        category: "Stationery"
    }
];