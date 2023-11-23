import { setLoading } from "../store/redux/users";

const UserPage = () => {
  const setLoad = () => {
    setLoading(true)
  }
  return (
    <div>
      <button onClick={setLoad}>setloading</button>
    </div>
  )
};

export default UserPage;
