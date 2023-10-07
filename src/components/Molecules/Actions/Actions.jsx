import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

export default function Actions({ actionsList }) {
  return (
    <Stack direction="row" justifyContent={"center"}>
      {actionsList.map((action, i) => (
        <Button key={i} onClick={action.click} sx={{ p: 0, color: "#F25500" }}>
          {action.text === "Edit" && <EditOutlinedIcon />}
          {action.text === "Delete" && <DeleteOutlineOutlinedIcon />}
        </Button>
      ))}
    </Stack>
  );
}
