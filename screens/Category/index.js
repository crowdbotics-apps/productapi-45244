import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, Text, Image, View, StyleSheet } from "react-native";

const Category = ({
  route
}) => {
  const [data, setData] = useState([]);
  const {
    category
  } = route.params;
  useEffect(() => {
    const products = {
      products: [{
        id: 36,
        title: "Sleeve Shirt Womens",
        description: "Cotton Solid Color Professional Wear Sleeve Shirt Womens Work Blouses Wholesale Clothing Casual Plain Custom Top OEM Customized",
        price: 90,
        discountPercentage: 10.89,
        rating: 4.26,
        stock: 39,
        brand: "Professional Wear",
        category: "tops",
        thumbnail: "https://i.dummyjson.com/data/products/36/thumbnail.jpg",
        images: ["https://i.dummyjson.com/data/products/36/1.jpg", "https://i.dummyjson.com/data/products/36/2.webp", "https://i.dummyjson.com/data/products/36/3.webp", "https://i.dummyjson.com/data/products/36/4.jpg", "https://i.dummyjson.com/data/products/36/thumbnail.jpg"]
      }],
      total: 5,
      skip: 0,
      limit: 5
    };
    const filteredProducts = products.products.filter(item => item.category === category);
    setData(filteredProducts);
  }, []);
  return <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {data.map((item, index) => <View key={index} style={styles.itemContainer}>
            <Image source={{
          uri: item.thumbnail
        }} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>)}
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f5f5f5"
  },
  contentContainer: {
    padding: 10
  },
  itemContainer: {
    marginBottom: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10
  },
  description: {
    fontSize: 16,
    marginTop: 5
  }
});
export default Category;