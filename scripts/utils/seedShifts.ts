import type { Prisma, PrismaClient } from '@prisma/client'

export async function seedShifts(db: PrismaClient) {
  const mockShifts: Prisma.ShiftCreateManyInput[] = [
    {
      id: 'mock_shift_1_1',
      createdAt: '2023-08-12T08:00:00.000Z',
      updatedAt: '2023-09-01T10:00:00.000Z',
      status: 'UNFULFILLED',
      workRequestId: 'mock_work_request_1',
      rating: null,
      tempAgencyId: null,
    },
    {
      id: 'mock_shift_1_2',
      createdAt: '2023-08-14T09:00:00.000Z',
      updatedAt: '2023-09-02T11:00:00.000Z',
      status: 'UNFULFILLED',
      workRequestId: 'mock_work_request_1',
      rating: null,
      tempAgencyId: null,
    },
    {
      id: 'mock_shift_2_1',
      createdAt: '2023-08-16T10:00:00.000Z',
      updatedAt: '2023-09-03T12:00:00.000Z',
      status: 'FULFILLED',
      workRequestId: 'mock_work_request_2',
      rating: null,
      tempAgencyId: null,
    },
    {
      id: 'mock_shift_2_2',
      createdAt: '2023-08-18T11:00:00.000Z',
      updatedAt: '2023-09-04T13:00:00.000Z',
      status: 'UNFULFILLED',
      workRequestId: 'mock_work_request_2',
      rating: null,
      tempAgencyId: null,
    },
    {
      id: 'mock_shift_2_3',
      createdAt: '2023-08-20T12:00:00.000Z',
      updatedAt: '2023-09-05T14:00:00.000Z',
      status: 'UNFULFILLED',
      workRequestId: 'mock_work_request_2',
      rating: null,
      tempAgencyId: null,
    },
    {
      id: 'mock_shift_3_1',
      createdAt: '2024-08-25T10:30:00.000Z',
      updatedAt: '2024-09-01T11:00:00.000Z',
      status: 'FULFILLED',
      workRequestId: 'mock_work_request_3',
      rating: null,
      tempAgencyId: 'agency_3',
    },
    {
      id: 'mock_shift_3_2',
      createdAt: '2024-07-15T09:00:00.000Z',
      updatedAt: '2024-08-20T14:30:00.000Z',
      status: 'UNFULFILLED',
      workRequestId: 'mock_work_request_3',
      rating: null,
      tempAgencyId: null,
    },
    {
      id: 'mock_shift_3_3',
      createdAt: '2024-06-10T08:00:00.000Z',
      updatedAt: '2024-06-15T12:45:00.000Z',
      status: 'UNFULFILLED',
      workRequestId: 'mock_work_request_3',
      rating: null,
      tempAgencyId: 'agency_1',
    },
    {
      id: 'mock_shift_4_1',
      createdAt: '2024-08-30T14:15:00.000Z',
      updatedAt: '2024-09-02T09:30:00.000Z',
      status: 'FULFILLED',
      workRequestId: 'mock_work_request_4',
      rating: null,
      tempAgencyId: 'agency_1',
    },
    {
      id: 'mock_shift_4_2',
      createdAt: '2024-08-10T11:45:00.000Z',
      updatedAt: '2024-08-20T13:15:00.000Z',
      status: 'FULFILLED',
      workRequestId: 'mock_work_request_4',
      rating: null,
      tempAgencyId: 'agency_2',
    },
    {
      id: 'mock_shift_4_3',
      createdAt: '2024-07-01T07:20:00.000Z',
      updatedAt: '2024-07-10T15:50:00.000Z',
      status: 'FULFILLED',
      workRequestId: 'mock_work_request_4',
      rating: null,
      tempAgencyId: 'agency_1',
    },
    {
      id: 'mock_shift_5_1',
      createdAt: '2024-09-01T10:00:00.000Z',
      updatedAt: '2024-09-03T12:00:00.000Z',
      status: 'FULFILLED',
      workRequestId: 'mock_work_request_5',
      rating: 3,
      tempAgencyId: 'agency_1',
    },
    {
      id: 'mock_shift_5_2',
      createdAt: '2024-08-20T08:45:00.000Z',
      updatedAt: '2024-08-25T09:30:00.000Z',
      status: 'FULFILLED',
      workRequestId: 'mock_work_request_5',
      rating: 4,
      tempAgencyId: 'agency_2',
    },
    {
      id: 'mock_shift_5_3',
      createdAt: '2024-07-15T13:30:00.000Z',
      updatedAt: '2024-07-20T16:00:00.000Z',
      status: 'FULFILLED',
      workRequestId: 'mock_work_request_5',
      rating: 3,
      tempAgencyId: 'agency_2',
    },
  ]

  await db.shift.deleteMany({
    where: { id: { in: mockShifts.map((s) => s.id) } },
  })
  const results = await db.shift.createMany({
    data: mockShifts,
    skipDuplicates: true,
  })
  console.log(`✅ Created ${results.count} shifts`)
}
