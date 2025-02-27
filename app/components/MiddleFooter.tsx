import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";

export default function MiddleFooter() {
  return (
    <div className="w-full flex flex-col justify-center px-8 mt-8">
      <div className="w-full min-h-[507px]">
        {/* Contact Section */}
        <div className="pt-2 w-full">
          <h3 className="text-xl font-bold text-white">Contact Us</h3>
          <ul className="mt-5 text-sm text-white space-y-2">
            <li className="flex items-center gap-2">
              <Mail size={16} />
              <span>
                Data Science Queries:{" "}
                <a href="mailto:admissions@accredian.com" className="underline">
                  admissions@accredian.com
                </a>
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} />
              <span>
                Product Management Queries:{" "}
                <a href="mailto:pm@accredian.com" className="underline">
                  pm@accredian.com
                </a>
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} />
              <span>
                Data Science Helpline:{" "}
                <a href="tel:+919079653292" className="underline">
                  +91 9079653292
                </a>{" "}
                (9 AM - 7 PM)
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} />
              <span>
                Product Management Helpline:{" "}
                <a href="tel:+919625811095" className="underline">
                  +91 9625811095
                </a>
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} />
              <span>
                Enrolled Student Helpline:{" "}
                <a href="tel:+917969322507" className="underline">
                  +91 7969322507
                </a>
              </span>
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={16} />
              <span>
                Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector
                18, Gurugram, Haryana 122015
              </span>
            </li>
          </ul>
        </div>

        <div className="mt-4 text-lg font-bold text-white">
          <a href="#" className="underline">
            Why Accredian
          </a>
        </div>

        <h3 className="mt-4 text-xl text-white">Follow Us</h3>
        <div className="flex gap-4 mt-2">
          <a
            href="#"
            className="bg-gray-500 p-2 rounded-full hover:bg-gray-600 transition-all duration-300"
          >
            <Image
              src="/facebook.png"
              alt="Facebook Icon"
              width={24}
              height={24}
              className="text-gray-500"
            />
          </a>
          <a
            href="#"
            className="bg-gray-500 p-2 rounded-full hover:bg-gray-600 transition-all duration-300"
          >
            <Image
              src="/linkedin.png"
              alt="Facebook Icon"
              width={24}
              height={24}
              className="text-gray-500"
            />
          </a>
          <a
            href="#"
            className="bg-gray-500 p-2 rounded-full hover:bg-gray-600 transition-all duration-300"
          >
            <Image
              src="/twitter.png"
              alt="Facebook Icon"
              width={24}
              height={24}
              className="text-gray-500"
            />
          </a>
          <a
            href="#"
            className="bg-gray-500 p-2 rounded-full hover:bg-gray-600 transition-all duration-300"
          >
            <Image
              src="/instagram.png"
              alt="Facebook Icon"
              width={24}
              height={24}
              className="text-gray-500"
            />
          </a>
          <a
            href="#"
            className="bg-gray-500 p-2 rounded-full hover:bg-gray-600 transition-all duration-300"
          >
            <Image
              src="/youtube.png"
              alt="Facebook Icon"
              width={24}
              height={24}
              className="text-gray-500"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
