import React, { useState } from 'react';
import { ListGroup, Button, InputGroup, FormControl } from 'react-bootstrap'

const defaultItems = [
  {
    label: 'My Default Item'
  },
  {
    label: 'My Second Default Item'
  }
]

export const List = () => {
  const [itemList, setItemList] = useState(defaultItems);
  const inputRef = React.createRef()

  function addItem() {
    const label = inputRef.current.value
    const newItem = { label }
    const updatedItemList = [ ...itemList, newItem ]
    inputRef.current.value = ''

    setItemList(updatedItemList)
  }

  function removeItem(index) {
    const filteredItemList = itemList.filter((item, i) => i !== index)

    setItemList(filteredItemList)
  }

  return (
    <div>
      <InputGroup className="mb-3">
        <FormControl
          ref={inputRef}
          placeholder="New Item"
        />
        <InputGroup.Append>
          <Button variant="outline-secondary" onClick={addItem}>Button</Button>
        </InputGroup.Append>
      </InputGroup>
      <ListGroup>
        {
          itemList.map((item, index) => (
            <ListGroup.Item key={index} action onClick={() => removeItem(index)}>
              { item.label }
            </ListGroup.Item>
          ))
        }
      </ListGroup>
    </div>
  )
}