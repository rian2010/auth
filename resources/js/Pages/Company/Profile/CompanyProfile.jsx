import { Head } from "@inertiajs/react";
import CompanyDashboardLayout from "@/Layouts/CompanyDashboardLayout";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import UpdateProfile from "./Partials/UpdateProfile";

export default function Dashboard({ auth, mustVerifyEmail }) {
  return (
    <CompanyDashboardLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-white leading-tight">
          Profile
        </h2>
      }
    >
      <Head title="Dashboard" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
            <UpdateProfile mustVerifyEmail={mustVerifyEmail} />
          </div>
        </div>
      </div>
    </CompanyDashboardLayout>
  );
}
