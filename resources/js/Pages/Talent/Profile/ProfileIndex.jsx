import { Head, Link } from "@inertiajs/react";
import UserDashboardLayout from "@/Layouts/UserDashboardLayout";
import Icon from "@/Images/icon.png";
import Kampus from "@/Images/Kampus.jpg";
import { useState } from "react";
import UpdateProfileTalent from "./Partials/UpdateProfileTalent";
import DeleteUserForm from "./Partials/DeleteUserForm";

export default function Dashboard({ auth, education, mustVerifyEmail }) {
  return (
    <UserDashboardLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-white leading-tight">
          Profile
        </h2>
      }
    >
      <Head title="Dashboard" />

      <div>
        <UpdateProfileTalent
          mustVerifyEmail={mustVerifyEmail}
          status={status}
        />
      </div>

      <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
        <div className="max-w-xl">
          <DeleteUserForm />
        </div>
      </div>
    </UserDashboardLayout>
  );
}
