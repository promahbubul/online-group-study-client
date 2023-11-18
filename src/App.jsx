import { Outlet } from "react-router-dom";
import MainLayout from "./layout/MainLayout";

function App() {
  return (
    <div className="">
      <MainLayout>
        <Outlet></Outlet>
      </MainLayout>
    </div>
  );
}

export default App;
