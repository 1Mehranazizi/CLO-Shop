const quantityItem = (state, id) => {
  const indexItem = state.selectedItem.findIndex((item) => item.id === id);
  if (indexItem === -1) {
    return false;
  } else {
    return state.selectedItem[indexItem].quantity;
  }
};

const isInCart = (state, id) => {
  const result = !!state.selectedItem.find((item) => item.id === id);
  return result;
};

const discountHandler = (discount, price) => {
  const decimal = discount / 100;
  const discountNum = decimal * price;
  const newPrice = price - discountNum;
  return newPrice.toLocaleString();
};

const rateHandler = (rateCount) => {
  for(let i=0 ; i < rateCount ; i++) {
      const rateX = rateCount / 5 *100;
      const rateY = `${rateX /10 *10}%`;
      return rateY; 
  }
}

export { quantityItem, isInCart , discountHandler , rateHandler };
