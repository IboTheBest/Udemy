import React, { useState } from 'react';
import { Button } from 'antd';
const LoadingBtn = ({title}) => {
  const [loadings, setLoadings] = useState([]);
  const enterLoading = (index) => {
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
      <Button type="primary" htmlType='Submit' size='large' loading={loadings[0]} onClick={() => enterLoading(0)}>
         {title}
        </Button>
    );
};
export default LoadingBtn;