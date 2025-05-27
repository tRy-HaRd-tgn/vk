import styles from "./styles.module.scss";
import { DataTable } from "./data-table";
import { data } from "./data";
import { columns } from "./colums";
function Result() {
  return (
    <div className={styles.container}>
      <div className={styles.tableContent}>
        <DataTable columns={columns} data={data}></DataTable>
      </div>
    </div>
  );
}
export default Result;
