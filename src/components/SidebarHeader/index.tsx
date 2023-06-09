import { MenuItem, useProSidebar, menuClasses } from "react-pro-sidebar";
import ArrowForward from "@mui/icons-material/ArrowForwardIosOutlined";
import ArrowBack from "@mui/icons-material/ArrowBackIosOutlined";
import { fontWeight } from "@mui/system";

function SidebarHeader() {
  const { collapseSidebar, collapsed } = useProSidebar();
  return (
    <MenuItem
      icon={collapsed ? <ArrowForward /> : <ArrowBack />}
      onClick={() => collapseSidebar()}
      style={{ margin: "16px 0", fontSize: "24px", fontWeight: 800 }}
    >
      ProSidebar
    </MenuItem>
  );
}

export default SidebarHeader;
