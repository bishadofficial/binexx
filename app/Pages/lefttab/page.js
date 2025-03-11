"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import DownloadDrawer from "../download/page";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Download } from 'lucide-react';
import { useRouter } from 'next/navigation';

function DialogDemo() {
  const [open, setOpen] = useState(false);

  const router = useRouter();

  return (
    <div className="flex items-center justify-between">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">⚠️</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>NOT WORKING?</DialogTitle>
            <DialogDescription>
              If you don't open a Pocket Option Account using our link, it's not gonna work.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <a
                href="https://u3.shortink.io/register?utm_campaign=768999&utm_source=affiliate&utm_medium=sr&a=vrod5x0GrnPvRf&ac=binexx"
                target="_blank"
                rel="noopener noreferrer"
                className="col-span-4"
              >
                <Button className="w-full">Open Account</Button>
              </a>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                ENTER ID
              </Label>
              <Input id="username" className="col-span-3" />
            </div>
          </div>
          <DialogFooter>
            <Button type="button" onClick={() => setOpen(false)}>
              Save changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      


      <div className="flex justify-center items-center">
      <DownloadDrawer>
        <button className="flex flex-col items-center text-white">
          <Download size={28} />
        </button>
      </DownloadDrawer>
    </div>
    </div>
  );
}

export default DialogDemo;
