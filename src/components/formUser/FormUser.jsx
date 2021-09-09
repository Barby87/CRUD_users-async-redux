import React from 'react';
import { Col, Button, Row, Form, Input } from 'antd';

import styles from './FormUser.module.css';

const FormUser = ({
    onFinish, 
    handleChangeForm, 
    onChangeInput, 
    valueName, 
    valueAlias,
    valueEmail, 
    valuePhone,
    valueCompany,
    initialValues

}) => {
    const [form] = Form.useForm();
    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };

    React.useEffect(() => {
        form.setFieldsValue({
            userName: valueName,
            userAlias: valueAlias,
            userEmail: valueEmail,
            userPhone: valuePhone,
            userCompany: valueCompany,
        });
      }, [form, valueName, valueAlias, valuePhone, valueEmail, valueCompany]);

    return (
        <div className={styles.form_wrapper}>
            <Form 
                {...layout}
                onFinish={onFinish} 
                form={form} 
                onFieldsChange={(values) =>
                    handleChangeForm(values[0])
                }
                initialValues={initialValues}
            >
                <Form.Item 
                    name="userName"
                    value={valueName}
                    onChange={onChangeInput}
                    label="Nombre" 
                    rules={[{ required: true }]}>
                        <Input type="text" />
                </Form.Item>
                <Form.Item 
                    name="userAlias"
                    value={valueAlias}
                    onChange={onChangeInput} 
                    label="Alias" 
                    rules={[{ required: true }]}>
                        <Input />
                </Form.Item>
                <Form.Item 
                    name="userEmail"
                    value={valueEmail}
                    onChange={onChangeInput} 
                    label="Email" 
                    rules={[{ required: true }]}>
                        <Input />
                </Form.Item>
                <Form.Item 
                    name="userPhone"
                    value={valuePhone}
                    onChange={onChangeInput} 
                    label="Teléfono" 
                    rules={[{ required: true }]}>
                        <Input />
                </Form.Item>
                <Form.Item 
                    name="userCompany"
                    value={valueCompany}
                    onChange={onChangeInput} 
                    label="Compañía" 
                    rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Row type="flex" justify="center">
                    <Col>
                        <Form.Item>
                            <Button htmlType="submit" type="primary">Guardar</Button>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}

export default FormUser;
