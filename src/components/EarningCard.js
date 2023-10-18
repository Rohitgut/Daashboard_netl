import { useMemo } from "react";
import "./EarningCard.css";

const EarningCard = ({
  financialData,
  financialAmounts,
  earningIconUrl,
  percentageData,
  timePeriodText,
  earningIconText,
  propLeft,
  propWidth,
  propWidth1,
  propColor,
}) => {
  const groupDivStyle = useMemo(() => {
    return {
      left: propLeft,
      width: propWidth,
    };
  }, [propLeft, propWidth]);

  const groupDiv1Style = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const bStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div className="earning-parent" style={groupDivStyle}>
      <div className="earning1">{financialData}</div>
      <div className="k">{financialAmounts}</div>
      <img className="group-icon" alt="" src={earningIconUrl} />
      <div className="this-month-parent" style={groupDiv1Style}>
        <div className="this-month">
          <b style={bStyle}>{percentageData}</b>
          <span className="this-month1">{timePeriodText}</span>
        </div>
        <img className="arrow-up-1-icon" alt="" src={earningIconText} />
      </div>
    </div>
  );
};

export default EarningCard;
