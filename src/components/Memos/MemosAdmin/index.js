import { Outlet } from "react-router-dom";
import AdminHeader from "./AdminHeader";

export default function AdminDatas() {
  return (
    <section id="memos">
      <AdminHeader />
      <Outlet />
    </section>
  );
}
