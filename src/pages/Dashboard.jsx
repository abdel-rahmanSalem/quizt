import DashboardMain from "../components/DashboardMain";
import HeaderText from "../components/HeaderText";

function Dashboard() {
  return (
    <>
      <HeaderText>Welcome, [Name], to your dashboard</HeaderText>
      <DashboardMain />
    </>
  );
}

export default Dashboard;
