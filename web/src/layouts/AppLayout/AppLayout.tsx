import { Copyright } from 'lucide-react'

import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/dist/toast'

import Nav from 'src/components/Nav/Nav'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from 'src/components/ui/navigation-menu'
import {
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from 'src/components/ui/navigation-menu'
import { Separator } from 'src/components/ui/separator'

type AppLayoutProps = {
  children?: React.ReactNode
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col bg-primary text-primary-foreground">
      <Nav />
      <header>
        <NavigationMenu className="navigation-bar flex max-w-full flex-wrap items-center justify-between px-2 pt-4 md:pt-0">
          <DrawerMenu />
          <NavigationMenuList className="navigation-links-section mx-4 hidden items-center gap-1 xs:flex">
            <NavigationMenuItem>
              <Link to={routes.overview()}>
                <img
                  src={notextlogo}
                  alt="logo"
                  className="my-4 mr-0 max-w-10 rounded-full drop-shadow-sm transition-all hover:brightness-110"
                />
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                asChild
              >
                <Link to={routes.overview()}>Overzicht</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                asChild
              >
                <Link to={routes.plan()}>Plan</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link to={routes.jobProfiles()}>Functieprofielen</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
          <NavigationMenuList className="user-profile-section mx-4 flex items-center">
            <DropdownMenu>
              <DropdownMenuTrigger className="font-medium hover:text-accent focus:outline-dashed focus:outline-muted-foreground">
                <Avatar className="user-avatar drop-shadow-sm hover:brightness-105">
                  <AvatarImage src={avatar} alt="avatar" />
                  <AvatarFallback>MJ</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="user-profile-menu row-span-3 mr-4 w-[180px] bg-card-foreground py-1 text-card lg:grid-cols-[.75fr_1fr]">
                <DropdownMenuLabel>
                  <div className="user-profile flex flex-col items-center">
                    <span className="user-name pr-2 text-muted-foreground/80">
                      Meneer Jansen
                    </span>
                    <span className="email text-xs font-thin text-muted/70">
                      {currentUser.email}
                    </span>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator className=" bg-accent/30" />
                <DropdownMenuItem>
                  <button className="flex w-full">
                    <User2Icon size={16} className="mr-1" />
                    Profiel
                  </button>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <button className="flex w-full">
                    <LucideSettings size={16} className="mr-1" />
                    Settings
                  </button>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <button className="flex w-full" onClick={logOut}>
                    <LogOutIcon size={16} className="mr-1" />
                    Logout
                  </button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </NavigationMenuList>
        </NavigationMenu>
      </header>
      <main className="max-w-full flex-grow flex-col break-words bg-transparent px-4 pb-20 pt-2">
        {children}
      </main>
      <footer className="flex flex-wrap items-center justify-center gap-2 p-4 text-accent/20 sm:justify-between">
        <div className="copyright-section flex items-center gap-0.5">
          <Copyright size={20} />
          <span className="text-nowrap font-medium">2024 Fleckz</span>
        </div>
        <Separator className="opacity-10 xs:hidden"></Separator>
        <NavigationMenu className="privacy-and-services-section">
          <NavigationMenuList className="mr-2 flex gap-1">
            <NavigationMenuItem>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                href=""
              >
                Privacybeleid
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                href=""
              >
                Servicevoorwaarden
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </footer>
      <Toaster />
    </div>
  )
}

export default AppLayout
