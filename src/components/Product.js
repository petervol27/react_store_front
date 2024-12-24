function Product({ product, index }) {
  let defineStyle = () => {
    if (index % 2 === 0) {
      return 'panel panel-primary';
    } else if (index % 3 === 0) {
      return 'panel panel-danger';
    } else {
      return 'panel panel-success';
    }
  };
  return (
    <div className="col-sm-4">
      <div className={defineStyle()}>
        <div className="panel-heading">{product.name}</div>
        <div className="panel-body">
          <img
            src={product.image}
            className="img-responsive"
            style={{ width: '100%', height: '250px' }}
            alt={product.name}
          />
        </div>
        <div className="panel-footer">
          <div className="fw-bold">{product.price}₪</div>

          <button className="btn btn-primary text-center mt-3" >
            Add To cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
