'use client'
import { useFetchUsers } from "../hooks/useFetchUsers";
import React from 'react'
import {
  getCoreRowModel,
  ColumnDef,
  flexRender,
  useReactTable,
} from '@tanstack/react-table'
import { Box } from '@chakra-ui/react'
import { IUser } from "../types/main";

const columns: ColumnDef<IUser>[] = [
  {
    accessorKey: 'id',
    cell: info => info.getValue(),
    footer: props => props.column.id,
  },
  {
    accessorFn: row => row.name,
    id: 'name',
    cell: info => info.getValue(),
    header: () => <span>Name</span>,
    footer: props => props.column.id,
  },
  {
    accessorFn: row => row.email,
    id: 'email',
    cell: info => info.getValue(),
    header: () => <span>Email</span>,
    footer: props => props.column.id,
  },
  {
    accessorFn: row => row.country_name,
    id: 'country_name',
    cell: info => info.getValue(),
    header: () => <span>country_name</span>,
    footer: props => props.column.id,
  },
  {
    accessorFn: row => row.device_id,
    id: 'device_id',
    cell: info => info.getValue(),
    header: () => <span>device_id</span>,
    footer: props => props.column.id,
  },
  {
    accessorFn: row => row.bitcoin_address,
    id: 'bitcoin_address',
    cell: info => info.getValue(),
    header: () => <span>bitcoin_address</span>,
    footer: props => props.column.id,
  },
  {
    accessorFn: row => row.avatar,
    id: 'avatar',
    cell: info => info.getValue(),
    header: () => <span>avatar</span>,
    footer: props => props.column.id,
  },
  {
    accessorFn: row => row.login_ip,
    id: 'login_ip',
    cell: info => info.getValue(),
    header: () => <span>login_ip</span>,
    footer: props => props.column.id,
  },
  {
    accessorFn: row => row.active_device_mac,
    id: 'active_device_mac',
    cell: info => info.getValue(),
    header: () => <span>active_device_mac</span>,
    footer: props => props.column.id,
  },
  {
    accessorFn: row => row.notes,
    id: 'notes',
    cell: info => info.getValue(),
    header: () => <span>notes</span>,
    footer: props => props.column.id,
  },
]

const UserPage = () => {
  const {data, isLoading} = useFetchUsers()

  const table = useReactTable({
    data,
    columns,
    enableColumnResizing: true,
    columnResizeMode: 'onChange',
    getCoreRowModel: getCoreRowModel(),
    debugTable: true,
    debugHeaders: true,
    debugColumns: true,
  })

  return (
    <Box padding='1rem'>
      {isLoading && <div>Loading</div>}
      {!isLoading && (
        <Box display='block' maxW='80vw' maxH='85vh' overflowX='scroll' overflowY='scroll'>
          <table className="w-full ">
            <thead>
              {table.getHeaderGroups().map(headerGroup => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map(header => {
                    return (
                      <th
                        key={header.id}
                        colSpan={header.colSpan}
                        style={{ position: 'relative', width: header.getSize() }}
                      >
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                        {header.column.getCanResize() && (
                          <div
                            onMouseDown={header.getResizeHandler()}
                            onTouchStart={header.getResizeHandler()}
                            className={`resizer ${
                              header.column.getIsResizing() ? 'isResizing' : ''
                            }`}
                          ></div>
                        )}
                      </th>
                    )
                  })}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map(row => {
                return (
                  <tr key={row.id}>
                    {row.getVisibleCells().map(cell => {
                      return (
                        <td key={cell.id} style={{ width: cell.column.getSize() }}>
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </td>
                      )
                    })}
                  </tr>
                )
              })}
            </tbody>
          </table>
        </Box>
      )}
    </Box>
  )
};

export default UserPage;
