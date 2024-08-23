import { Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";
import path from "./lib/path";
import "./index.css";

import NotFound from "./pages/404";
import Public from "./pages/public";
import Admin from "./pages/Admin";
import Collections from "./pages/Admin/Collection";
import CollectionForm from "./components/collections/CollectionForm";
import CollectionDetails from "./components/collections/_id";
import { Toaster } from "react-hot-toast";
import DetailCinema from "./pages/Cinema/_id";

import DetailEvalute from "./pages/Evalute/_id";
import Information from "./pages/Infomation";
import UpdateName from "./pages/UpdateName";
import UpdateBank from "./pages/UpdatBank";
import UpdateGender from "./pages/UpdateGender";

import Setting from "./pages/Setting";
import LotteryForm from "./components/lottery/LotteryForm";
import Lottery from "./pages/Admin/Lottery";

function App() {
  return (
    <div>
      <Routes>
        <Route element={<Public />} path={path.PUBLIC} />
        <Route element={<Admin />} path={path.ADMIN}>
          <Route element={<Collections />} path={path.COLLECTION} />
          <Route element={<CollectionForm />} path={path.CREATE_COLLECTION} />
          <Route
            element={<CollectionDetails />}
            path={path.COLLECTION_DETAIL}
          />
          <Route element={<LotteryForm />} path={path.CREATE_LOTTERY} />
          <Route element={<Lottery />} path={path.LOTTERY} />
        </Route>
        <Route element={<Information />} path={path.INFORMATION} />
        <Route element={<UpdateName />} path={path.NAME} />
        <Route element={<UpdateBank />} path={path.BANK} />
        <Route element={<UpdateGender />} path={path.GENDER} />

        <Route element={<Setting />} path={path.SETTING} />

        <Route element={<DetailCinema />} path={path.CINEMA_DETAIL} />
        {/* <Route element={<UserForm />} path={path.EDIT_USER} /> */}
        <Route element={<DetailEvalute />} path={path.LOTERY} />
        <Route element={<Auth />} path={path.LOGIN} />
        <Route element={<NotFound />} path="*" />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
