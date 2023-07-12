export interface HeroListResponse {
  results: Hero[]
}

export interface Hero {
  id: number
  name: string
  description: string
  resourceURI: string
  comics: BasicResponse
  events: BasicResponse
  series: BasicResponse
  stories: BasicResponse
  urls: BasicArrayResponse[]
}

export interface BasicResponse {
  items: BasicArrayResponse[]
}

export interface BasicArrayResponse {
  name: string
  type: string
  resourceURI: string
}

export interface HeroBasicDataI {
  hero: Hero
}

export interface HerosListI {
  heros: Hero[]
}

export interface ListLinkI {
  text: string
  list: BasicArrayResponse[]
}
