import { Metadata } from "next";
import React from "react";
import NewJobForm from "./NewJobForm";

type Props = {};

export const metadata: Metadata = {
  // sadece server componentte metadata kullanabiliyoruz. bundan dolayı burada sadece ilgili client component return ettik
  title: "Post a new job",
};

export default function Page({}: Props) {
  return <NewJobForm />;
}
