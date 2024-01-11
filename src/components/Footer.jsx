import { TiSocialFacebook } from "react-icons/ti";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-zinc-900 px-6 py-6 ">
      <div className="w-[1080px] mx-auto flex  justify-between">
        <div className="justify-start items-start gap-[99.95px] inline-flex">
          <div className="flex-col justify-start items-start gap-[10.71px] inline-flex">
            <div className="text-orange-300 text-lg font-bold font-['DM Sans'] leading-tight">
              Product
            </div>
            <div className="flex-col justify-start items-start gap-[7.14px] flex">
              <div className="opacity-50 text-orange-300 text-base font-medium font-['DM Sans']">
                Autocapture
              </div>
              <div className="opacity-50 text-orange-300 text-base font-medium font-['DM Sans']">
                Data Governance
              </div>
              <div className="opacity-50 text-orange-300 text-base font-medium font-['DM Sans']">
                Virtual Events
              </div>
              <div className="opacity-50 text-orange-300 text-base font-medium font-['DM Sans']">
                Virtual Users
              </div>
              <div className="opacity-50 text-orange-300 text-base font-medium font-['DM Sans']">
                Behavioral Analytics
              </div>
              <div className="opacity-50 text-orange-300 text-base font-medium font-['DM Sans']">
                Connect
              </div>
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-[10.71px] inline-flex">
            <div className="text-orange-300 text-lg font-bold font-['DM Sans'] leading-tight">
              Explore
            </div>
            <div className="flex-col justify-start items-start gap-[7.85px] flex">
              <div className="opacity-50 text-orange-300 text-base font-medium font-['DM Sans']">
                Resources
              </div>
              <div className="opacity-50 text-orange-300 text-base font-medium font-['DM Sans']">
                Blog
              </div>
              <div className="opacity-50 text-orange-300 text-base font-medium font-['DM Sans']">
                Documents
              </div>
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-[10.71px] inline-flex">
            <div className="text-orange-300 text-lg font-bold font-['DM Sans'] leading-tight">
              Company
            </div>
            <div className="flex-col justify-start items-start gap-[7.85px] flex">
              <div className="opacity-50 text-orange-300 text-base font-medium font-['DM Sans']">
                About us
              </div>
              <div className="opacity-50 text-orange-300 text-base font-medium font-['DM Sans']">
                Partners
              </div>
              <div className="opacity-50 text-orange-300 text-base font-medium font-['DM Sans']">
                Customers
              </div>
              <div className="opacity-50 text-orange-300 text-base font-medium font-['DM Sans']">
                Contact us
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="w-[301.30px] h-[284.19px] bg-orange-300 bg-opacity-40 rounded-[15px] flex flex-col items-center justify-center gap-7">
            <div>
              <div className="w-[177.05px] h-[66.55px] flex-col justify-start items-start gap-[10.71px] inline-flex">
                <div className="text-orange-200 text-lg font-bold font-['DM Sans'] leading-tight">
                  Subscribe
                </div>
                <div className="w-[177.05px] h-[35.84px] relative">
                  <div className="w-[177.05px] h-[35.84px] p-[11.42px] left-0 top-0 absolute bg-zinc-400 rounded border border-orange-300 justify-start items-start gap-[7.14px] inline-flex">
                    <div className="opacity-50 text-orange-300 text-[9.99px] font-normal font-['DM Sans']">
                      Email address
                    </div>
                  </div>
                  <div className="w-[35.69px] h-[35.69px] left-[141.35px] top-[-0px] absolute"></div>
                </div>
              </div>
            </div>
            <div>
              <div className="w-[176.61px] h-[39.17px] opacity-50 text-white text-[9.97px] font-normal font-['DM Sans']">
                Hello, we are ABC. trying to make an effort to put the right
                people for you to get the best results. Just insight
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1080px] px-10 mx-auto mt-8 mb-8 h-[0.71px] opacity-5 bg-stone-200 border border-orange-300" />
      <div className="w-[1080px] mx-auto h-[35.71px] justify-between items-center flex">
        <div className="px-[18.56px] py-[7.85px] bg-neutral-900 border border-zinc-400 justify-start items-start gap-[7.14px] flex">
          <div className="text-zinc-400 text-[9.99px] font-bold font-['DM Sans'] leading-tight">
            Logo
          </div>
        </div>
        <div className="justify-start items-start gap-[25.70px] flex">
          <div className="text-orange-300 text-[9.99px] font-bold font-['DM Sans'] leading-tight">
            Terms
          </div>
          <div className="text-orange-300 text-[9.99px] font-bold font-['DM Sans'] leading-tight">
            Privacy
          </div>
          <div className="text-orange-300 text-[9.99px] font-bold font-['DM Sans'] leading-tight">
            Cookies
          </div>
        </div>
        <div className="w-[96.38px] h-[24.99px] justify-start items-start gap-[10.71px] inline-flex">
          <div className="w-[24.99px] h-[24.99px] text-[#F9BF78] border flex items-center justify-center rounded-full">
            <TiSocialFacebook />
          </div>
          <div className="w-[24.99px] h-[24.99px] text-[#F9BF78] border flex items-center justify-center rounded-full p-1.5">
            <FaLinkedinIn />
          </div>
          <div className="w-[24.99px] h-[24.99px] text-[#F9BF78] border flex items-center justify-center rounded-full p-1.5">
            <FaTwitter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
