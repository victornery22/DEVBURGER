import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { api } from "../../services/api"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"


import Logo from "../../assets/logo.svg"
import {Button}  from "../../components/Button"
import {Container, Form, InputContainer, LeftContainer, RightContainer, Title,Link } from "./styles"
export function Register() {
    const navigate = useNavigate();
    const schema = yup.object({
        name: yup.string().required('Nome obrigatório'),
        email: yup.string().email().required('Email obrigatório'),
        password: yup.string().min(6,'Minimo de 6 caracteres').required('Senha obrigatória'),
        confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'As senhas devem ser iguais').required('Confirme sua senha'),
    }
    ).required();

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(schema),
      })
    
      const onSubmit = async(data) => {
        try {const {status} = await api.post("/users", {
            name: data.name,
            email: data.email,
            password: data.password
          },
          {
            validateStatus: () => true,
          }
        )  

        if (status === 200 || status === 201) {
            setTimeout(() => {
                navigate("/login")
            }, 2000);
            toast.success("Conta criada com sucesso!")
        } else if (status === 409) {
            toast.error("Email ja cadastrado!")
        }
        else {
            throw new Error()
        }
        } catch (error) {
            toast.error("Falha no Sistema! Tente novamente")
        }
      
      }
          
    return <Container>
        <LeftContainer>
            <img src={Logo} alt="logo-devburger" />
        </LeftContainer>
        <RightContainer>
            <Title>
                Criar conta
            </Title>
            <Form onSubmit={handleSubmit(onSubmit)}>
            <InputContainer>
                    <label>Nome</label>
                    <input type="text" {...register("name")}/>
                    <p>{errors?.name?.message}</p>
                </InputContainer>

                <InputContainer>
                    <label>Email</label>
                    <input type="email" {...register("email")}/>
                    <p>{errors?.email?.message}</p>
                </InputContainer>

                <InputContainer>
                    <label>Senha</label>
                    <input type="password" {...register("password")}/>
                    <p>{errors.password?.message}</p>
                </InputContainer>
                <InputContainer>
                    <label>Confirmar senha</label>
                    <input type="password" {...register("confirmPassword")}/>
                    <p>{errors?.confirmPassword?.message}</p>
                </InputContainer>
                <Button type="submit"> Criar Conta </Button>
            </Form>
            <p>Já possui conta? <Link to="/login">Clique aqui.</Link></p>
        </RightContainer>
    </Container>
}  


