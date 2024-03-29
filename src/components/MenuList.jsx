import MenuItem from "./MenuItem";
function MenuList({ foodItems }) {
  // console.log("C'est quoi au juste, foodItems ? ", foodItems);

  return (
    <>
      {foodItems.map((foodItem) => {
        return (
          <MenuItem foodItem={foodItem} />
        )
      })}
      {/*render a MenuItem component to each element of the props array*/}
    </>
  );
}

export default MenuList;