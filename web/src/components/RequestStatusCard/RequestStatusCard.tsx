import { useState } from 'react'

import { format } from 'date-fns'
import { nl } from 'date-fns/locale/nl'
import {
  BriefcaseBusiness,
  CalendarDays,
  Clock,
  Edit,
  MapPin,
  MousePointerClick,
  Users,
} from 'lucide-react'
import { WorkRequestsQuery } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'

import { formatAddress } from 'src/lib/formatAddress'

import AssignedShifts from '../AssignedShifts/AssignedShifts'
import PlanWorkComponent from '../PlanWorkComponent/PlanWorkComponent'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Progress } from '../ui/progress'
import { Separator } from '../ui/separator'

type RequestStatusCardProps = {
  request: WorkRequestsQuery['workRequests'][0]
  className?: string
}
const RequestStatusCard = ({ className, request }: RequestStatusCardProps) => {
  const [editOpen, setEditOpen] = useState(false)

  return (
    <Card className={className}>
      <CardHeader className="relative">
        <CardTitle className="hyphens-auto sm:w-2/3">
          <Link
            className="hover:text-accent"
            to={routes.workRequest({ id: request.id })}
          >
            {request.jobProfile.name}
            <MousePointerClick className="relative -top-1 ml-1 inline size-5 text-accent" />
          </Link>
        </CardTitle>
        {request.status === 'DRAFT' && (
          <>
            <Badge
              variant="outline"
              className="absolute right-4 top-2 hover:cursor-pointer"
              onClick={() => setEditOpen(true)}
            >
              Concept <Edit className="ml-1 size-3" />
            </Badge>
            <PlanWorkComponent
              defaultValues={{
                ...request,
                addressId: request.location.id,
                jobProfileId: request.jobProfile.id,
              }}
              open={editOpen}
              setOpen={setEditOpen}
              hideTrigger
            />
          </>
        )}
        {request.status === 'SUBMITTED' && (
          <Badge className="absolute right-4 top-2 bg-warning/40 text-gray-600 hover:bg-warning/70 hover:text-white">
            In uitvoering
          </Badge>
        )}
        {request.status === 'CONFIRMED' && (
          <Badge variant="secondary" className="absolute right-4 top-2">
            Geaccepteerd
          </Badge>
        )}
        {request.status === 'DONE' && (
          <Badge
            variant="secondary"
            className="absolute right-4 top-2 bg-primary/30 hover:bg-primary/50"
          >
            Afgerond
          </Badge>
        )}
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
        {request.status === 'DRAFT' && (
          <>
            <Separator className="opacity-40" />
            <div>
              <span>Gevraagde medewerkers</span>
              <div className="flex items-center gap-1 font-semibold">
                <span className="pl-7">Aantal:</span>
                {request.numWorkers}
              </div>
            </div>
          </>
        )}
        {request.status === 'SUBMITTED' && (
          <>
            <Separator className="opacity-40" />
            <div>
              <span>Gevraagde medewerkers</span>
              <div className="flex items-center gap-1 font-semibold">
                <span className="pl-7">Aantal:</span>
                {request.numWorkers}
              </div>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Users className="size-8" />
              <div className="flex w-full flex-col">
                <span className="text-right text-sm font-semibold">
                  {
                    request.shifts?.filter((s) => s.status == 'FULFILLED')
                      .length
                  }{' '}
                  van {request.numWorkers}
                </span>
                <Progress
                  value={
                    (request.shifts?.filter((s) => s.status === 'FULFILLED')
                      .length /
                      request.numWorkers) *
                    100
                  }
                ></Progress>
              </div>
            </div>
          </>
        )}
        {request.status === 'CONFIRMED' && <AssignedShifts request={request} />}
        {request.status === 'DONE' && (
          <>
            <Separator className="opacity-40" />
            <div className="flex justify-center">
              <Button className="text-accent">Voeg een recencie</Button>
              {/* This button will open a form that will add ratings after shifts are fulfilled. Form should have the number of hours fufilled and then the rating stars */}
            </div>
          </>
        )}
      </CardContent>
    </Card>
  )
}

export default RequestStatusCard
