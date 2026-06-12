import { useNavigate } from "react-router-dom";
import "./directory-item.style.scss";

const DirectoryItem = ({ category }) => {
  const navigate = useNavigate();

  const { imageUrl, title, route } = category;
  const navigateHandler = () => navigate(route);
  return (
    <div className="directoryItem-container" onClick={navigateHandler}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="directoryItem-body-container">
        <h2>{title}</h2>
        <p>shop</p>
      </div>
    </div>
  );
};

export default DirectoryItem;
