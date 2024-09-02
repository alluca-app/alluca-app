import { format } from 'date-fns'
import { nl } from 'date-fns/locale/nl'
import {
  BriefcaseBusiness,
  CalendarDays,
  Clock,
  MapPin,
  MousePointerClick,
  Users,
} from 'lucide-react'
import { WorkRequestsQuery } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'

import { formatAddress } from 'src/lib/formatAddress'

import { Badge } from '../ui/badge'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card'
import { Separator } from '../ui/separator'

type RequestStatusCardProps = {
  request: WorkRequestsQuery['workRequests'][0]
  className?: string
}
const RequestStatusCard = ({ className, request }: RequestStatusCardProps) => {
  return (
    <Card className={className}>
      <CardHeader className="relative">
        <CardTitle>
          <Link
            className="hover:text-accent"
            to={routes.workRequest({ id: request.id })}
          >
            {request.jobProfile.name}
            <MousePointerClick className="relative -top-2 ml-1 inline size-5 text-accent" />
          </Link>
        </CardTitle>
        <Badge className="absolute right-4 top-2">{request.status}</Badge>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex items-center gap-1 font-semibold">
          <CalendarDays />
          {format(request.startDate, 'EEEE d MMMM, yyyy', {
            locale: nl,
          })}
        </div>
        <div className="flex items-center gap-1 font-semibold">
          <Clock /> {format(request.startDate, 'HH:mm')}
          &ndash;
          {format(request.endDate, 'HH:mm')}
        </div>
        <Separator className="opacity-40" />
        <div className="flex items-center gap-1">
          <BriefcaseBusiness /> {request.projectName}
        </div>
        <div className="flex items-center gap-1">
          <MapPin /> {formatAddress(request.location)}
        </div>
        <Separator className="opacity-40" />
        <div>
          <div className="flex items-center gap-1">
            <Users /> Gevraagde medewerkers
          </div>
          <div className="flex items-center gap-1 font-medium">
            <span className="pl-7">Aantal:</span>
            {request.numWorkers}
          </div>
        </div>
        <div className="flex w-4/5 items-center justify-center gap-2">
          <Users className="size-8" />
          <div className="flex flex-col">
            <span className="text-sm font-semibold">2 van 3</span>
          </div>
        </div>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  )
}

export default RequestStatusCard
