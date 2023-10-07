import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";

import {
  CreateRole,
  DeleteRole,
  GetRoleDetails,
  UpdateRole,
} from "@/services/modules/roles/Actions";
import Actions from "@/components/Molecules/Actions/Actions";
import RolesTemplate from "@/templates/Roles";
import { useEffect } from "react";

export default function RolesPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  let [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  const roles = useSelector((state) => state.roles?.roles);
  const details = useSelector((state) => state.roles?.role);
  const resources = useSelector((state) => state.roles.resources);

  const actionsList = (data) => {
    return [
      {
        condition: () => {
          return true;
        },
        click: () => {
          navigate(`?type=form&id=${data?.id}`);
        },
        text: "Edit",
      },
      {
        condition: () => {
          return true;
        },
        click: () => {
          dispatch(DeleteRole(data));
        },
        text: "Delete",
      },
    ];
  };

  const rolesTableData = {
    header: ["id", "name", "actions"],
    rows: roles.map((data, i) => {
      return {
        ...data,
        actions: <Actions actionsList={actionsList(data)} />,
      };
    }),
  };

  const handleSubmit = (data) => {
    const action = () => {
      navigate("/roles-permissions/");
    };
    if (id) {
      dispatch(UpdateRole(data));
      action();
    } else {
      dispatch(CreateRole(data));
      action();
    }
  };

  function preparePermissionsRows() {
    let rows = [];
    //add role
    if (!id) {
      //manually add default permissions as the list includes none
      const permissions = {
        can_read: false,
        can_create: false,
        can_update: false,
        can_delete: false,
      };
      resources?.forEach((item) => rows.push({ ...item, ...permissions }));
    } else {
      //update role
      let permissions = details?.permissions;
      rows = permissions || [];
    }
    return rows;
  }

  const permissionsTableData = {
    header: ["#", "role", "view", "add", "edit", "delete"],
    rows: preparePermissionsRows(),
  };

  useEffect(() => {
    dispatch(GetRoleDetails({ id }));
  }, [id]);

  return (
    <RolesTemplate
      rolesTableData={rolesTableData}
      permissionsTableData={permissionsTableData}
      handleSubmit={handleSubmit}
      details={details}
    />
  );
}
