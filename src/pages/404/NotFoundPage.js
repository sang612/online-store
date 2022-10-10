import React from "react";

const NotFoundPage = () => {
  return (
    <div className="notfound mt-20">
      <div className="container flex flex-row  items-center">
        <div className="col-left w-1/2 text-right ">
          404
        </div>
        <div className="col-right w-1/2 leading-none ml-10 uppercase">not found</div>
      </div>
    </div>
  );
};

export default NotFoundPage;
