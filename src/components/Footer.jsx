import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-400">
          © {currentYear} Gerenz R. Mendoza. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
