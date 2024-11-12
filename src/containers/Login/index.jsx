import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../hooks/UserContext";

import Logo from "../../assets/logo.svg";
import { Button } from "../../components/Button";
import { Container, Form, InputContainer, LeftContainer, RightContainer, Title, Link } from "./styles";

export function Login() {
  const navigate = useNavigate();
  const { putUserData } = useUser();
  
  const schema = yup.object({
    email: yup.string().email().required("E-mail é obrigatório"),
    password: yup.string().min(6, "A senha deve ter pelo menos 6 caracteres").required("Senha é obrigatória"),
  }).required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
   
      const { data: userData } = await toast.promise(
        api.post("/session", {
          email: data.email,
          password: data.password,
        }),
        {
          pending: "Verificando credenciais...",
          success: {
            render() {
              setTimeout(() => {
                navigate("/");
              }, 2000);
              return "Seja bem-vindo(a)!";
            },
          },
          error: "E-mail ou senha inválidos!",
        }
      );
      putUserData(userData)
    // localStorage.setItem("token", token); // Salva o token no localStorage
  };

  return (
    <Container>
      <LeftContainer>
        <img src={Logo} alt="logo-devburger" />
      </LeftContainer>
      <RightContainer>
        <Title>
          Olá, seja bem-vindo ao <span> DevBurger!</span>
          <br />
          Acesse com seu <span>Login e senha.</span>
        </Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <label>Email</label>
            <input type="email" {...register("email")} />
            <p>{errors?.email?.message}</p>
          </InputContainer>

          <InputContainer>
            <label>Senha</label>
            <input type="password" {...register("password")} />
            <p>{errors?.password?.message}</p>
          </InputContainer>
          <Button type="submit">Entrar</Button>
        </Form>
        <p>
          Não possui conta? <Link to="/cadastro">Clique aqui.</Link>
        </p>
      </RightContainer>
    </Container>
  );
}
