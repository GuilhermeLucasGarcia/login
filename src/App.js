
import './App.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from "yup";



function App() {
  
  const handleSubmitCadastro = (values) => console.log(values);
  const handleSubmit = (values) => console.log(values);

  const validationLogin = yup.object().shape({
    email: yup.string().email("Insira um email válido").required('Este campo é obrigatório'),
    password: yup.string().min(8, "A senha deve ter 8 caracteres").required('Este campo é obrigatório'),
  });

  const validationCadastro = yup.object().shape({
    email: yup.string().email("Insira um email válido").required('Este campo é obrigatório'),
    password: yup.string().min(8, "A senha deve ter 8 caracteres").required('Este campo é obrigatório'),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null], 'As senhas não coincidem')
  })

  return (
    <div className="App">
      <div className="tabelCredenciais" >
        <div className="tableLabels">
        <h1>Login</h1>
        <Formik initialValues={{}} onSubmit={handleSubmit} validationSchema={validationLogin}>
          <Form className='login-form'>
          <div className="email" >
            <Field name='email' className='form-field' placeholder='Email'/>
            <ErrorMessage component='span' name='email'className='form-error'/>
          </div>
          <div className="senha" >
            <Field name='password' className='form-field' placeholder='senha' type='password'/>
            <ErrorMessage component='span' name='password'className='form-error'/>          
          </div>
          <div className="entrar">
            <button type='submit' onSubmit={handleSubmit}>Entrar</button>
          </div>
          </Form>
        </Formik>
        <h1>Registro</h1>
        <Formik initialValues={{}} onSubmit={handleSubmitCadastro} validationSchema={validationCadastro}>
          <Form className='login-form'>
          <div className="email" >
            <Field name='email' className='form-field' placeholder='Email'/>
            <ErrorMessage component='span' name='email'className='form-error'/>
          </div>
          <div className="senha" >
            <Field name='password' className='form-field' placeholder='senha' type='text'/>
            <ErrorMessage component='span' name='password'className='form-error'/>          
          </div> 
          <div className="senha" >
            <Field name='confirmPassword' className='form-field' placeholder='Confirme a senha' type='text'/>
            <ErrorMessage component='span' name='confirmPassword'className='form-error'/>          
          </div>
          <div className="entrar">
            <button type='submit' onSubmit={handleSubmitCadastro}>Cadastrar</button>
          </div>
          </Form>
        </Formik>
        </div>
      </div>
    </div>
  );
}

export default App;
