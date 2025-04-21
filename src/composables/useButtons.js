export default function useButtons(findCard, update) {
  const addBtn = (imageUrl) => {
    const card = findCard(imageUrl)
    card.isAdded = !card.isAdded
    update(true, card)
  }

  const favouriteBtn = (imageUrl) => {
    const card = findCard(imageUrl)
    card.isFavourite = !card.isFavourite
    update(true, card)
  }

  return {
    addBtn,
    favouriteBtn
  }
}