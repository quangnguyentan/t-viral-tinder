import FixedBottomNavigation from "@/components/FixedBottomNavigation";
import { Outlet } from "react-router-dom";

const Public = () => {
  return (
    <div>
      <FixedBottomNavigation />
      <Outlet />
    </div>
  );
};

export default Public;