import * as types from './types'

export interface SiteConfig {
  rootNotionPageId: Home-fd2e6d670ea44967a7ea29c3f0047e5e
  rootNotionSpaceId?: null

  name: gonggamtour
  domain: https://www.gktravel.kr
  author: g102
  description?: string
  language?: korean

  twitter?: string
  github?: string
  linkedin?: string
  newsletter?: string
  youtube?: string
  zhihu?: string
  mastodon?: string;

  defaultPageIcon?: null
  defaultPageCover?: null
  defaultPageCoverPosition?: 0.5

  isPreviewImageSupportEnabled?: true
  isTweetEmbedSupportEnabled?: boolean
  isRedisEnabled?: false
  isSearchEnabled?: boolean

  includeNotionIdInUrls?: boolean
  pageUrlOverrides?: types.PageUrlOverridesMap
  pageUrlAdditions?: types.PageUrlOverridesMap

  navigationStyle?: types.NavigationStyle
  navigationLinks?: Array<NavigationLink>
}

export interface NavigationLink {
  title: string
  pageId?: string
  url?: string
}

export const siteConfig = (config: SiteConfig): SiteConfig => {
  return config
}
