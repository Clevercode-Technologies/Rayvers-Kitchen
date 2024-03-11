import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Modal } from 'native-base';
import { Rating } from "react-native-elements";


const Rate = () => {
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const [rating, setRating] = useState<number>(0);

    const onStarRatingPress = (rating: number) => {
        setRating(rating);
      };

  return (
    <Modal isOpen={modalVisible} onClose={setModalVisible} size={"xs"}>
    <Modal.Content>
      <Modal.Header>Rate Us</Modal.Header>
      <Modal.Body>
        <Rating
          showRating
          onFinishRating={onStarRatingPress}
          style={{ paddingVertical: 10 }}
        />
      </Modal.Body>
    </Modal.Content>
  </Modal>
  )
}

export default Rate;

const styles = StyleSheet.create({})