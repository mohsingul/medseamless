import React from "react";

const testData = [
  { bgcolor: "#009efb", completed: 60, label: "OPD" },
  { bgcolor: "#009efb", completed: 30, label: "NEW PATIENT" },
  { bgcolor: "#009efb", completed: 53, label: "LABORATORY TEST" },
  { bgcolor: "#009efb", completed: 70, label: "TREATMENT" },
];

function ProgressRate() {
  return (
    <div className="item">
      {testData.map((item, idx) => (
        <ProgressBar
          key={idx}
          bgcolor={item.bgcolor}
          completed={item.completed}
          label={item.label}
        />
      ))}
    </div>
  );
}

const ProgressBar = (props) => {
  const { bgcolor, completed, label } = props;

  const containerStyles = {
    height: 40,
    lineHeight: "40px",
    width: "100%",
    backgroundColor: "#ffbc35",
    marginBottom: '10px'
  };

  const fillerStyles = {
    height: "100%",
    display: "inline-block",
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: "inherit",
    textAlign: "right",
    
  };

  const labelStyles = {
   
    color: "white",
   padding: '0px 6px',
    float: "left",
    display: 'inlineblock',
    fontSize: '12px'
  };

  const labelCustom = {
    color: "#fff",
    float: "right",
    margin: "0px 3px",
  };
  return (
    <>
      <div style={containerStyles}>
        <div style={fillerStyles}>
          <span style={labelStyles}>{`${label}%`}</span>
        </div>
        <span style={labelCustom}>{`${completed}%`}</span>
      </div>
    </>
  );
};

export default ProgressRate;
