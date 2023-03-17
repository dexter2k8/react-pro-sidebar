// yarn add react-pro-sidebar
import { Sidebar, Menu, MenuItem, SubMenu, menuClasses, ProSidebarProvider } from "react-pro-sidebar";
// yarn add @mui/icons-material @mui/material @emotion/styled @emotion/react
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
// acesse https://react-svgr.com/playground/ para converter imagem svg em componente tsx
import { Calendar } from "../../icons/calendar";
import SidebarHeader from "@/components/SidebarHeader";

function ProSidebar() {
  return (
    <ProSidebarProvider>
      <Sidebar
      //   backgroundColor="#00579A"
      //   defaultCollapsed
      //   width="325px"
      //   collapsedWidth="80px"
      //   transitionDuration={800}

      //   rootStyles={{
      // *** ESTILIZAÇÃO DOS ITENS DO MENU ***
      //     ["." + menuClasses.button]: {
      //       backgroundColor: "#00579A",
      //       color: "#fff",
      //       transition: "all 0.3s ease-in-out",
      //       "&:hover": { backgroundColor: "#0077BA" },
      //     },
      // *** ESTILIZAÇÃO DOS ÍCONES ***
      //     ["." + menuClasses.icon]: { width: "80px" },
      //   }}
      >
        <Menu
        // *** ESTILIZAÇÃO DOS COMPONENTES ***
        //   style={{ marginBottom: "24px", marginTop: "16px", marginLeft: "-20px" }}
        // *** ICONE DE EXPANSÃO DOS SUBMENUS ***
        // renderExpandIcon={({ open }) => <span>{open ? "-" : "+"}</span>}
        >
          <SidebarHeader />
          <MenuItem icon={<HomeOutlinedIcon />}>Home</MenuItem>
          <SubMenu icon={<PeopleOutlinedIcon />} label="Contacts">
            <MenuItem>Pie Contact</MenuItem>
            <MenuItem>Line contact</MenuItem>
          </SubMenu>
          <SubMenu icon={<ReceiptOutlinedIcon />} label="Profile">
            <MenuItem>Profile 1</MenuItem>
            <MenuItem>Profile 2</MenuItem>
          </SubMenu>
          <MenuItem icon={<Calendar />}>Calendar</MenuItem>
          <MenuItem icon={<HelpOutlineOutlinedIcon />}>FAQ</MenuItem>
        </Menu>
      </Sidebar>
    </ProSidebarProvider>
  );
}

export default ProSidebar;
