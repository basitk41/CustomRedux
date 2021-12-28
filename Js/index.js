import Users from "./components/users/users.js";
import Laptops from "./components/laptops/laptops.js";
import Navbar from "./components/navbar/navbar.js";
import { useEffect } from "./utils/hooks.js";
import { useDispatch } from "./store/store.js";
import { get_users, get_laptops } from "./store/actions/Actions.js";
import api from "./utils/api.js";
export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_users());
    dispatch(get_laptops());
    api
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => console.log(res));
  }, []);

  Navbar();
  Users();
  Laptops();
};
App();
