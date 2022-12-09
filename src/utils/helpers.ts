import { ICharacter } from '@/types/types'

const setUniqueNames = (data: ICharacter[]): string[] => {
  const selectedSpecies: string[] = Array.from(
    new Set(
      data?.map((item: ICharacter) => {
        return item.species
      }),
    ),
  )
  return selectedSpecies
}

const filterNames = (search: string, data: ICharacter[]) => {
  const filteredNames = data.filter((item) => {
    return item.name.toLowerCase().includes(search)
  })
  return filteredNames
}

const filterBySpecies = (data: ICharacter[], selectedSpecies: string[]): ICharacter[] => {
  const res = data.filter((item: ICharacter) => {
    return selectedSpecies.includes(item.species)
  })
  return res
}

const dropDownData = (data: ICharacter[]): string[] => {
  return setUniqueNames(data)
}

export { dropDownData, filterNames, filterBySpecies }
