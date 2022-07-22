import { useNavigate } from "react-router-dom";

import { Body,DirectoryItemContainer,BackgroundImage } from "./directory-item.style";

const DirectoryItem = ({ category }) => {
  const { imageUrl, title,route } = category;
  const navigate=useNavigate();
  const NavigateHandler=()=>navigate(route);
  return (
    <DirectoryItemContainer onClick={NavigateHandler}>
      <BackgroundImage
      imageUrl={imageUrl}
       
      />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;