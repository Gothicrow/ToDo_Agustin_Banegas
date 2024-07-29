import { FlatList, Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import Header from '../Components/Header'
import { colors } from '../Global/colors'
import DateTimePicker from '@react-native-community/datetimepicker';
import Button1 from '../Components/Button1';
import * as ImagePicker from 'expo-image-picker';

const Form = ({navigation, route}) => {

    const [title, setTitle] = useState("")
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState(new Date());
    const [showDate, setShowDate] = useState(false);
    const [showTime, setShowTime] = useState(false);
    const [description, setDescription] = useState("")
    const [image, setImage] = useState("")

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShowDate(false)
        setShowTime(false)
        if (date) {
            setDate(currentDate);
        }
        if (time) {
            setTime(currentDate)
        }
    };

    const verifyCameraPermissions = async () => {
        const { granted } = await ImagePicker.requestCameraPermissionsAsync()
        if (!granted) {
            return false
        }
        return true
    }

    const pickImage = async () => {
        const isCameraOk = await verifyCameraPermissions()
        if (isCameraOk) {
            let result = await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [9, 16],
                base64: true,
                quality: 0.2
            })
            if (!result.canceled) {
                setImage(`data:image/jpeg;base64,${result.assets[0].base64}`)
            }
        }
    }

    return (
        <View style={styles.container}>
            <Header text={"Formulario"} navigation={navigation} route={route} />
            <View style={styles.formContainer}>
                <Text style={styles.label}>Titulo:</Text>
                <TextInput
                    style={styles.inputText}
                    value={title}
                    onChange={setTitle}
                    placeholder='Titulo'
                />
                <Text style={styles.label}>Fecha: {date.toString().slice(4, 15)}</Text>
                <Button1 text={"Ingresar fecha"} action={() => setShowDate(true)} />
                {
                    showDate && (
                        <DateTimePicker
                            mode='date'
                            value={date}
                            onChange={onChange}
                        />
                    )
                }
                <Text style={styles.label}>Hora: {time.toString().slice(16, 21)}</Text>
                <Button1 text={"Ingresar hora"} action={() => setShowTime(true)} />
                {
                    showTime && (
                        <DateTimePicker
                            mode='time'
                            value={time}
                            onChange={onChange}
                        />
                    )
                }
                <Text style={styles.label}>Descripción:</Text>
                <TextInput
                    multiline={true}
                    numberOfLines={3}
                    style={styles.inputText}
                    value={description}
                    onChange={setDescription}
                    placeholder='Descripción'
                />
                <Text style={styles.label}>Archivos:</Text>
                <Button1 text={"Subir imagen"} action={() => pickImage()} />
                {
                    image === "" ?
                        <Text>Sin imagen</Text> :
                        <Image source={{ uri: image }} style={styles.image} />
                }
            </View>
        </View>
    )
}

export default Form

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        width: "100%",
        marginBottom: 15,
        backgroundColor: colors.color4
    },
    formContainer: {
        width: "85%",
        marginTop: 20,
        gap: 10
    },
    label: {
        fontSize: 18,
        color: colors.color1
    },
    inputText: {
        padding: 5,
        backgroundColor: "white",
        borderWidth: 1,
        borderRadius: 3,
        borderColor: colors.color1,
        color: "black"
    },
    flatlist: {
        width: "100%",
        marginTop: 10,
    },
    image: {
        flex: 1,
        width: 200,
        height: 400,
        resizeMode: 'contain' 
    }
})