import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";

function CabinTableOperation() {
  return (
    <div>
      <TableOperations>
        <Filter
          filterField={"discount"}
          options={[
            { value: "all", label: "all" },
            { value: "no-discount", label: "No discount" },
            { value: "with-discount", label: "With discount" },
          ]}
        />
      </TableOperations>
    </div>
  );
}

export default CabinTableOperation;
