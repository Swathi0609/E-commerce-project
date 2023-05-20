import { Send } from "@mui/icons-material";
import "./Newsletter.css";

export default function Newsletter() {
  return (
    <div className="Newsletter_container">
      <div className="Newsletter_tittle"> Newsletter</div>
      <div className="Newsletter_desc">
        GET TIMELY UPDATES FROM YOUR FAVOURITE PRODUCTS.
      </div>
      <div className="Newsletter_inputcontainer">
        <div className="Newsletter_input">
          <input className="Newsletter_input" placeholder="YOUR MAIL" />
        </div>
        <div className="Newsletter_Btn">
          <Send />
        </div>
      </div>
    </div>
  );
}
