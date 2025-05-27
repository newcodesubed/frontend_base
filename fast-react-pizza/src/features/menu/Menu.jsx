import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";
// data fetch at same time as render happens
function Menu() {
  const menu = useLoaderData();

  return (
    <ul className="divide-y divide-stone-200">
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}
//data fetching is centralized in route it self
export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
