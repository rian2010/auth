import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import CompanyDashboardLayout from "@/Layouts/CompanyDashboardLayout";

export default function Dashboard({ auth }) {
  return (
    <CompanyDashboardLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-white leading-tight">
          Dashboard
        </h2>
      }
    >
      <Head title="Dashboard" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900">
              Welcome User {auth.user.name}
            </div>
          </div>
        </div>
      </div>
    </CompanyDashboardLayout>
  );
}
