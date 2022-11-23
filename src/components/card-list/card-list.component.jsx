import "./card-list.styles.css";
import Card from "../card/card.component";

const CardList = ({ monsters }) => {
  // console.log('render from card-list')
  return (
    <div className="card-list">
      {monsters.map((monster) => {
        return <Card monster={monster} />;
      })}
    </div>
  );
};

export default CardList;
