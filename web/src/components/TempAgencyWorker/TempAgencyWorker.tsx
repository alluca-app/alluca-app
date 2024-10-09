import * as React from 'react'

import { Badge } from 'web/src/components/ui/badge'

import { cn } from 'src/lib/utils'

type TempAgencyWorkerProps = {
  className?: string
}

const TempAgencyWorker = ({ className }: TempAgencyWorkerProps) => {
  return (
    <div className={cn('flex flex-col', className)}>
      <span className="font-semibold">Achternaam Voornaam</span>
      <Badge className="w-fit bg-black text-primary-foreground/50">
        Uitzendbureau
      </Badge>
    </div>
  )
}

export default TempAgencyWorker
