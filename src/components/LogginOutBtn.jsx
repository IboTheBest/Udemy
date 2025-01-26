import React, { useState } from 'react';
import { Button } from 'antd';
const LogginOutBtn = ({title}) => {
  const [loadings, setLoadings] = useState([]);
  const enterLoading = (index) => {
    setTimeout(() => {
        localStorage.removeItem("token")
    }, 1000);
    setTimeout(() => {
      window.location.reload();
    }, 1000);
    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    });
    setTimeout(() => {
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = false;
        return newLoadings;
      });
    }, 1000);
  };
  return (
      <Button className='font-semibold' type="primary" htmlType='Submit' size='large' loading={loadings[0]}onClick={() => enterLoading(0)}>
         {title}
        </Button>
    );
};
export default LogginOutBtn;