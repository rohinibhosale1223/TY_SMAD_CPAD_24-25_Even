import { View, Text, StyleSheet, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronLeft, Trash2 } from 'lucide-react-native';
import { Colors } from '@/constants/Colors';
import { Spacing } from '@/constants/Spacing';
import CartItem from '@/components/cart/CartItem';
import { useCartStore } from '@/store/cartStore';
import React from 'react';
export default function CartScreen() {
  // In a real app, this would come from a state management system
  const { cartItems, cartTotal } = useCartStore();
  
  const renderEmptyCart = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>Your cart is empty</Text>
      <TouchableOpacity style={styles.shopButton}>
        <Text style={styles.shopButtonText}>Continue Shopping</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Shopping Cart</Text>
        <Text style={styles.headerSubtitle}>
          {cartItems.length > 0 
            ? `${cartItems.length} item${cartItems.length > 1 ? 's' : ''} in your cart` 
            : 'No items in your cart'}
        </Text>
      </View>

      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={[
          styles.scrollViewContent,
          cartItems.length === 0 && styles.emptyScrollViewContent
        ]}
        showsVerticalScrollIndicator={false}
      >
        {cartItems.length === 0 ? (
          renderEmptyCart()
        ) : (
          <>
            <FlatList
              data={cartItems}
              renderItem={({ item }) => <CartItem item={item} />}
              keyExtractor={(item) => item.id.toString()}
              scrollEnabled={false}
            />
            
            <View style={styles.summaryContainer}>
              <Text style={styles.summaryTitle}>Order Summary</Text>
              
              <View style={styles.summaryRow}>
                <Text style={styles.summaryText}>Subtotal</Text>
                <Text style={styles.summaryValue}>${cartTotal.toFixed(2)}</Text>
              </View>
              
              <View style={styles.summaryRow}>
                <Text style={styles.summaryText}>Shipping</Text>
                <Text style={styles.summaryValue}>$0.00</Text>
              </View>
              
              <View style={styles.summaryRow}>
                <Text style={styles.summaryText}>Tax</Text>
                <Text style={styles.summaryValue}>${(cartTotal * 0.10).toFixed(2)}</Text>
              </View>
              
              <View style={[styles.summaryRow, styles.totalRow]}>
                <Text style={styles.totalText}>Total</Text>
                <Text style={styles.totalValue}>${(cartTotal * 1.10).toFixed(2)}</Text>
              </View>
            </View>
            
            <TouchableOpacity style={styles.checkoutButton}>
              <Text style={styles.checkoutButtonText}>Proceed to Checkout</Text>
            </TouchableOpacity>
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  header: {
    paddingHorizontal: Spacing.lg,
    paddingTop: Spacing.lg,
    paddingBottom: Spacing.md,
  },
  headerTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 24,
    color: Colors.neutral[800],
    marginBottom: Spacing.xs,
  },
  headerSubtitle: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: Colors.neutral[600],
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    paddingHorizontal: Spacing.lg,
    paddingBottom: Spacing.xxl,
  },
  emptyScrollViewContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: Spacing.xl,
  },
  emptyText: {
    fontFamily: 'Inter-Medium',
    fontSize: 18,
    color: Colors.neutral[600],
    marginBottom: Spacing.lg,
  },
  shopButton: {
    backgroundColor: Colors.primary[500],
    paddingVertical: Spacing.md,
    paddingHorizontal: Spacing.xl,
    borderRadius: 8,
  },
  shopButtonText: {
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    color: Colors.white,
  },
  summaryContainer: {
    marginTop: Spacing.xl,
    padding: Spacing.lg,
    backgroundColor: Colors.neutral[50],
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.neutral[200],
  },
  summaryTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 18,
    color: Colors.neutral[800],
    marginBottom: Spacing.md,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: Spacing.sm,
  },
  totalRow: {
    marginTop: Spacing.md,
    paddingTop: Spacing.md,
    borderTopWidth: 1,
    borderTopColor: Colors.neutral[200],
  },
  summaryText: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: Colors.neutral[600],
  },
  summaryValue: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: Colors.neutral[800],
  },
  totalText: {
    fontFamily: 'Inter-Bold',
    fontSize: 16,
    color: Colors.neutral[800],
  },
  totalValue: {
    fontFamily: 'Inter-Bold',
    fontSize: 16,
    color: Colors.primary[500],
  },
  checkoutButton: {
    marginTop: Spacing.lg,
    backgroundColor: Colors.primary[500],
    paddingVertical: Spacing.md,
    alignItems: 'center',
    borderRadius: 8,
  },
  checkoutButtonText: {
    fontFamily: 'Inter-Bold',
    fontSize: 16,
    color: Colors.white,
  },
});