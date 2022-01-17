import logo from "./Upload.png";
import {
  Container,
  Form,
  FormButton,
  FormContent,
  FormH1,
  FormInput,
  FormLabel,
  FormWrap,
  Logo,
  Text,
} from "./SignInElements";
import ScrollToTop from "../ScrollToTop";

const SignIn = () => {
  return (
    <>
      <ScrollToTop />
      <Container>
        <FormWrap>
          <a href="http://localhost:3000/">
            <Logo src={logo} />
          </a>
          <FormContent>
            <Form action="#">
              <FormH1>Seja um parceiro</FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput type="email" required></FormInput>
              <FormLabel htmlFor="for">Senha</FormLabel>
              <FormInput type="password" required></FormInput>
              <FormButton type="submit">Prosseguir</FormButton>
              <Text>Esqueceu a senha</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignIn;
