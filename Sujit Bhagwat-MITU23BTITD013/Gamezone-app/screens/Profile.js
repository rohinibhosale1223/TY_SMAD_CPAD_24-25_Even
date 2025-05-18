import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  Button,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('johndoe@example.com');
  const [avatar, setAvatar] = useState(
    'https://via.placeholder.com/100x100.png?text=Avatar'
  );

  const toggleEdit = () => setIsEditing(!isEditing);

  const handleSave = () => {
    setIsEditing(false);
    // Save to backend or storage
  };

  const changeAvatar = () => {
    // For demo purposes
    setAvatar('https://via.placeholder.com/100x100.png?text=New+Avatar');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>👤 Your Profile</Text>

      <TouchableOpacity onPress={changeAvatar}>
        <Image source={{ uri: avatar }} style={styles.avatar} />
        <Text style={styles.changeAvatar}>📸 Tap to change avatar</Text>
      </TouchableOpacity>

      <View style={styles.infoSection}>
        {isEditing ? (
          <>
            <TextInput
              style={styles.input}
              value={name}
              onChangeText={setName}
              placeholder="Enter Name"
              placeholderTextColor="#999"
            />
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              placeholder="Enter Email"
              placeholderTextColor="#999"
              keyboardType="email-address"
            />
            <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
              <Text style={styles.saveButtonText}>💾 Save</Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <Text style={styles.label}>🧑 Name: <Text style={styles.value}>{name}</Text></Text>
            <Text style={styles.label}>📧 Email: <Text style={styles.value}>{email}</Text></Text>
            <TouchableOpacity style={styles.editButton} onPress={toggleEdit}>
              <Text style={styles.editButtonText}>✏️ Edit Profile</Text>
            </TouchableOpacity>
          </>
        )}
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={() => {}}>
        <Text style={styles.logoutButtonText}>🚪 Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#00bfff',
    marginBottom: 10,
  },
  changeAvatar: {
    color: '#00bfff',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
  },
  infoSection: {
    width: '100%',
  },
  label: {
    fontSize: 18,
    color: '#bbb',
    marginBottom: 8,
  },
  value: {
    color: '#fff',
    fontWeight: '600',
  },
  input: {
    backgroundColor: '#2c2c2c',
    color: '#fff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
    fontSize: 16,
  },
  editButton: {
    backgroundColor: '#444',
    padding: 12,
    borderRadius: 8,
    marginTop: 12,
    alignItems: 'center',
  },
  editButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  saveButton: {
    backgroundColor: '#00bfff',
    padding: 12,
    borderRadius: 8,
    marginTop: 12,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  logoutButton: {
    marginTop: 40,
    backgroundColor: '#ff3b3b',
    padding: 12,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  logoutButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
