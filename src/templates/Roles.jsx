import { useSearchParams } from "react-router-dom";

import RolesTable from "@/components/Organisms/Roles/RolesTable";
import RolesForm from "@/components/Organisms/permissions/RolesForm";

export default function RolesTemplate({
  rolesTableData,
  permissionsTableData,
  handleSubmit,
  details,
}) {
  let [searchParams] = useSearchParams();

  const display = searchParams.get("type");
  const id = searchParams.get("id");

  return (
    <>
      {display === "form" ? (
        <>
          <RolesForm
            id={id}
            headerTitle={id ? "edit role" : "add role"}
            handleSubmit={handleSubmit}
            details={details}
            permissionsTableData={permissionsTableData}
          />
        </>
      ) : (
        <>
          <RolesTable tableData={rolesTableData} headerTitle={"roles"} />
        </>
      )}
    </>
  );
}
