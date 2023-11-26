'use client'

import {
  ColumnDef,
} from '@tanstack/react-table'
import { IUser, ISales } from '../../types/main'

const columnsSales: ColumnDef<ISales>[] = [
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
    accessorFn: row => row.consumen_name,
    id: 'consumen_name',
    cell: info => info.getValue(),
    header: () => <span>consumen_name</span>,
    footer: props => props.column.id,
  },
  {
    accessorFn: row => row.item_id,
    id: 'item_id',
    cell: info => info.getValue(),
    header: () => <span>item_id</span>,
    footer: props => props.column.id,
  },
  {
    accessorFn: row => row.qty,
    id: 'qty',
    cell: info => info.getValue(),
    header: () => <span>qty</span>,
    footer: props => props.column.id,
  },
  {
    accessorFn: row => row.sales_id,
    id: 'sales_id',
    cell: info => info.getValue(),
    header: () => <span>sales_id</span>,
    footer: props => props.column.id,
  },
  {
    accessorFn: row => row.transaction_date,
    id: 'transaction_date',
    cell: info => info.getValue(),
    header: () => <span>transaction_date</span>,
    footer: props => props.column.id,
  },
]

const columnsUsers: ColumnDef<IUser>[] = [
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

export {columnsUsers, columnsSales}