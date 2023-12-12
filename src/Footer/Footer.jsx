const Footer = () => {
    return (
        <footer className="footer footer-center p-4 bg-gray-200 text-gray-600 font-roboto-mono">
        <aside>
          <p className="text-sm">Portfolio, Sayed Saqlain, {new Date().getFullYear()}</p>
          <p className="text-xs">For query: sayedsaqlayn@gmail.com</p>
        </aside>
      </footer>
    );
};

export default Footer;