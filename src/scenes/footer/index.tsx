const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-white to-blue-50 py-12">
      <div className="justify-content mx-auto w-5/6 gap-8 md:flex items-center">
        <div className="basis-1/2">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            NACHEL
          </div>
          <p className="mt-4 text-gray-500">© 2025 Nachel. All Rights Reserved.</p>
        </div>
        <div className="mt-8 basis-1/2 md:mt-0 text-right">
          <div className="space-y-2">
            <a 
              href="mailto:contact@nachel.com" 
              className="block text-gray-600 hover:text-blue-600 transition duration-300"
            >
              contact@nachel.com
            </a>
            <a 
              href="tel:+1234567890" 
              className="block text-gray-600 hover:text-blue-600 transition duration-300"
            >
              (123) 456-7890
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
