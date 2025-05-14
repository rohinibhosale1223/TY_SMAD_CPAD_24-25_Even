import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import { ReadingStatus } from '@/types';
import { BookOpen, BookPlus, BookCheck, X } from 'lucide-react-native';

interface ReadingStatusButtonProps {
  initialStatus: ReadingStatus;
  onChangeStatus: (status: ReadingStatus) => void;
}

export default function ReadingStatusButton({ 
  initialStatus, 
  onChangeStatus 
}: ReadingStatusButtonProps) {
  const [status, setStatus] = useState<ReadingStatus>(initialStatus);
  const [modalVisible, setModalVisible] = useState(false);

  const handleStatusChange = (newStatus: ReadingStatus) => {
    setStatus(newStatus);
    onChangeStatus(newStatus);
    setModalVisible(false);
  };

  const getButtonText = () => {
    switch (status) {
      case 'want-to-read':
        return 'Want to Read';
      case 'currently-reading':
        return 'Currently Reading';
      case 'read':
        return 'Read';
      default:
        return 'Want to Read';
    }
  };

  const getButtonIcon = () => {
    switch (status) {
      case 'want-to-read':
        return <BookPlus size={18} color="#FFF" />;
      case 'currently-reading':
        return <BookOpen size={18} color="#FFF" />;
      case 'read':
        return <BookCheck size={18} color="#FFF" />;
      default:
        return <BookPlus size={18} color="#FFF" />;
    }
  };

  const getButtonStyle = () => {
    switch (status) {
      case 'want-to-read':
        return styles.wantToReadButton;
      case 'currently-reading':
        return styles.currentlyReadingButton;
      case 'read':
        return styles.readButton;
      default:
        return styles.wantToReadButton;
    }
  };

  return (
    <>
      <TouchableOpacity
        style={[styles.button, getButtonStyle()]}
        onPress={() => setModalVisible(true)}
      >
        {getButtonIcon()}
        <Text style={styles.buttonText}>{getButtonText()}</Text>
      </TouchableOpacity>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Update Reading Status</Text>
              <TouchableOpacity 
                onPress={() => setModalVisible(false)}
                style={styles.closeButton}
              >
                <X size={24} color="#14213D" />
              </TouchableOpacity>
            </View>
            
            <TouchableOpacity
              style={[styles.statusOption, status === 'want-to-read' && styles.selectedOption]}
              onPress={() => handleStatusChange('want-to-read')}
            >
              <BookPlus size={20} color={status === 'want-to-read' ? '#800020' : '#6B7280'} />
              <Text 
                style={[
                  styles.statusText, 
                  status === 'want-to-read' && styles.selectedText
                ]}
              >
                Want to Read
              </Text>
            </TouchableOpacity>
            
            <TouchableOpacity
              style={[styles.statusOption, status === 'currently-reading' && styles.selectedOption]}
              onPress={() => handleStatusChange('currently-reading')}
            >
              <BookOpen size={20} color={status === 'currently-reading' ? '#800020' : '#6B7280'} />
              <Text 
                style={[
                  styles.statusText, 
                  status === 'currently-reading' && styles.selectedText
                ]}
              >
                Currently Reading
              </Text>
            </TouchableOpacity>
            
            <TouchableOpacity
              style={[styles.statusOption, status === 'read' && styles.selectedOption]}
              onPress={() => handleStatusChange('read')}
            >
              <BookCheck size={20} color={status === 'read' ? '#800020' : '#6B7280'} />
              <Text 
                style={[
                  styles.statusText, 
                  status === 'read' && styles.selectedText
                ]}
              >
                Read
              </Text>
            </TouchableOpacity>
            
            {status !== 'none' && (
              <TouchableOpacity
                style={styles.removeButton}
                onPress={() => handleStatusChange('none')}
              >
                <Text style={styles.removeText}>Remove from My Books</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginVertical: 8,
  },
  wantToReadButton: {
    backgroundColor: '#228B22', // Forest green
  },
  currentlyReadingButton: {
    backgroundColor: '#14213D', // Navy
  },
  readButton: {
    backgroundColor: '#800020', // Burgundy
  },
  buttonText: {
    fontFamily: 'Lato-Bold',
    fontSize: 16,
    color: '#FFFFFF',
    marginLeft: 8,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  modalTitle: {
    fontFamily: 'Merriweather-Bold',
    fontSize: 18,
    color: '#14213D',
  },
  closeButton: {
    padding: 4,
  },
  statusOption: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 8,
    marginVertical: 8,
  },
  selectedOption: {
    backgroundColor: 'rgba(128, 0, 32, 0.1)', // Light burgundy
  },
  statusText: {
    fontFamily: 'Lato-Regular',
    fontSize: 16,
    color: '#6B7280',
    marginLeft: 12,
  },
  selectedText: {
    fontFamily: 'Lato-Bold',
    color: '#800020',
  },
  removeButton: {
    alignItems: 'center',
    padding: 16,
    marginTop: 8,
  },
  removeText: {
    fontFamily: 'Lato-Regular',
    fontSize: 14,
    color: '#EF4444', // Red
  },
});