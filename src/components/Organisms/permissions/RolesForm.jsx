import {
  Paper,
  TableRow,
  TableHead,
  Table,
  TableBody,
  TableContainer,
  TableCell,
  TextField,
  Stack,
  Typography,
} from "@mui/material";

import { useFormik } from "formik";
import Header from "@/components/Atoms/Header/Header";
import AppSwitch from "@/components/Atoms/Input/Switch/AppSwitch";
import { useEffect, useId, useState } from "react";

const columnStyle = {
  color: "#464646",
  fontSize: "18px",
  textTransform: "capitalize",
  fontWeight: "500",
  fontFamily: "Jost",
};

export default function RolesForm(props) {
  const { id, headerTitle, details = {}, permissionsTableData, handleSubmit } = props;
  const [copiedRows, setCopiedRows] = useState([]);
  const roleId = id || useId();
  const permissionsNames = [ "can_read", "can_create", "can_update", "can_delete",];

  const handleSwitchChange = (row, permissionName, isAllowed) => {
    let rowClone = {...row}
    rowClone[permissionName] = isAllowed;
    setCopiedRows(
      copiedRows.map((copiedRow) => (rowClone.id == copiedRow.id ? rowClone : copiedRow))
    );
  };

  const handleRoleSubmitForm = (values) => {
    const data = {
      id: roleId,
      name: values.name,
      permissions: copiedRows,
    };
    handleSubmit(data);
  };

  const formik = useFormik({
    initialValues: details,
    onSubmit: handleRoleSubmitForm,
    enableReinitialize: true,
  });

  useEffect(() => {
    setCopiedRows([...permissionsTableData?.rows]);
  }, [permissionsTableData]);

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <Header headerTitle={headerTitle} />
        <TextField
          label="Role Title"
          id="name"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name || ""}
          sx={{ mb: 5 }}
          required
        />
      </form>
      <Stack>
        <Typography
          sx={{
            color: "#565656",
            fontSize: "28px",
            fontFamily: "Jost",
            fontWeight: "500",
            backgroundColor: "white",
            p: 2,
            mt: 2,
          }}
        >
          Role Permission
        </Typography>
        <TableContainer component={Paper} sx={{ boxShadow: "none" }}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow sx={{ backgroundColor: "#F8F8F8" }}>
                {permissionsTableData?.header.map((header, index) => (
                  <TableCell
                    key={index}
                    sx={{
                      textTransform: "capitalize",
                      color: index === 0 ? "#1A1A1A" : "#858585",
                      fontSize: index === 0 ? "16px" : "18px",
                      width: index === 1 ? "50%" : "10%",
                      fontFamily: "Jost",
                    }}
                  >
                    {header}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {copiedRows.map((row, rowIndex) => (
                <TableRow key={row.id} sx={{ border: "1px solid #F8F8F8" }}>
                  <TableCell component="th" scope="row" sx={columnStyle}>
                    {rowIndex + 1}
                  </TableCell>
                  <TableCell sx={columnStyle}>{row.name}</TableCell>
                  {permissionsNames.map((perm, i) => (
                    <TableCell key={i}>
                      <AppSwitch
                        checked={row[perm]}
                        onChange={handleSwitchChange}
                        permissionName={perm}
                        row={row}
                        index={rowIndex}
                      />
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Stack>
    </>
  );
}
