import Glist from "./GList";

function List({ lists }) {
  return (
    <>
      <h2>My Goals</h2>
      <ul>
        {lists.map((list) => (
          <Glist list={list} key={list.id} />
        ))}
      </ul>
    </>
  );
}
export default List;
