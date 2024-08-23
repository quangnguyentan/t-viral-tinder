import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";
import HomePage from "@/pages/HomePage";
import { useEffect, useState } from "react";
import Evalute from "@/pages/Evalute";
import Cinema from "@/pages/Cinema";
import Province from "@/pages/Province";
import Profile from "@/pages/Profile";
import PersonIcon from "@mui/icons-material/Person";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import WavesIcon from "@mui/icons-material/Waves";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import HomeIcon from "@mui/icons-material/Home";
export default function FixedBottomNavigation() {
  const messageExamples = [
    {
      page: <HomePage />,
    },
    {
      page: <Evalute />,
    },
    {
      page: <Province />,
    },
    {
      page: <Cinema />,
    },
    {
      page: <Profile />,
    },
  ];
  const page = localStorage.getItem("page");
  const [value, setValue] = useState(Number(page));
  const [activeComponent, setActiveComponent] = useState(
    messageExamples[4].page
  );
  useEffect(() => {
    setActiveComponent(messageExamples[value].page);
  }, [value]);
  return (
    <Box
      sx={{
        pb: 7,
        width: "50%",
        mx: "auto",
        bgcolor: "#f2f2f5",
      }}
    >
      <CssBaseline />
      {activeComponent}
      <Paper
        sx={{
          py: 2,
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          width: "50%",
          mx: "auto",
        }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            localStorage.setItem("page", newValue);
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            label="Trang chủ"
            sx={{
              fontWeight: 600,
              fontSize: 40,
              color: "rgb(151, 151, 153)",
              ":focus": {
                color: "rebeccapurple",
              },
            }}
            icon={<HomeIcon sx={{ fontSize: 40 }} />}
          />
          <BottomNavigationAction
            label="Sảnh đánh giá"
            sx={{
              fontWeight: 600,
              fontSize: 40,
              color: "rgb(151, 151, 153)",
              ":focus": {
                color: "rebeccapurple",
              },
            }}
            icon={<AccessAlarmIcon sx={{ fontSize: 40 }} />}
          />

          <BottomNavigationAction
            sx={{
              fontWeight: 600,
              color: "palevioletred",
              ":focus": {
                color: "rebeccapurple",
              },
            }}
            icon={<WavesIcon sx={{ fontSize: 80 }} />}
          />
          <BottomNavigationAction
            label="Rạp chiếu phim"
            sx={{
              fontWeight: 600,
              fontSize: 40,
              color: "rgb(151, 151, 153)",
              ":focus": {
                color: "rebeccapurple",
              },
            }}
            icon={<LiveTvIcon sx={{ fontSize: 40 }} />}
          />
          <BottomNavigationAction
            label="Hồ sơ"
            sx={{
              fontWeight: 600,
              fontSize: 40,
              color: "rgb(151, 151, 153)",
              ":focus": {
                color: "rebeccapurple",
              },
            }}
            icon={<PersonIcon sx={{ fontSize: 40 }} />}
          />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
