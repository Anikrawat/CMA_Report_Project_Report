import { AppSidebar } from "@/components/sidebar/AppSidebar";
import DashboardHeader from "../../components/dashboard/DashboardHeader";
import DashboardStats from "../../components/dashboard/DashboardStats";


export default function dashboard() {
  return (

    <div className="flex">
      <div className="flex-1 p-1">
        <AppSidebar />
        <DashboardHeader />
        <DashboardStats />
      </div>
    </div>
  );
}
