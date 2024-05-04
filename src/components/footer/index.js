import config from "../../config/config.json";
import menu from "../../config/menu.json";
import social from "../../config/social.json";
import Image from "next/image";
import Link from "next/link";
import Social from "../social";

const Footer = () => {
  const { footer } = menu;
  return (
    <footer className="section bg-theme-light pb-0">
      <div className="container">
        <div className="row">
          {footer.map((col) => {
            return (
              <div className="mb-12 sm:col-6 lg:col-3" key={col.name}>
                <h4>{col.name}</h4>
                <ul className="mt-6">
                  {col?.menu.map((item) => (
                    <li className="mb-1" key={item.text}>
                      <Link href={item.url} rel="">
                        {item.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
          <div className="md-12 sm:col-6 lg:col-3">
            <Link href="/" aria-label="Bigspring">
              <Image
                src={config.site.logo}
                width={config.site.logo_width}
                height={config.site.logo_height}
                alt=""
              />
            </Link>
            <p className="mb-6 mt-3">
              Descriptive
              Description.
            </p>
            <Social source={social} className="social-icons mb-8" />
          </div>
        </div>
        <div className="border-t border-border py-6">
          <p className="text-center text-sm">Designed and Developed By Badr</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
