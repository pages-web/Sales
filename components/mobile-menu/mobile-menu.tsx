"use client";
import React, { useState } from "react";
import { Button, Drawer } from "antd";
import { MenuIcon } from "lucide-react";
import { NavigationMenu } from "../ui/navigation-menu";
import Link from "next/link";

const App: React.FC = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className="md:hidden block">
      <Button onClick={showDrawer} className="border-none bg-none">
        <MenuIcon />
      </Button>
      <Drawer title="Categories" onClose={onClose} open={open}>
        <NavigationMenu className="flex gap-8  flex-col text-sm font-medium  ">
          <div className="flex flex-col gap-4 p-4">
            <Link href={"/about"}>Бидний тухай.</Link>

            <p>Сургалт</p>

            <Link href={"https://pams-mongolia.vercel.app/"}>Цаг авах</Link>

            <Link href={"/news"}>Мэдээ мэдээлэл</Link>
          </div>
        </NavigationMenu>
      </Drawer>
    </div>
  );
};

export default App;
