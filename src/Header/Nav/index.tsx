'use client'

import React from 'react'

import type { Header as HeaderType } from '@/payload-types'

import { CMSLink } from '@/components/Link'

export const HeaderNav: React.FC<{ header: HeaderType }> = ({ header }) => {
  const navItems = header?.navItems || []

  return (
    <nav className="items-center hidden md:flex space-x-4 lg:space-x-8">
      {navItems.map(({ link }, i) => {
        return (
          <CMSLink
            key={i}
            {...link}
            // appearance="link"s
            className="text-muted-foreground hover:text-primary font-medium"
          />
        )
      })}
    </nav>
  )
}
