import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer bg-black">
      <div className="container pl-40 py-10">
        <div className="address flex flex-row text-white">
          <div className="col-left w-2/3 border-r border-white pr-5">
            <h2 className="text-2xl mb-5">TP. Hồ Chí Minh</h2>

            <div className="flex flex-row flex-wrap items-center justify-between w-full">
              <div className="item mb-10 max-w-xs ">
                <h3 className="font-bold uppercase">store 1</h3>
                <div className="text-sm mt-3">
                  <i className="fa-solid fa-house mr-2"></i>
                  <span>391/375 TRẦN HƯNG ĐẠO P CẦU KHO, Q.1</span>
                </div>
                <div className="mt-3">
                  <i className="fa-solid fa-phone mr-2"></i>
                  <span>028 7100 6789</span>
                </div>
              </div>

              <div className="item mb-10 max-w-xs ">
                <h3 mb-3 className="font-bold uppercase">
                  store 2
                </h3>
                <div className="text-sm mt-3">
                  <i className="fa-solid fa-house mr-2"></i>
                  <span>297/3 TÔ HIẾN THÀNH, PHƯỜNG 13, Q.10</span>
                </div>
                <div className="mt-3">
                  <i className="fa-solid fa-phone mr-2"></i>
                  <span>028 7100 6789</span>
                </div>
              </div>

              <div className="item mb-10 max-w-xs ">
                <h3 mb-3 className="font-bold uppercase">
                  store 3
                </h3>
                <div className="text-sm mt-3">
                  <i className="fa-solid fa-house mr-2"></i>
                  <span>111 KHUÔNG VIỆT, PHƯỜNG PHÚ TRUNG, Q.TÂN PHÚ</span>
                </div>
                <div className="mt-3">
                  <i className="fa-solid fa-phone mr-2"></i>
                  <span>028 7100 6789</span>
                </div>
              </div>

              <div className="item mb-10 max-w-xs ">
                <h3 mb-3 className="font-bold uppercase">
                  store 4
                </h3>
                <div className="text-sm mt-3">
                  <i className="fa-solid fa-house mr-2"></i>
                  <span>401 PHAN XÍCH LONG, PHƯỜNG 3, Q.PHÚ NHUẬN</span>
                </div>
                <div className="mt-3">
                  <i className="fa-solid fa-phone mr-2"></i>
                  <span>028 7100 6789</span>
                </div>
              </div>

              <div className="item mb-10 max-w-xs ">
                <h3 mb-3 className="font-bold uppercase">
                  store 5
                </h3>
                <div className="text-sm mt-3">
                  <i className="fa-solid fa-house mr-2"></i>
                  <span>94 LÊ VĂN THỌ, PHƯỜNG 11, Q.GÒ VẤP</span>
                </div>
                <div className="mt-3">
                  <i className="fa-solid fa-phone mr-2"></i>
                  <span>028 7100 6789</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-right w-1/3 pl-10">
            <h2 className="text-2xl mb-5">TP. BIÊN HÒA</h2>

            <div className="flex flex-row flex-wrap items-center justify-between w-full border-b border-white">
              <div className="item mb-10 max-w-xs ">
                <h3 className="font-bold uppercase">store 6</h3>
                <div className="text-sm mt-3">
                  <i className="fa-solid fa-house mr-2"></i>
                  <span>157 PHAN TRUNG, PHƯỜNG TÂN MAI</span>
                </div>
                <div className="mt-3">
                  <i className="fa-solid fa-phone mr-2"></i>
                  <span>028 7100 6789</span>
                </div>
              </div>
            </div>

            <h2 className="text-2xl mb-5 mt-10">TP. CẦN THƠ</h2>

            <div className="flex flex-row flex-wrap items-center justify-between w-full">
              <div className="item mb-10 max-w-xs ">
                <h3 className="font-bold uppercase">store 7</h3>
                <div className="text-sm mt-3">
                  <i className="fa-solid fa-house mr-2"></i>
                  <span>35 TRẦN PHÚ</span>
                </div>
                <div className="mt-3">
                  <i className="fa-solid fa-phone mr-2"></i>
                  <span>028 7100 6789</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="social text-white mt-3">
          <h3 className="text-xl">LIKE FAKESTORE TRÊN MẠNG XÃ HỘI</h3>
          <div className="social-item flex flex-row items-center mt-3">
            <Link className="text-5xl mr-8  transition-all ease-in-out duration-300">
              <i className="fa-brands fa-facebook"></i>
            </Link>
            <Link className="text-5xl mr-8  transition-all ease-in-out duration-300">
              <i className="fa-brands fa-instagram"></i>
            </Link>
            <Link className="text-5xl mr-8  transition-all ease-in-out duration-300">
              <img
                src="https://file.hstatic.net/1000253775/file/pngwing31_9bffe9c16f3045468409642cc7790686.png"
                height={48}
                width={48}
                alt="zalo"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
