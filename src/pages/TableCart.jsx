import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const TableCart = () => {
    const cartList = useSelector(state => state.itemReducer.cartList);
    console.log("cart",cartList)
    const dispatch = useDispatch();
    const changeQuantity = () => {
        return null;
    }
  return (
    <table className='table'>
    <thead>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Image</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Total</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {cartList?.map((item) => {
        return (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>
              <img src={item.image} alt="" width={50} />
            </td>
            <td>{item.price}</td>
            <td>
              <button
              className="btn btn-primary mx-2"
              onClick={() => {
                const action = changeQuantity({
                  id: item.id,
                  quantity: 1,
                });
                dispatch(action);
              }}
            >
              +
            </button>
              {item.quantity}
              <button
              className="btn btn-primary mx-2"
              onClick={() => {
                const action = changeQuantity({
                  id: item.id,
                  quantity: -1,
                });
                dispatch(action);
              }}
            >
              -
            </button>
            </td>

            <td>{item.price * item.quantity}</td>
            <td>
              {/* <button
              className="btn btn-danger"
              onClick={() => {
                const action = delProductAction(item.id);
                dispatch(action);
              }}
            >
              <i className="fa fa-close"></i>
            </button> */}
            </td>
          </tr>
        );
      })}
    </tbody>
  </table>
  )
}

export default TableCart