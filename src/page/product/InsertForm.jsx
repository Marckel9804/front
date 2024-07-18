import {useNavigate} from "react-router-dom";
import {Button, Form, FormGroup} from "react-bootstrap";
import {useState} from "react";

const InsertForm = () => {

  // const navi = useNavigate();

  const [formData, setFormData] = useState({productName:'',productCompany:''});

  const changeValue = (e) => {
    setFormData({
      ...formData, [e.target.name] : e.target.value
    });
  }

  const submitProduct = () => {

  }

  return(
    <Form onSubmit={submitProduct}>
      <Form.Group className='mb-3'>

        <Form.Label>productName</Form.Label>
        <Form.Control type='text'
                      placeholder='상품명'
                      name='productName'
                      onChange={changeValue}
        />

        <Form.Label>productCompany</Form.Label>
        <Form.Control type='text'
                      placeholder='회사명'
                      name='productCompany'
                      onChange={changeValue}
        />
      </Form.Group>
      <Button type={"submit"} className='btn btn-primary'>상품 등록</Button>
    </Form>
  )
}

export default InsertForm