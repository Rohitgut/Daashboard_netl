import EarningCard from "./EarningCard";
import "./ContainerSummary.css";

const ContainerSummary = () => {
  return (
    <div className="group-container">
      <EarningCard
        financialData="Earning"
        financialAmounts="$198k"
        earningIconUrl="/group-10.svg"
        percentageData="37.8%"
        timePeriodText=" this month"
        earningIconText="/arrowup-1.svg"
      />
      <EarningCard
        financialData="Balance"
        financialAmounts="$2.4k"
        earningIconUrl="/group-101.svg"
        percentageData="2%"
        timePeriodText=" this month"
        earningIconText="/arrowup-11.svg"
        propLeft="319px"
        propWidth="211px"
        propWidth1="107px"
        propColor="#d0004b"
      />
      <EarningCard
        financialData="Total Sales"
        financialAmounts="$89k"
        earningIconUrl="/group-102.svg"
        percentageData="11%"
        timePeriodText=" this week"
        earningIconText="/arrowup-12.svg"
        propLeft="638px"
        propWidth="204px"
        propWidth1="100px"
        propColor="#00ac4f"
      />
      <div className="line-div" />
      <div className="group-child1" />
    </div>
  );
};

export default ContainerSummary;
