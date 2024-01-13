import "./App.css";
import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import { IoIosBriefcase } from "react-icons/io";
import { BsFillSuitcase2Fill } from "react-icons/bs";
import { FcBusinessman } from "react-icons/fc";
import { FcBusinesswoman } from "react-icons/fc";
import { IoShirtSharp } from "react-icons/io5";
import { GiShirt } from "react-icons/gi";
import { PiPantsBold } from "react-icons/pi";
import { TbMoodKid } from "react-icons/tb";
import { PiPantsFill } from "react-icons/pi";
import { GiUnderwearShorts } from "react-icons/gi";
import { GiUnderwear } from "react-icons/gi";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { MdContactPage } from "react-icons/md";
import { BsPersonWorkspace } from "react-icons/bs";
import { FcAbout } from "react-icons/fc";
import { ImOffice } from "react-icons/im";
import { Button } from "@mui/material";
import { Home } from "./pages/Home";
import { useNavigate } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { Chart } from "./pages/Chart";
import { Contact } from "./pages/About/Contact";
import { Company } from "./pages/About/Company";
import { Carrers } from "./pages/About/Carrers";
import { Shirts } from "./pages/MensFashioin/Shirts";
import { Pants } from "./pages/MensFashioin/Pants";
import { Trousers } from "./pages/MensFashioin/Trousers";
import { Innerwears } from "./pages/MensFashioin/Innerwears";
import { AccessoriesMen } from "./pages/MensFashioin/AccessoriesMen";
import { Bottoms } from "./pages/WomensFashion/Bottoms";
import { Tops } from "./pages/WomensFashion/Tops";
import { AccessoriesWomen } from "./pages/WomensFashion/AccessoriesWomen";
import { AccessoriesKids } from "./pages/KidsFashion/AccessoriesKids";
import { PantsKids } from "./pages/KidsFashion/PantsKids";
import { ShirtsKids } from "./pages/KidsFashion/ShirtsKids";


const drawerWidth = 240;
const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  const [open, setOpen] = React.useState(false);
  const [menclick, setMenClick] = React.useState(false);
  const [womenclick, setWomenClick] = React.useState(false);
  const [kidsclick, setKidsClick] = React.useState(false);
  const [aboutclick, setAboutClick] = React.useState(false);
  const handleClickMen = () => {
    setMenClick(!menclick);
  };
  const handleClickWomen = () => {
    setWomenClick(!womenclick);
  };
  const handleClickKids = () => {
    setKidsClick(!kidsclick);
  };
  const handleClickAbout = () => {
    setAboutClick(!aboutclick);
  };
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const navigate = useNavigate();
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="fixed" open={open}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: "none" }) }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ fontFamily: "monospace", cursor: "pointer" }}
              onClick={() => {
                navigate("/");
              }}
            >
              StyleHub Creations
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader
            sx={{
              background:
                "linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%);",
            }}
          >
            <strong>Item Categories</strong>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
            <IconButton
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
            >
              {mode === "light" ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List
            sx={{ minWidth: 180, bgcolor: "background.paper" }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            title="Kids Fashion (available for both boys and girls)"
          >
            <ListItemButton onClick={handleClickAbout}>
              <ListItemIcon>
                <FcAbout size={30} />
              </ListItemIcon>
              <ListItemText primary="About" />
              {aboutclick ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={aboutclick} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }} onClick={()=>{navigate("/company")}}>
                  <ListItemIcon>
                    <ImOffice size={20} color="#00FFFF" />
                  </ListItemIcon>
                  <ListItemText primary="Company" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }} onClick={()=>{navigate("/carrers")}}>
                  <ListItemIcon>
                    <BsPersonWorkspace size={20} color="#A64D79" />
                  </ListItemIcon>
                  <ListItemText primary="Carrers" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }} onClick={()=>{navigate("/contact")}}>
                  <ListItemIcon>
                    <MdContactPage size={20} color="#7FFF00" />
                  </ListItemIcon>
                  <ListItemText primary="Contact Us" />
                </ListItemButton>
              </List>
            </Collapse>
          </List>
          <List
            sx={{ minWidth: 180, bgcolor: "background.paper" }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            title="Mens Fashion (all type of collections are available)"
          >
            <ListItemButton onClick={handleClickMen}>
              <ListItemIcon>
                <FcBusinessman size={30} />
              </ListItemIcon>
              <ListItemText primary="M-Fashion" color="black" />
              {menclick ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={menclick} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }} onClick={()=>navigate("/shirts")}>
                  <ListItemIcon>
                    <IoShirtSharp size={20} color="red" />
                  </ListItemIcon>
                  <ListItemText primary="Shirts" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }} onClick={()=>navigate("/pants")}>
                  <ListItemIcon>
                    <PiPantsBold size={20} color="blue" />
                  </ListItemIcon>
                  <ListItemText primary="Pants" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }} onClick={()=>navigate("/trousers")}>
                  <ListItemIcon>
                    <GiUnderwearShorts size={20} color="green" />
                  </ListItemIcon>
                  <ListItemText primary="Trousers" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }} onClick={()=>navigate("/innerwears")}>
                  <ListItemIcon>
                    <GiUnderwear size={20} color="purple" />
                  </ListItemIcon>
                  <ListItemText primary="Innerwears" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }} onClick={()=>navigate("/accessories-men")}>
                  <ListItemIcon>
                    <IoIosBriefcase size={20} color="DodgerBlue" />
                  </ListItemIcon>
                  <ListItemText primary="Accessories" />
                </ListItemButton>
              </List>
            </Collapse>
          </List>
          <List
            sx={{ minWidth: 180, bgcolor: "background.paper" }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            title="Womens Fashion (all type of collections are available)"
          >
            <ListItemButton onClick={handleClickWomen}>
              <ListItemIcon>
                <FcBusinesswoman size={30} />
              </ListItemIcon>
              <ListItemText primary="W-Fashion" />
              {womenclick ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={womenclick} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }} onClick={()=>navigate("/tops")}>
                  <ListItemIcon>
                    <GiShirt size={20} color="orange" />
                  </ListItemIcon>
                  <ListItemText primary="Tops" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }} onClick={()=>navigate("/bottoms")}>
                  <ListItemIcon>
                    <PiPantsFill size={20} color="blue" />
                  </ListItemIcon>
                  <ListItemText primary="Bottoms" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }} onClick={()=>navigate("/accessories-women")}>
                  <ListItemIcon>
                    <BsFillSuitcase2Fill size={20} color="orangered" />
                  </ListItemIcon>
                  <ListItemText primary="Accessories" />
                </ListItemButton>
              </List>
            </Collapse>
          </List>
          <List
            sx={{ minWidth: 180, bgcolor: "background.paper" }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            title="Kids Fashion (available for both boys and girls)"
          >
            <ListItemButton onClick={handleClickKids}>
              <ListItemIcon>
                <TbMoodKid size={30} color="blue" />
              </ListItemIcon>
              <ListItemText primary="K-Fashion" />
              {kidsclick ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={kidsclick} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }} onClick={()=>navigate("/shirts-kids")}>
                  <ListItemIcon>
                    <GiShirt size={20} color="#008B8B" />
                  </ListItemIcon>
                  <ListItemText primary="Shirts" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }} onClick={()=>navigate("/pants-kids")}>
                  <ListItemIcon>
                    <PiPantsFill size={20} color="#000080" />
                  </ListItemIcon>
                  <ListItemText primary="Pants" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }} onClick={()=>navigate("/accessories-kids")}>
                  <ListItemIcon>
                    <BsFillSuitcase2Fill size={20} color="#C71585" />
                  </ListItemIcon>
                  <ListItemText primary="Accessories" />
                </ListItemButton>
              </List>
            </Collapse>
          </List>
          <List>
            <Box sx={{ textAlign: "center" }}>
              <Button variant="outlined" color="error">
                Logout
              </Button>
            </Box>
          </List>
          <List>
            <Box sx={{ textAlign: "center" }}>
              <Button
                variant="outlined"
                color="success"
                onClick={() => {
                  navigate("/charts");
                }}
              >
                Logistical Charts
              </Button>
            </Box>
          </List>
        </Drawer>
        <Main open={open}>
          <DrawerHeader />
          <Routes>
            {/* Home */}
            <Route path="/" element={<Home />} />
            {/* About  */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/company" element={<Company />} />
            <Route path="/carrers" element={<Carrers />} />
            {/* Men's Fashion */}
            <Route path="/shirts" element={<Shirts />} />
            <Route path="/pants" element={<Pants />} />
            <Route path="/trousers" element={<Trousers />} />
            <Route path="/innerwears" element={<Innerwears />} />
            <Route path="/accessories-men" element={<AccessoriesMen />} />
            {/* Women's Fashion */}
            <Route path="/tops" element={<Tops />} />
            <Route path="/bottoms" element={<Bottoms />} />
            <Route path="/accessories-women" element={<AccessoriesWomen />} />
            {/* Kid's Fashion */}
            <Route path="/shirts-kids" element={<ShirtsKids />} />
            <Route path="/pants-kids" element={<PantsKids />} />
            <Route path="/accessories-kids" element={<AccessoriesKids />} />
            {/* Charts  */}
            <Route path="/charts" element={<Chart />} />
            
          </Routes>
        </Main>
      </Box>
    </ThemeProvider>
  );
}
