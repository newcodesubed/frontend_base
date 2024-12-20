import Glist from "./GList";

function List({ lists, setLists }) {
  return (
    <div className="list">
      <h2>My Goals</h2>
      <div>
        {lists.map((list) => (
          <Glist list={list} key={list.id} />
        ))}
      </div>
    </div>
  );
}
export default List;
