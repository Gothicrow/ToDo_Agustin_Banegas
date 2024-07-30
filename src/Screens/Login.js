import { Pressable, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colors } from '../Global/colors'
import Button1 from '../Components/Button1'
import { useLoginMutation } from '../services/authService'
import { useDispatch } from 'react-redux'
import { setUser } from '../../Redux/features/usersSlice'

const Login = ({ navigation }) => {

    const [triggerLogin, result] = useLoginMutation()
    const dispatch = useDispatch()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    useEffect(() => {
        if (result.isSuccess) {
            dispatch(
                setUser({
                    email: result.data.email,
                    token: result.data.idToken
                })
            )
        }
    }, [result])

    const onSubmit = () => {
        triggerLogin({
            email,
            password
        })
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Iniciar sesion:</Text>
            <View style={styles.view}>
                <TextInput
                    style={styles.inputText}
                    value={email}
                    onChange={e=>setEmail(e.target.value)}
                    placeholder="Correo electrónico"
                />
                <TextInput
                    style={styles.inputText}
                    value={password}
                    onChange={e=>setPassword(e.target.value)}
                    placeholder="Contraseña"
                    secureTextEntry={true}
                />
            </View>
            <View style={styles.view}>
                <Button1 text={"Ingresar"} action={() => onSubmit()} />
                <TouchableHighlight onPress={() => navigation.navigate("Register")} underlayColor={colors.color2}>
                    <Text style={styles.register}>Registrarse</Text>
                </TouchableHighlight>
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "space-between",
        height: "100%",
        width: "100%",
        paddingVertical: "60%",
        backgroundColor: colors.color4
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        color: colors.color1
    },
    view: {
        alignItems: "center",
        width: "100%",
        gap: 10
    },
    inputText: {
        padding: 5,
        backgroundColor: "white",
        borderWidth: 1,
        borderRadius: 3,
        borderColor: colors.color1,
        width: "75%",
        color: "black"
    },
    register: {
        fontSize: 18,
        color: colors.color1
    }
})