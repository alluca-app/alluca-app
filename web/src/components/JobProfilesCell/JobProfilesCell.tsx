import { Car, Edit } from 'lucide-react'
import type { JobProfilesQuery, JobProfilesQueryVariables } from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import RatingStars from '../RatingStars/RatingStars'
import { Badge } from '../ui/badge'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card'
import { Separator } from '../ui/separator'

export const QUERY: TypedDocumentNode<
  JobProfilesQuery,
  JobProfilesQueryVariables
> = gql`
  query JobProfilesQuery {
    jobProfiles {
      id
      name
      qualityNeeded
      yearsOfExp
      hourlyWageMin
      hourlyWageMax
      maxTravelDistance
      isTravelReimbursed
      isCarAvailable
      kmAllowance
      totalBudgetPerHour
      comment
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  jobProfiles,
}: CellSuccessProps<JobProfilesQuery>) => {
  return (
    <>
      {jobProfiles.map((item) => {
        return (
          <Card key={item.id}>
            <CardHeader className="relative flex justify-between">
              <CardTitle className="w-4/5 break-words">{item.name}</CardTitle>
              <Edit className="absolute right-4 top-4 text-muted-foreground hover:cursor-pointer hover:text-accent/70" />
            </CardHeader>
            <CardContent>
              <div className="-mt-2 flex flex-wrap items-center justify-between">
                <div className="font-semibold">
                  €{item.hourlyWageMin}–€{item.hourlyWageMax}
                  <RatingStars value={item.qualityNeeded}></RatingStars>
                </div>
                <div className="text-lg font-semibold text-accent-darker">
                  {item.yearsOfExp} jaren
                  <span className="relative -top-1">+</span>
                </div>
              </div>
              <Separator className="my-4 bg-primary-foreground/70" />
              <div className="flex flex-wrap items-center gap-2 pb-4">
                <Car />
                <div className="flex flex-wrap gap-2">
                  {item.isCarAvailable && <Badge>Auto</Badge>}
                  {item.isTravelReimbursed && <Badge>Vergoed</Badge>}
                </div>
              </div>
              {item.isTravelReimbursed}
              <div>
                <span>Max. reisafstand: </span>
                <span className="font-semibold">
                  {item.maxTravelDistance} km.
                </span>
              </div>
              {item.kmAllowance && (
                <div>
                  Km. vergoeding:{' '}
                  <span className="font-semibold"> €{item.kmAllowance}</span>
                </div>
              )}
              <Separator className="my-4 bg-primary-foreground/70" />
              {item.totalBudgetPerHour && (
                <div className="font-semibold">
                  Budget €{item.totalBudgetPerHour}/uur
                </div>
              )}
            </CardContent>
            <CardFooter className="-mt-2 hyphens-auto text-sm">
              {item.comment}
            </CardFooter>
          </Card>
        )
      })}
    </>
  )
}