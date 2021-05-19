import React from 'react'
import { Form, Card, Input, Button } from 'antd'

function Edit() {
  return (
    <Card title="商品编辑">
      <Form>
        <Form.Item label="名字">
          <Input placeholder="请输入商品名：" />
        </Form.Item>
        <Form.Item>
          <Button type="primary">保存</Button>
        </Form.Item>
      </Form>
    </Card>
  )
}

export default Edit
