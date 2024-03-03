import JobPage from "@/components/JobPage";
import { notFound } from "next/navigation";
import React from "react";
import AdminSidebar from "./AdminSidebar";

type Props = {
  params: { slug: string };
};

export default async function page({ params: { slug } }: Props) {
  const job = await prisma?.job.findUnique({
    where: { slug },
  });

  if (!job) notFound();

  return (
    <main className="flex m-auto my-10 max-w-5xl flex-col items-center gap-5 px-3 md:flex-row md:items-start">
      <JobPage job={job} />
      <AdminSidebar job={job} />
    </main>
  );
}
