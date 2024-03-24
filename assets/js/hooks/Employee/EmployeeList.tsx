import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "@/components/ui/data-table";

export default function EmployeeList({ items }: { items: any }) {
  type Payment = {
    id: string;
    name: string;
    age: number;
    address: string;
  };

  const columns: ColumnDef<Payment>[] = [
    {
      accessorKey: "name",
      header: "Name",
    },
    {
      accessorKey: "age",
      header: "Age",
    },
    {
      accessorKey: "address",
      header: "Address",
    },
  ];

  return <DataTable columns={columns} data={items || []} />;
}
