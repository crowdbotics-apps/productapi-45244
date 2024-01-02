import React from "react";
import { SafeAreaView, StyleSheet, ScrollView, Text, TouchableOpacity } from "react-native";

const Categories = ({
  navigation
}) => {
  const categories = ["smartphones", "laptops", "fragrances", "skincare", "groceries", "home-decoration", "furniture", "tops", "womens-dresses", "womens-shoes", "mens-shirts", "mens-shoes", "mens-watches", "womens-watches", "womens-bags", "womens-jewellery", "sunglasses", "automotive", "motorcycle", "lighting"];
  return <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {categories.map((category, index) => <TouchableOpacity key={index} style={styles.listItem} onPress={() => navigation.navigate("Welcome")}>
            <Text style={styles.listItemText}>{category}</Text>
          </TouchableOpacity>)}
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f0f0gf"
  },
  scrollView: {
    padding: 10
  },
  listItem: {
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 10,
    borderRadius: 15
  },
  listItemText: {
    fontSize: 18,
    color: "#333"
  }
});
export default Categories;