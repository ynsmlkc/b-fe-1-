import Title from "../ui/Title";
import { IoLocationSharp } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <div className="bg-secondary text-white">
      <div className="container mx-auto pt-16 pb-24 ">
        <div className="flex justify-between text-center ">
          <div className="flex-1">
            <Title addClass="text-[30px]  ">Contact Us</Title>
            <div className="flex flex-col gap-y-2 mt-4 items-center ">
              <div className="flex items-center gap-x-2 ">
                <IoLocationSharp /> Location
              </div>
              <div className="flex items-center gap-x-2 ">
                <BsFillTelephoneFill /> Call +01 1234567890
              </div>
              <div className="flex items-center gap-x-2  ">
                <IoMdMail /> demo@gmail.com
              </div>
            </div>
          </div>
          <div className="flex-1">
            <Title addClass="text-[30px] ">Feane</Title>
            <div className="flex flex-col gap-y-2 mt-4 items-center ">
              <div className="flex items-center gap-x-2 ">
                Necessary, making this the first true generator on the Internet.
                It uses a dictionary of over 200 Latin words, combined with
              </div>
            </div>
          </div>
          <div className="flex-1">
            <Title addClass="text-[30px] ">Opening Hours</Title>
            <div className="flex flex-col gap-y-2 mt-4 items-center ">
              <div className="flex items-center gap-x-2 ">Everyday</div>
              <div className="flex items-center gap-x-2  ">
                10.00 Am -10.00 Pm
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-14">
          © 2025 All Rights Reserved By Free Html Templates
        </div>
      </div>
    </div>
  );
};

export default Footer;
