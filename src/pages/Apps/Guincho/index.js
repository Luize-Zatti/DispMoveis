import React, { useRef, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Dimensions } from 'react-native';

const Guincho = () => {
  const scrollViewRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);

  const handleNextPage = () => {
    if (currentPage < 3) {
      scrollViewRef.current.scrollTo({ x: (currentPage + 1) * Dimensions.get('window').width });
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      scrollViewRef.current.scrollTo({ x: (currentPage - 1) * Dimensions.get('window').width });
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={(event) => {
          const page = Math.round(event.nativeEvent.contentOffset.x / Dimensions.get('window').width);
          setCurrentPage(page);
        }}
        scrollEventThrottle={200}
      >
        <View style={styles.screen}>
          <Text>Primeira tela</Text>
        </View>
        <View style={styles.screen}>
          <Text>Segunda tela</Text>
        </View>
        <View style={styles.screen}>
          <Text>Terceira tela</Text>
        </View>
        <View style={styles.screen}>
          <Text>Quarta tela</Text>
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.nextButton} onPress={handleNextPage}>
        <Text>Próxima</Text>
      </TouchableOpacity>
      {currentPage > 0 && (
        <TouchableOpacity style={styles.previousButton} onPress={handlePreviousPage}>
          <Text>Voltar</Text>
        </TouchableOpacity>
      )}
      <View style={styles.paginationContainer}>
        {[0, 1, 2, 3].map((index) => (
          <View
            key={index}
            style={[
              styles.paginationDot,
              { backgroundColor: index === currentPage ? 'blue' : 'white' },
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  screen: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nextButton: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    padding: 10,
    backgroundColor: 'lightblue',
  },
  previousButton: {
    position: 'absolute',
    left: 20,
    bottom: 20,
    padding: 10,
    backgroundColor: 'lightblue',
  },
  paginationContainer: {
    position: 'absolute',
    flexDirection: 'row',
    bottom: 40,
    alignSelf: 'center',
  },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
});

export default Guincho;