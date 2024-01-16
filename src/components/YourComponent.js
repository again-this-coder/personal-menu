import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setData } from '../redux/reducers/exampleReducer';

const YourComponent = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.example.data);

  const handleButtonClick = () => {
    dispatch(setData('New Data'));
  };

  return (
    <div>
      <p>Data from Redux: {data}</p>
      <button onClick={handleButtonClick}>Update Data</button>
    </div>
  );
};

export default YourComponent;
