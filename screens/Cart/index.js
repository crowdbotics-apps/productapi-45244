import React, { useState } from "react";
import { View, Text, Button, FlatList, SafeAreaView, StyleSheet } from "react-native";
let cartList = [{
  id: 1,
  name: "Item 1",
  price: 10,
  quantity: 1
}, {
  id: 2,
  name: "Item 2",
  price: 20,
  quantity: 1
}, {
  id: 3,
  name: "Item 3",
  price: 30,
  quantity: 1
}];

const CartScreen = () => {
  const [cartItems, setCartItems] = useState(cartList);

  const increaseQuantity = id => {
    let newCartItems = [...cartItems];
    let item = newCartItems.find(item => item.id === id);
    item.quantity += 1;
    setCartItems(newCartItems);
  };

  const decreaseQuantity = id => {
    let newCartItems = [...cartItems];
    let item = newCartItems.find(item => item.id === id);

    if (item.quantity > 1) {
      item.quantity -= 1;
      setCartItems(newCartItems);
    }
  };

  return <SafeAreaView style={styles.container}>
      <FlatList data={cartItems} keyExtractor={item => item.id.toString()} renderItem={({
      item
    }) => <View style={styles.itemContainer}>
            <Text>{item.name}</Text>
            <Text>{item.price}</Text>
            <Text>{item.quantity}</Text>
            <Button title="+" onPress={() => increaseQuantity(item.id)} />
            <Button title="-" onPress={() => decreaseQuantity(item.id)} />
          </View>} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10
  }
});
export default CartScreen;