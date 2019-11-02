/*!

=========================================================
* Black Dashboard React v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.jsx";
import Icons from "views/Icons.jsx";
import Map from "views/Map.jsx";
import Notifications from "views/Notifications.jsx";
import Rtl from "views/Rtl.jsx";
import TableList from "views/TableList.jsx";
import Typography from "views/Typography.jsx";
import UserProfile from "views/UserProfile.jsx";
import irisProfile from "views/irisProfile.jsx";

var routes = [
  {
    path: "/dashboard",
    name: "Welcome to the Iris",
    rtlName: "아이리스",
    icon: "tim-icons icon-shape-star",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/irisProfile",
    name: "ł Iris",
    rtlName: "경희",
    icon: "tim-icons icon-heart-2",
    component: irisProfile,
    layout: "/admin"
  },
  {
    path: "/notifications",
    name: "ł Sura",
    rtlName: "규완",
    icon: "tim-icons icon-heart-2",
    component: Notifications,
    layout: "/admin"
  },
  {
    path: "/user-profile",
    name: "ł thriper",
    rtlName: "규섭",
    icon: "tim-icons icon-heart-2",
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/tables",
    name: "ł Faux",
    rtlName: "해광",
    icon: "tim-icons icon-heart-2",
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/typography",
    name: "ł Haram",
    rtlName: "하람",
    icon: "tim-icons icon-heart-2",
    component: Typography,
    layout: "/admin"
  },
  {
    path: "/typography",
    name: "ł SearchingBomb",
    rtlName: "창운",
    icon: "tim-icons icon-heart-2",
    component: Rtl,
    layout: "/admin"
  },
  {
    path: "/typography",
    name: "ł Yubin",
    rtlName: "유빈",
    icon: "tim-icons icon-heart-2",
    component: Rtl,
    layout: "/admin"
  },
  {
    path: "/typography",
    name: "ł William",
    rtlName: "윌",
    icon: "tim-icons icon-heart-2",
    component: Rtl,
    layout: "/rtl"
  },
  {
    path: "/map",
    name: "Map",
    rtlName: "خرائط",
    icon: "tim-icons icon-heart-2",
    component: Map,
    layout: "/admin"
  },
  {
    path: "/icon",
    name: "icon",
    rtlName: "خرائط",
    icon: "tim-icons icon-heart-2",
    component: Icons,
    layout: "/admin"
  },
];
export default routes;
