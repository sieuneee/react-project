import React, { useState } from "react";
import { Link } from "react-router-dom";

const IndexPage = () => {

  return (
    <div>
      <Link to="/list" >
          list 보기
      </Link>
    </div>
  );
};

export default IndexPage;
