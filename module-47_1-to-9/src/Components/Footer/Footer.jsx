import socialPng from "../../assets/icons/social.png";
const Footer = () => {
  return (
    <div className="flex flex-col  bg-black">
      <footer className="footer text-base-content p-10">
        <aside className="flex flex-col align-middle gap-5 justify-start">
          <div className="text-white">
            <h2 className="font-extrabold text-xl flex justify-start mb-5 ">
              CareerHub
            </h2>
            <p className="flex justify-start">
              There are many variations of passages <br /> of Lorem Ipsum , but
              the majority have
              <br />
              suffered alteration in some form.
            </p>
          </div>
          <div>
            <img src={socialPng} alt="" className="w-20" />
          </div>
        </aside>
        <nav>
          <h6 className="text-white text-lg font-bold">Company</h6>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Work</a>
          <a className="link link-hover">Latest News</a>
          <a className="link link-hover">Careers</a>
        </nav>
        <nav>
          <h6 className="text-white text-lg font-bold">Product</h6>
          <a className="link link-hover">Prototype</a>
          <a className="link link-hover">Plans & Pricing</a>
          <a className="link link-hover">Customers</a>
          <a className="link link-hover">Integrations</a>
        </nav>
        <nav>
          <h6 className="text-white text-lg font-bold">Support</h6>
          <a className="link link-hover">Help Desk</a>
          <a className="link link-hover">Sales</a>
          <a className="link link-hover">Become a Partner</a>
          <a className="link link-hover">Developers</a>
        </nav>
        <nav>
          <h6 className="text-white text-lg font-bold">Contact</h6>
          <a className="link link-hover">524 Broadway , NYC</a>
          <a className="link link-hover">+1 777 - 978 - 5570</a>
        </nav>
          </footer>
          <hr className=" border-t border-gray-500 mt-6 mb-5 mx-10" />
          <div className="flex justify-between mx-10 text-sm text-gray-500 my-5">
          <p>@2023 CareerHub. All Rights Reserved</p>
          <p>Powered by CareerHub</p>
          </div>
    </div>
  );
};

export default Footer;
