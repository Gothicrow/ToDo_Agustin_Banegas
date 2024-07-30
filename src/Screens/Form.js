import { FlatList, Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import { colors } from '../Global/colors'
import DateTimePicker from '@react-native-community/datetimepicker';
import Button1 from '../Components/Button1';
import * as ImagePicker from 'expo-image-picker';
import { useGetTaskByIdQuery, usePostTaskMutation, useUpdateTaskMutation } from '../services/taskService';
import { useDispatch, useSelector } from 'react-redux';
import { updateTask, updateTasksArray } from '../../Redux/features/cardSlice';

const Form = ({ navigation, route }) => {
    
    const { refetch, data } = useGetTaskByIdQuery(route.params.idProduct)

    const nowDate = new Date().toISOString().split("T")[0].split("-")
    const nowTime = new Date().toISOString().split("T")[1].slice(0, 5)

    const [triggerPost, resultPost] = usePostTaskMutation()
    const [triggerPut, resultPut] = useUpdateTaskMutation()
    const dispatch = useDispatch()

    const [id, setId] = useState(0)
    const [name, setName] = useState("")
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [date, setDate] = useState(`${nowDate[2]}/${nowDate[1]}/${nowDate[0]}`);
    const [time, setTime] = useState(nowTime);
    const [image, setImage] = useState("")
    const [showDate, setShowDate] = useState(false);
    const [showTime, setShowTime] = useState(false);

    useEffect(() => {
        if (data) {
            setId(data.id)
            setName(data.name)
            setTitle(data.title)
            setDescription(data.description)
            setDate(data.date)
            setTime(data.time)
            setImage(data.image)
        }
    }, [data])

    useEffect(()=>{
        if(route.params.idProduct){
            refetch()
        }
    },[route.params.idProduct])

    useEffect(() => {
        if (resultPost.isSuccess) {
            dispatch(updateTask({ task: null }))
            navigation.navigate("Details", { idProduct: id })
        }
    }, [resultPost])

    useEffect(() => {
        if (resultPut.isSuccess) {
            dispatch(updateTask({ task: resultPut.data }))
            navigation.navigate("Details", { idProduct: id })
        }
    }, [resultPut])

    const onChangeDate = (event, selectedDate) => {
        const currentDate = selectedDate.toISOString().split("T");
        setShowDate(false)
        if (date) {
            const newDate = currentDate[0].split("-")
            setDate(`${newDate[2]}/${newDate[1]}/${newDate[0]}`);
        }
    };

    const onChangeTime = (event, selectedDate) => {
        const currentDate = selectedDate.toISOString().split("T")[1].slice(0, 5).split(":");
        if (parseInt(currentDate[0]) > 2) {
            currentDate[0] = parseInt(currentDate[0]) - 3
        } else {
            currentDate[0] = parseInt(currentDate[0]) + 21
        }
        if (currentDate[0] < 10) {
            currentDate[0] = "0" + currentDate[0].toString()
        }
        setShowTime(false)
        if (time) {
            setTime(currentDate.join(":"))
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

    const onSubmit = () => {
        if (title != "") {
            if (data) {
                triggerPut({
                    id,
                    name,
                    title,
                    description,
                    date,
                    time,
                    image
                })
            } else {
                const newId = parseInt((Math.random() * 1000000).toString().split('.')[0])
                setId(newId)
                triggerPost({
                    id: newId,
                    title,
                    description,
                    date,
                    time,
                    image
                })
            }
        }
    }

    return (
        <ScrollView style={styles.container}>
            <Header text={"Formulario"} navigation={navigation} route={route} onSubmitForm={onSubmit} />
            <View style={styles.formContainer}>
                <Text style={styles.label}>Titulo:</Text>
                <TextInput
                    style={styles.inputText}
                    value={title}
                    onChangeText={setTitle}
                    placeholder='Titulo'
                />
                <Text style={styles.label}>Fecha: {date}</Text>
                <Button1 text={"Ingresar fecha"} action={() => setShowDate(true)} />
                {
                    showDate && (
                        <DateTimePicker
                            mode='date'
                            value={new Date()}
                            onChange={onChangeDate}
                        />
                    )
                }
                <Text style={styles.label}>Hora: {time}hs</Text>
                <Button1 text={"Ingresar hora"} action={() => setShowTime(true)} />
                {
                    showTime && (
                        <DateTimePicker
                            mode='time'
                            value={new Date()}
                            onChange={onChangeTime}
                        />
                    )
                }
                <Text style={styles.label}>Descripción:</Text>
                <TextInput
                    multiline={true}
                    numberOfLines={3}
                    style={styles.inputText}
                    value={description}
                    onChangeText={setDescription}
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
        </ScrollView>
    )
}

export default Form

const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
        backgroundColor: colors.color4
    },
    formContainer: {
        width: "100%",
        paddingHorizontal: "10%",
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