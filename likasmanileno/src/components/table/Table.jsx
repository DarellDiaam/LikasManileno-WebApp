import "./table.scss"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function List() {

    const rows = [
        {
        id:1231231,
        first_name:"Diamond Darell",
        last_name:"Calalang",
        img:"https://4bgowik9viu406fbr2hsu10z-wpengine.netdna-ssl.com/wp-content/uploads/2020/03/Portrait_5-1.jpg",
        contact:"0999 592 9232",
        date_Admitted:"October 2, 1998",
        evacuation_site:"Don Bosco High School",
        status:"Safe",
    },

    {
        id:513142,
        first_name:"Karl",
        last_name:"Francisco",
        img:"https://4bgowik9viu406fbr2hsu10z-wpengine.netdna-ssl.com/wp-content/uploads/2020/03/Portrait_5-1.jpg",
        contact:"0999 592 9232",
        date_Admitted:"October 2, 1998",
        evacuation_site:"Don Bosco High School",
        status:"Treating",
    },

    {
        id:5512342,
        first_name:"Estrella",
        last_name:"Djerson",
        img:"https://4bgowik9viu406fbr2hsu10z-wpengine.netdna-ssl.com/wp-content/uploads/2020/03/Portrait_5-1.jpg",
        contact:"0999 592 9232",
        date_Admitted:"October 2, 1998",
        evacuation_site:"Don Bosco High School",
        status:"Discharged",
    },

    {
        id:6512342,
        first_name:"Cyrus",
        last_name:"Robles",
        img:"https://4bgowik9viu406fbr2hsu10z-wpengine.netdna-ssl.com/wp-content/uploads/2020/03/Portrait_5-1.jpg",
        contact:"0999 592 9232",
        date_Admitted:"October 2, 1998",
        evacuation_site:"Don Bosco High School",
        status:"Safe",
    },

    {
        id:1212342,
        first_name:"Francis",
        last_name:"Abusejo",
        img:"https://4bgowik9viu406fbr2hsu10z-wpengine.netdna-ssl.com/wp-content/uploads/2020/03/Portrait_5-1.jpg",
        contact:"0999 592 9232",
        date_Admitted:"October 2, 1998",
        evacuation_site:"Don Bosco High School",
        status:"Safe",
    },
];

  return (
    <TableContainer component={Paper} className="table">
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell className="tableCell">ID No.</TableCell>
          <TableCell className="tableCell">First Name</TableCell>
          <TableCell className="tableCell">Last Name</TableCell>
          <TableCell className="tableCell">Contact No.</TableCell>
          <TableCell className="tableCell">Date Admitted</TableCell>
          <TableCell className="tableCell">Site Transfered</TableCell>
          <TableCell className="tableCell">Status</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.id}>
            <TableCell>{row.id}</TableCell>
            <TableCell className="tableCell">{row.first_name}</TableCell>
            <TableCell  className="tableCell">{row.last_name}</TableCell>
            <TableCell  className="tableCell">{row.contact}</TableCell>
            <TableCell  className="tableCell">{row.date_Admitted}</TableCell>
            <TableCell  className="tableCell">{row.evacuation_site}</TableCell>
            <TableCell  className="tableCell"><span className={`status ${row.status}`}>{row.status}</span>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default List