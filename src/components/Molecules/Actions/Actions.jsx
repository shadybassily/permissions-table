import { Button, Stack, Typography } from "@mui/material";
import React from "react";

export default function Actions({ actionsList }) {
  return (
    <Stack direction="row" justifyContent={"center"}>
      {actionsList.map((action, i) => (
        <Button
          key={i}
          onClick={action.click}
          sx={{ border: "1px solid", p: 0, mx: 1 }}
        >
          {action.text}
        </Button>
      ))}
    </Stack>
  );
}
