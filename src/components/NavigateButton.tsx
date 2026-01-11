import { useNavigate } from "react-router";
import "../styles/NavigateButton.css";
const NavigateButton = (props: {
  label: string;
  url: string;
  className: string;
}) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(props.url)}
      className={
        "bg-primary text-secondary hover:bg-primary-hover rounded-full p-2 sm:p-3 lg:p-6"
      }
      style={{ width: "fit-content", cursor: "pointer" }}
    >
      <p className={`${props.className}`}> {props.label}</p>
    </button>
  );
};

export default NavigateButton;
