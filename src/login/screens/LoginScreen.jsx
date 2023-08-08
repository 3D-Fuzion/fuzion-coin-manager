import { Formik, Form, Field } from 'formik'
import '../css/Login.css'
import * as yup from 'yup'

const LoginScreen = () => { 
  const formSchema = yup.object().shape({
    email: yup.string().email("Precisa ser a porra de um email seu retardado").required(),
    password: yup.string().required()
  })

  return (
    <div> 
      <div>
        <h1>Gerenciador Financeiro</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col"></div>
          <div className="col border">
          <Formik initialValues={{email:"", password:""}} validationSchema={formSchema} onSubmit={(value) => console.log(value)}>
            {({errors, touched}) => (
              <Form>
                <div className="container"> 
                  <Field name="email" type="email"/>
                  {errors.email && touched.email ? <>{errors.email}</> : null}
                  <Field name="password" type="password"/>
                  {errors.password && touched.password ? <>{errors.password}</> : null}
                  <br></br>
                  <button type="submit">SUBMITAR</button>
                </div>
              </Form>
            )}
          </Formik>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </div>
   
  )
}

export default LoginScreen