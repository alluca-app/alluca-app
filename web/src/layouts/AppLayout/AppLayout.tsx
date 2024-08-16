import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import { Copyright, LogOutIcon, LucideSettings, User2Icon } from 'lucide-react'

import { Link, routes } from '@redwoodjs/router'

import { useAuth } from 'src/auth'
import { Avatar, AvatarFallback, AvatarImage } from 'src/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from 'src/components/ui/dropdown-menu'
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

import avatar from './avatar.png'
import notextlogo from './notextlogo.png'

type AppLayoutProps = {
  children?: React.ReactNode
}

const AppLayout = ({ children }: AppLayoutProps) => {
  const { logOut, currentUser } = useAuth()
  return (
    <div className="flex min-h-screen flex-col bg-primary text-primary-foreground">
      <header>
        <NavigationMenu className="navigation-bar flex max-w-full flex-wrap items-center justify-between px-2 pt-4 md:pt-0">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <HamburgerMenuIcon className="visible-mobile hover:pointer mx-2 h-7 w-7 transition-colors hover:text-accent" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="ml-4 border-none bg-primary-foreground p-2">
              <DropdownMenuItem className="focus:bg-black/30 focus:text-accent">
                <Link to={routes.overview()}>Overzicht</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="focus:bg-black/30 focus:text-accent">
                <Link to={routes.plan()}>Plan</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="focus:bg-black/30 focus:text-accent">
                <Link to={routes.jobProfiles()}>Functieprofielen</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <NavigationMenuList className="navigation-links-section hidden-mobile mx-4 flex items-center gap-1">
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
              <DropdownMenuTrigger className="font-medium hover:text-accent">
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
                  <button className="flex">
                    <User2Icon size={16} className="mr-1" />
                    Profiel
                  </button>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <button className="flex">
                    <LucideSettings size={16} className="mr-1" />
                    Settings
                  </button>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <button className="flex" onClick={logOut}>
                    <LogOutIcon size={16} className="mr-1" />
                    Logout
                  </button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </NavigationMenuList>
        </NavigationMenu>
      </header>
      <main className="max-w-full flex-grow flex-col break-words bg-transparent p-4">
        {children}
      </main>
      <footer className="flex flex-wrap items-center justify-between px-4 pb-2 text-accent/40">
        <div className="copyright-section flex items-center gap-0.5">
          <Copyright size={20} />
          <span className="text-nowrap font-medium">2024 Alluca</span>
        </div>
        <Separator className="visible-mobile opacity-10"></Separator>
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
    </div>
  )
}

export default AppLayout
