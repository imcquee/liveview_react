import React, { useState } from "react";
import EmployeeForm from "./EmployeeForm";
import { Button } from "@/components/ui/button";
import EmployeeList from "./EmployeeList";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Form, useForm } from "react-hook-form";

export interface EmployeeProps {
  items: any;
  dispatch: (payload: Record<string, any>) => void;
}

export default function Employee({ items, dispatch }: EmployeeProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const form = useForm();

  const onEmployeeFormSubmit = async (values: any) => {
    setConfirmLoading(true);
    await dispatch({
      type: "ADD_EMPLOYEE",
      ...values,
    });
    setIsOpen(false);
  };

  return (
    <>
      <EmployeeList items={items} />

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button>Add Employee</Button>
        </DialogTrigger>
        <DialogContent>
          <EmployeeForm onFinish={onEmployeeFormSubmit} />
          {/* <DialogFooter>
            <Button type="submit" onClick={form.}>
              Save changes
            </Button>
          </DialogFooter> */}
        </DialogContent>
      </Dialog>
    </>
  );
}
