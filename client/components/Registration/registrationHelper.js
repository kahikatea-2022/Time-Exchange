import { getCategories } from '../../apis/categories'

export async function fetchCategories(setCategories) {
  try {
    // dispatch waiting
    const categories = await getCategories()
    setCategories(categories)
  } catch (err) {
    console.log('fetchCategories ERROR')
    console.log(err)
  }
}
