import { useNavigate } from "react-router";
import "../styles/NavigateButton.css";
const NavigateButton = (props: {
  label: string;
  url: string;
  textSize: string;
}) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(props.url)}
      className={
        "bg-primary text-secondary hover:bg-primary-hover rounded-full p-6"
      }
      style={{ width: "fit-content", cursor: "pointer" }}
    >
      <p className={`text-${props.textSize}`}> {props.label}</p>
    </button>
  );
};

export default NavigateButton;
