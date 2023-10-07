import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Header from "@/components/Atoms/Header/Header";

export default function RolesTable({ tableData, headerTitle }) {
  return (
    <>
      <Header headerTitle={headerTitle} />
      {tableData?.rows.length > 0 ? (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                {tableData?.header?.map((header, index) => (
                  <TableCell
                    key={index}
                    align={
                      index === tableData?.header.length - 1
                        ? "center"
                        : "inherit"
                    }
                    size="small"
                    sx={{}}
                  >
                    {header}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {tableData?.rows?.map((row) => (
                <TableRow key={row.id}>
                  {tableData?.header?.map((cell, i) => (
                    <TableCell component="th" scope="row" key={i}>
                      {row[cell]}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <>no data</>
      )}
    </>
  );
}
