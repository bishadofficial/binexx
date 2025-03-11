'use client';

import { useState } from 'react';
import { Drawer, DrawerContent, DrawerTrigger, DrawerHeader, DrawerTitle } from '@/components/ui/drawer';
import { Download } from 'lucide-react';
import Image from 'next/image';

export default function DownloadDrawer({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>{children}</DrawerTrigger>
      <DrawerContent className="p-4 text-center">
        <DrawerHeader>
          <DrawerTitle>Drawer</DrawerTitle>
        </DrawerHeader>
         <Image
                src="/howto.gif"
                alt='how to download'
                width={500}
                height={500}
              />
      </DrawerContent>
    </Drawer>
  );
}
