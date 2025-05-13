import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Minus, Plus, Trash2 } from 'lucide-react-native';
import { Colors } from '@/constants/Colors';
import { Spacing } from '@/constants/Spacing';
import { useCartStore } from '@/store/cartStore';
import React from 'react';

type CartItemProps = {
  item: {
    id: string;
    name: string;
    price: number;
    image: string;
    quantity: number;
  };
};

export default function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeFromCart } = useCartStore();

  const handleIncrement = () => {
    updateQuantity(item.id, item.quantity + 1);
  };

  const handleDecrement = () => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1);
    }
  };

  const handleRemove = () => {
    removeFromCart(item.id);
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: item.image }} style={styles.image} resizeMode="cover" />
      
      <View style={styles.contentContainer}>
        <View style={styles.infoContainer}>
          <Text style={styles.name} numberOfLines={2}>{item.name}</Text>
          <Text style={styles.price}>${item.price.toFixed(2)}</Text>
        </View>
        
        <View style={styles.actionsContainer}>
          <View style={styles.quantityContainer}>
            <TouchableOpacity 
              style={[styles.quantityButton, item.quantity <= 1 && styles.disabledButton]} 
              onPress={handleDecrement}
              disabled={item.quantity <= 1}
            >
              <Minus size={16} color={item.quantity <= 1 ? Colors.neutral[400] : Colors.neutral[700]} />
            </TouchableOpacity>
            
            <Text style={styles.quantity}>{item.quantity}</Text>
            
            <TouchableOpacity style={styles.quantityButton} onPress={handleIncrement}>
              <Plus size={16} color={Colors.neutral[700]} />
            </TouchableOpacity>
          </View>
          
          <TouchableOpacity style={styles.removeButton} onPress={handleRemove}>
            <Trash2 size={18} color={Colors.error[500]} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: Spacing.md,
    borderWidth: 1,
    borderColor: Colors.neutral[200],
  },
  image: {
    width: 100,
    height: 100,
  },
  contentContainer: {
    flex: 1,
    paddingVertical: Spacing.sm,
    paddingHorizontal: Spacing.md,
    justifyContent: 'space-between',
  },
  infoContainer: {
    flex: 1,
  },
  name: {
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    color: Colors.neutral[800],
    marginBottom: Spacing.xs,
  },
  price: {
    fontFamily: 'Inter-Bold',
    fontSize: 16,
    color: Colors.primary[500],
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.neutral[100],
    borderRadius: 8,
    overflow: 'hidden',
  },
  quantityButton: {
    padding: Spacing.sm,
  },
  disabledButton: {
    opacity: 0.5,
  },
  quantity: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: Colors.neutral[800],
    paddingHorizontal: Spacing.sm,
    minWidth: 24,
    textAlign: 'center',
  },
  removeButton: {
    padding: Spacing.sm,
  },
});