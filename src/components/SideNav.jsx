'use client'

import {usePathname} from 'next/navigation'
import Link from "next/link"
import clsx from 'clsx';

export default function SideNav(){

    const pathName = usePathname()
    console.log(pathName)

    return(
        <div>
            <Link className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-blue-600': pathName === '/dashboard/financas',
              },
            )} href='/dashboard/financas'>Finanças</Link>
            <Link className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-blue-600': pathName === '/dashboard/calculo',
              },
            )} href='/dashboard/calculo'>Calculo</Link>
            <Link className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-blue-600': pathName === '/dashboard',
              },
            )} href='/dashboard'>Dahboard</Link>
        </div>
    )
}