const HandleCheckout = (e) => {
  e.preventDefault();

  document.getElementById("success-confirm").innerHTML =
    " Đơn hàng đã được xác nhận, bạn có thể đóng cửa sổ này!";
};

const CheckoutContent = ({ close, total }) => (
  <div className="modal bg-gray-300 px-5 py-2 w-full rounded-md border shadow-md">
    <a className="close" onClick={close}>
      &times;
    </a>
    <div className="header text-center text-xl font-bold">
      Xác nhận thanh toán
    </div>
    <div className="content ">
      <form onSubmit={HandleCheckout}>
        <div className="relative z-0 mb-6 w-full group">
          <input
            type="text"
            name="floating_name"
            id="floating_name"
            className=" block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-black appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_name"
            className="peer-focus:font-medium absolute text-sm text-black italic dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Họ tên
          </label>
        </div>

        <div className="relative z-0 mb-6 w-full group">
          <input
            type="text"
            name="floating_phone"
            id="floating_phone"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-black appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_phone"
            className="peer-focus:font-medium absolute text-sm text-black italic dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Số điện thoại
          </label>
        </div>

        <div className="relative z-0 mb-6 w-full group">
          <input
            type="text"
            name="floating_address"
            id="floating_address"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-black appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_address"
            className="peer-focus:font-medium absolute text-sm text-black italic dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Địa chỉ
          </label>
        </div>

        <div className="relative z-0 mb-6 w-full group">
          <input
            type="email"
            name="floating_email"
            id="floating_email"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-black appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium absolute text-sm text-black italic dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email
          </label>
        </div>

        <div className="flex flex-row flex-wrap items-center">
          <div className="font-bold mr-3">
            <p>Tổng giá phải trả: {total}$</p>
          </div>
          <button
            type="submit"
            className="transition-all duration-300 hover:scale-110 text-white bg-black  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
          >
            Xác nhận thanh toán
          </button>
        </div>
        <div
          className="text-red-600 font-bold italic mt-2"
          id="success-confirm"
        ></div>
      </form>
    </div>
  </div>
);

export default CheckoutContent;
