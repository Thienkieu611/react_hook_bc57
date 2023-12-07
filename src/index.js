import ReactDOM from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomeTemplate from "./templates/HomeTemplate";
import Home from "./pages/Home";

//cấu hình redux
import { Provider } from "react-redux";
import { store } from "./redux/store";
import UseStateDemo from "./pages/hooks/UseStateDemo";
import ChangeProfile from "./pages/hooks/EXUseState/ChangeProfile";
import UseEffect_DidMount from "./pages/hooks/UseEffectDemo/UseEffect_DidMount";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<HomeTemplate />}>
          <Route index element={<Home />}></Route>
          <Route path="use-state-demo" element={<UseStateDemo />}></Route>
          <Route
            path="use-state-change-profile"
            element={<ChangeProfile />}
          ></Route>
          <Route
            path="use-effect-didmount"
            element={<UseEffect_DidMount />}
          ></Route>

          <Route path="*" element={<Navigate to="" />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
