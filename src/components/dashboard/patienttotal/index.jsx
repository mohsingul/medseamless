import React, { useEffect, useState } from 'react';
import { Bar, Line } from 'react-chartjs-2';

export default function DailyCashInflow(props) {
  const generateLast30DaysLabels = () => {
    const labels = [];
    const today = new Date();

    for (let i = 29; i >= 0; i--) {
      const pastDate = new Date();
      pastDate.setDate(today.getDate() - i);

      const day = pastDate.getDate(); // Get day of the month
      const month = pastDate.getMonth() + 1; // Get month (0-based, so +1)

      const formattedDate = `${day}/${month}`;
      labels.push(formattedDate);
    }

    return labels.reverse(); // Reverse to show the oldest date first
  };
  const [state, setState] = useState({
    labels: generateLast30DaysLabels(),
    datasets: [
      {
        label: 'Sales Data',
        backgroundColor: 'rgba(30,230,160,0.5)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75,192,192,0.5)',
        hoverBorderColor: 'rgba(75,192,192,1)',
        data: new Array(30).fill(0),
      },
    ],
  })

  const updateChartData = (newData) => {
    const updatedData = new Array(30).fill(0); // Create a new data array
  
    newData.forEach(item => {
      const index = state.labels.indexOf(`${item.date}`); // Adjust if your data structure is different
      if (index !== -1) {
        updatedData[index] = item.totalCashInflow; // Set the cash inflow for the corresponding date
      }
    });
  
    // Update the state with a new dataset reference
    setState({
      ...state,
      datasets: [
        {
          ...state.datasets[0],
          data: updatedData // Set the new data array
        }
      ],
    });
  };
  useEffect(() => {
    console.log(props)
    const dataFromProps = props.data;
    if (!dataFromProps) return;
    updateChartData(dataFromProps);


    // labels.forEach((label) => {
    //   const insightData = dataFromProps.find((_dfi) => { return _dfi.date === label })
    //   newDataSetData.push(insightData ? insightData.cashInflow : 0)
    // })
    // const stateCopy = l.cloneDeep(datasets);
    // stateCopy[0].data = newDataSetData
    // const newState = { labels, datasets: stateCopy };
    // setState(newState);
  }, [props.data])
  return (
    <div>
      {/* {new Date().toISOString().slice(0, 4)} */}
      <h5 className="label-heading">Daily Insights</h5>
      {/* <ul className="chat-user-total">
        <li><i className="fa fa-circle current-users"></i> ICU</li>
        <li><i className="fa fa-circle old-users"></i> OPD</li>
      </ul> */}
      <Line
        data={state}
        options={{
          title: {
            display: true,

            fontSize: 20,

          },
          legend: {

            display: false,
            position: 'right'
          }
        }}
      />
    </div>
  );
}