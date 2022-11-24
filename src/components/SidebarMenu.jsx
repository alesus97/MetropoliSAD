import { Movie, Chair, Dashboard, Adb, Quiz, EmojiEvents } from "@mui/icons-material";


import React from "react";

 export const menuItem = [
    {
      name: "Schedule",
      path: "/schedule",
      icon: <Dashboard color="primary" />,
    },
    {
      name: "Film",
      path: "/film",
      icon: <Movie color="primary" />,
    },
    {
      name: "Hall",
      path: "/hall",
      icon: <Chair color="primary" />,
    },
    {
      name: "Quiz",
      path: "/quiz",
      icon: <Quiz color="primary" />,
    },
    {
      name: "Store",
      path:"/store",
      icon: <EmojiEvents color="primary"/>,

    },
  ];