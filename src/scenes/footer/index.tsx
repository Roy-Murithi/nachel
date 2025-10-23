const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-white to-blue-50 py-12">
      <div className="justify-content mx-auto w-5/6 gap-8 md:flex items-center">
        <div className="basis-1/2">
          <div className="text-3xl font-bold">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Nechal
            </span>
            <span className="text-gray-700 text-xl ml-1">Enterprise</span>
          </div>
          <p className="mt-4 text-gray-500">© 2025 Nechal Enterprise. All Rights Reserved.</p>
        </div>
        <div className="mt-8 basis-1/2 md:mt-0 text-right">
          <div className="space-y-2">
            <div className="flex flex-col space-y-1">
              <a 
                href="tel:0742412960" 
                className="text-gray-600 hover:text-blue-600 transition duration-300"
              >
                0742412960
              </a>
              <a 
                href="tel:0716949918" 
                className="text-gray-600 hover:text-blue-600 transition duration-300"
              >
                0716949918
              </a>
            </div>
            <p className="text-sm text-gray-500">Located at G4S Embu Branch</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
