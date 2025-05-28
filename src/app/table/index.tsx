import styles from "./styles.module.scss";
import { DataTable } from "./data-table";
import { data } from "./data";
import { columns } from "./colums";
function Result() {
  return (
    <div className={styles.container}>
      <div className={styles.tableContent}>
        <h1 className={styles.heading}>Таблица данных (футбольных матчей)</h1>
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
}
export default Result;
