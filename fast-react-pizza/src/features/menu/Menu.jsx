// import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";
//check for path
import { setMenu, selectMenu } from "./menuSlice";
import store from "../../store";

import { useSelector } from "react-redux";

////old code
// data fetch at same time as render happens
// function Menu() {
//   const menu = useLoaderData();

//   return (
//     <ul className="divide-y divide-stone-200">
//       {menu.map((pizza) => (
//         <MenuItem pizza={pizza} key={pizza.id} />
//       ))}
//     </ul>
//   );
// }

//new code

function Menu() {
  const menu = useSelector(selectMenu);

  return (
    <ul className="divide-y divide-stone-200">
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}

//data fetching is centralized in route it self
// export async function loader() {
//   const menu = await getMenu();
//   return menu;
// }

//new code
// features/menu/Menu.jsx

export async function loader() {
  const state = store.getState();
  const existingMenu = selectMenu(state);

  // If we already have menu in store, return that
  if (existingMenu.length > 0) {
    return existingMenu;
  }

  // Else fetch from API, store in Redux, and return
  const menu = await getMenu();
  store.dispatch(setMenu(menu));
  return menu;
}

export default Menu;
