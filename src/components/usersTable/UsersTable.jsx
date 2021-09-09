import React from 'react';
import { Col, Row, Table, Space } from 'antd';
import { Link } from 'react-router-dom';
import styles from './UsersTable.module.css';

const UsersTable = ({data}) => {
    const usersList = data?.sort((obj1, obj2) => {
        if (obj1.name < obj2.name) {
          return -1;
        }
        if (obj1.name > obj2.name) {
          return 1;
        }
        return 0;
      });

    const columns = [
        {
          title: 'Nombre',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Alias',
          dataIndex: 'alias',
          key: 'alias',
        },
        {
          title: 'Email',
          dataIndex: 'email',
          key: 'email',
        },
        {
          title: 'Teléfono',
          dataIndex: 'phone',
          key: 'phone',
        },
        {
          title: 'Compañía',
          dataIndex: 'company',
          key: 'company'
        },
        {
          title: 'Acción',
          dataIndex: 'action',
          key: 'action',
          
        },
      ];

      const usersData = usersList?.map((user) => ({
          key: user?.id,
          name: user?.name,
          alias: user?.username,
          email: user?.email,
          phone: user?.phone,
          company: user?.company?.name,
          action: (
            <Space size="middle">
                <Link to={`/users/update/${user?.id}`}>Editar</Link>
                <Link to={`/users/delete/${user?.id}`} className={styles.delete_btn}>Borrar</Link>
            </Space>
          )
      }));
      
    return (
        <div className={styles.container}>
            <Row type="flex" justify="center">
                <Col span={20}>
                    <Table columns={columns} dataSource={usersData} />
                </Col>
            </Row>
        </div>
    )
}

export default UsersTable
