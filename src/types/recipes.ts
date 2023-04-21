export interface Recipe {
  id: number
  name: string
  img: string
  description: string
  ingredients: string[]
  instructions: string[]
}

export interface NewRecipeDTO {
  name: string
  img: string
  description: string
  ingredients: string[]
  instructions: string[]
}

export interface UpdateRecipeDTO {
  id: number
  name: string
  img: string
  description: string
  ingredients: string[]
  instructions: string[]
}
