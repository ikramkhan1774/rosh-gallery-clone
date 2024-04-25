import "./card-container.css";
import { Card } from "../Card/Card";
import { useSelector } from "react-redux";

export default () => {
  let Products = useSelector((store) => {
    return store.cartSection.product;
  });

  return (
    <div>
     

      <div className="abc">
        {Products.map((product) => {
          return <Card product={product} />;
        })}
      </div>
    </div>
  );
};
