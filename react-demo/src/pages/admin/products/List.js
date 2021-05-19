import React from 'react'
import { Button, Card, Table, Popconfirm } from 'antd'

const dataSource = [
  {
    key: 1,
    name: '香皂',
    price: 5
  },
  {
    key: 2,
    name: '特仑苏',
    price: 6
  },
  {
    key: 3,
    name: '小浣熊',
    price: 3.7
  }
]

function List(props) {
  const columns = [
    {
      title: '序号',
      key: 'id',
      width: 80,
      align: 'center',
      render: (txt, record, index) => index + 1
    },
    {
      title: '名字',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: '价格',
      dataIndex: 'price',
      key: 'price'
    },
    {
      title: '操作',
      render: (txt, record, index) => {
        return (
          <div>
            <Button size="small" type="primary">
              修改
            </Button>
            <Popconfirm
              title="确定删除此项？"
              onCancel={() => console.log('取消删除')}
              onConfirm={() => {
                console.log('用户确认删除')
                // 调用api
              }}
            >
              <Button size="small" type="danger" style={{ marginLeft: '10px' }}>
                删除
              </Button>
            </Popconfirm>
          </div>
        )
      }
    }
  ]

  return (
    <Card
      title="商品列表"
      extra={
        <Button
          type="primary"
          size="small"
          onClick={() => props.history.push('/admin/products/edit')}
        >
          新增
        </Button>
      }
    >
      <Table columns={columns} bordered dataSource={dataSource} />
    </Card>
  )
}

export default List
