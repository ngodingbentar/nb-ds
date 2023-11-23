'use client';
import { useDispatch } from 'react-redux';
import { setLoading } from "../store/redux/main";

const RegistrationPage = () => {
  const dispatch = useDispatch()

  const setLoad = () => {
    console.log('setloading 1')
    dispatch(setLoading(true))
  }
  return (
    <div>
      <button onClick={setLoad}>setloading</button>
    </div>
  )
};

export default RegistrationPage;
