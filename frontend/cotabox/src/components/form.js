import React, {useState, useEffect}from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

function Formulario(){
    const [participation, setParticipation] = useState([]);
  const [render, setRender] = useState(false);
  const [data, setData] = useState({
    formSave: false,
    type: "",
    message: "",
  });
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    participation: "",
  });

  useEffect(() => {
    async function fetchMyAPI() {
      const response = await fetch("http://localhost:5000/dados");
      setParticipation(await response.json());
    }
    fetchMyAPI();
  }, [render]);

  const onChangeInput = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const sendForm = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/dados", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" },
      }).then((dados) => {
          setRender(!render);
          setFormData({
            name: "",
            lastName: "",
            participation:"",
          });
        });

      const responseEnv = await res.json();

      if (responseEnv.error) {
        setData({
          formSave: false,
          type: "error",
          message: responseEnv.message,
        });
      } else {
        setData({
          formSave: false,
          type: "success",
          message: responseEnv.message,
        });
      }
    }catch(err){
        setData({
        formSave: false,
        type: "error",
        message: "Erro: dados não cadastrados, tente mais tarde!",
      });
    }

    
  };
    
    return (
        <Navbar className="bg-info justify-content-center p-2">
        <Form inline name="form">
            <InputGroup className="p-2 m-3">
            <FormControl 
                value={formData.name}
                onChange={onChangeInput}
                type="text"
                id="name"
                name="name"
                className="m-3 px-3 py-3"
                placeholder="First name"
                aria-label="First name"
            />
            </InputGroup>
        </Form>
        <Form inline>
            <InputGroup>
            <FormControl 
                value={formData.lastName}
                onChange={onChangeInput}
                type="text"
                id="lastName"
                name="lastName"
                className="m-3 px-3 py-3"
                placeholder="Last name"
                aria-label="Last name"
            />
            </InputGroup>
        </Form>
        <Form inline>
            <InputGroup>
            <FormControl 
                value={formData.participation}
                onChange={onChangeInput}
                type="number"
                id="participation"
                name="participation"
                className="m-3 px-3 py-3"
                placeholder="Participation"
                aria-label="Participation"
            />
            </InputGroup>
        </Form>
        <Form inline>
            <Button name="submit" onSubmit={sendForm} className="m-5" variant="outline-light" size="md" type="submit">SEND</Button> 
        </Form>
        {data.type === "success" ? (
                <div
                  className="alert alert-success position-absolute mx-auto mt-4 w-50 text-center"
                  role="alert"
                >
                  <span className="lead text-dark">{data.message}</span>
                </div>
              ) : (
                ""
              )}
        </Navbar>
    )
}
export default Formulario;
