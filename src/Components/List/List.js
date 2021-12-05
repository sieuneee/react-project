import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Link } from "react-router-dom";

const List = () => {
   const [ springText, setSpringText ] = useState('');

  useEffect(
      () => {
        axios({
            url: '/home',
            method: 'GET'
        }).then((res) => {
            setSpringText(res.data);
        })
      }, []
  );

  return (
      <div>
            <Link to="posting" >
                글작성
            </Link>
          <div>
              {springText}
          </div>
      </div>
  );
}

export default List;