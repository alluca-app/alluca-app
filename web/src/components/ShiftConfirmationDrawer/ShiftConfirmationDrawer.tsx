import * as React from 'react'

import { ThumbsDown, ThumbsUp } from 'lucide-react'
import { Button } from 'web/src/components/ui/button'
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from 'web/src/components/ui/drawer'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from 'web/src/components/ui/tabs'

import TempAgencyWorker from 'src/components/TempAgencyWorker'
import TimePicker from 'src/components/TimePicker'
import { Badge } from 'src/components/ui/badge'

type ShiftConfirmationDrawerProps = {
  time: string
}

const ShiftConfirmationDrawer = ({ time }: ShiftConfirmationDrawerProps) => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button className="bg-accent/80 text-black hover:bg-accent hover:text-black">
          Inchecken: Nu
        </Button>
      </DrawerTrigger>
      <DrawerContent className="container border-secondary/10 bg-gray-950 px-4 text-white/70">
        <Tabs defaultValue="shiftCheckIn">
          <TabsList className="mx-auto mt-2 grid grid-cols-3 gap-2">
            <TabsTrigger
              value="shiftCheckIn"
              className="text-primary-foreground/30 data-[state=active]:bg-black/30 data-[state=active]:text-secondary"
            >
              Inchecken
            </TabsTrigger>
            <TabsTrigger
              value="shiftCheckOut"
              className=" text-primary-foreground/30 data-[state=active]:bg-black/30 data-[state=active]:text-secondary"
            >
              Uitchecken
            </TabsTrigger>
            <TabsTrigger
              value="shiftSummary"
              className="text-primary-foreground/30 data-[state=active]:bg-black/30 data-[state=active]:text-secondary"
            >
              Samenvatting
            </TabsTrigger>
          </TabsList>
          <TabsContent value="shiftCheckIn">
            <div className="my-4 flex h-[250px] flex-col justify-between">
              <div className="flex flex-col">
                <h3 className="flex flex-wrap items-center justify-between">
                  <div className="flex gap-4">
                    <TempAgencyWorker />
                    <Badge
                      variant="outline"
                      className=" h-4 bg-lime-500 text-black"
                    >
                      In
                    </Badge>
                  </div>
                  <Button className="bg-gray-900 text-accent">Nu</Button>
                </h3>
                <TimePicker time={time} />
              </div>
              <Button className="bg-accent/80 text-black hover:bg-accent hover:text-black">
                Bevestingen
              </Button>
            </div>
          </TabsContent>
          <TabsContent value="shiftCheckOut">
            <div className="my-4 flex h-[250px] flex-col justify-between">
              <div className="flex flex-col">
                <h3 className="flex flex-wrap items-center justify-between">
                  <div className="flex gap-4">
                    <TempAgencyWorker />
                    <Badge
                      variant="outline"
                      className=" h-4 bg-red-500 text-black"
                    >
                      Uit
                    </Badge>
                  </div>
                  <Button className="bg-gray-900 text-accent">Nu</Button>
                </h3>
                <TimePicker time={time} />
              </div>
              <Button className="bg-accent/80 text-black hover:bg-accent hover:text-black">
                Bevestingen
              </Button>
            </div>
          </TabsContent>
          <TabsContent value="shiftSummary">
            <div className="my-4 flex h-[250px] flex-col justify-between">
              <div>
                <h3 className="flex flex-wrap items-center justify-between">
                  <TempAgencyWorker />
                  <div className="flex gap-2">
                    <Button className="bg-gray-900 p-2 text-accent">
                      <ThumbsUp className="size-5" />
                    </Button>
                    <Button className="bg-gray-900 p-2 text-accent">
                      <ThumbsDown className="size-5" />
                    </Button>
                  </div>
                </h3>
                <div className="my-4 flex flex-col items-center">
                  <span className="mx-auto text-xl text-muted/50">
                    12 Okt 2024
                  </span>
                  <div className="container my-4 grid grid-cols-3 place-items-center gap-20 xs:gap-0">
                    <div className="center flex-col">
                      <span className="font-extralight text-white/50">
                        Inchecken
                      </span>
                      <span className="text-3xl">00:00</span>
                    </div>
                    <div className="center flex-col">
                      <span className="text-4xl font-semibold">5:24</span>
                      <span className="font-extralight text-white/50">
                        uren
                      </span>
                    </div>
                    <div className="center flex-col">
                      <span className="font-extralight text-white/50">
                        Uitchecken
                      </span>
                      <span className="text-3xl">00:00</span>
                    </div>
                  </div>
                </div>
              </div>
              <Button className="bg-accent/80 text-black hover:bg-accent hover:text-black">
                Bevestingen
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </DrawerContent>
    </Drawer>
  )
}

export default ShiftConfirmationDrawer
