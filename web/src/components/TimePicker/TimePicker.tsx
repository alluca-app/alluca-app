import * as React from 'react'

import { cn } from 'src/lib/utils'

type TimePickerProps = {
  time: string
  className?: string
}

const TimePicker = ({ time, className }: TimePickerProps) => {
  return (
    <div
      className={cn(
        'mx-auto flex items-center justify-center gap-5 py-14',
        className
      )}
    >
      <span className="mx-auto text-xl text-muted/50">12 Okt 2024</span>
      <input
        type="time"
        defaultValue={time}
        className="rounded-sm bg-white px-2 text-center text-3xl text-primary"
      />
    </div>
  )
}

export default TimePicker
