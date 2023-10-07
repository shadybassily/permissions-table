import { Button, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

export default function Header({ headerTitle }) {
  const navigate = useNavigate();

  let [searchParams] = useSearchParams();
  const display = searchParams.get("type");
  const id = searchParams.get("id");

  const HeaderActions = ({ display }) => {
    return (
      <>
        {display ? (
          <Stack direction={"row"} gap={2}>
            <Button
              sx={{ color: "red", border: "1px solid" }}
              onClick={() => {
                searchParams.delete("id");
                searchParams.delete("type");
                navigate(window.location.pathname);
              }}
            >
              cancel
            </Button>

            <Button type="submit" sx={{ border: "1px solid" }}>
              {id ? "update" : "add"}
            </Button>
          </Stack>
        ) : (
          <Button
            sx={{ border: "1px solid" }}
            onClick={() => {
              navigate("?type=form");
            }}
          >
            add
          </Button>
        )}
      </>
    );
  };

  return (
    <Stack
      direction={{ sm: "column", md: "row" }}
      alignItems="center"
      justifyContent="space-between"
      sx={{ py: 5 }}
    >
      <Typography
        sx={{
          textTransform: "capitalize",
          fontSize: "35px",
          fontFamily: "Jost",
          fontWeight: "500",
        }}
      >
        {headerTitle}
      </Typography>
      <HeaderActions display={display} />
    </Stack>
  );
}
