export const useCartActions = (cart, setCart, loggedIn) => {
  const modifyCart = (itemToModify, changeCount) => {
    setCart((previousCart) => {
      // 尋找物品是否已經在購物車中
      const foundIndex = previousCart.findIndex(
        (item) => item.id === itemToModify.id
      );

      // 物品不在購物車中
      if (foundIndex === -1) {
        const countToAdd = changeCount(0);
        // 檢查是否需要添加新物品
        if (countToAdd > 0) {
          return [...previousCart, { ...itemToModify, count: countToAdd }];
        }
      }

      // 物品在購物車中，則更新數量或移除
      if (foundIndex !== -1) {
        const updatedCart = [...previousCart];
        const newCount = changeCount(updatedCart[foundIndex]?.count || 0);

        if (newCount > 0) {
          updatedCart[foundIndex] = {
            ...updatedCart[foundIndex],
            count: newCount,
          };
        } else {
          updatedCart.splice(foundIndex, 1);
        }

        return updatedCart;
      }

      // 不需要添加且不需要更新，直接返回原購物車
      return previousCart;
    });
  };

  const handleOnAdd = (data) => {
    if (loggedIn) {
      modifyCart(data, (count) => count + 1);
      console.log(data, cart);
    }
  };

  const handleOnRemove = (data) => {
    if (loggedIn) {
      modifyCart(data, (count) => count - 1);
      console.log(data, cart);
    }
  };

  return { handleOnAdd, handleOnRemove };
};
