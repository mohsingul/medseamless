import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
//   labels: ['Jan', 'Feb', 'Mar',
//     'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
//   datasets: [{
//     label: 'My First Dataset',
//     data: [20, 30, 25, 40, 28, 15, 22, 32, 50, 52, 24, 12],
//     backgroundColor: [
//       'rgb(255, 99, 132)',
//       'rgb(54, 162, 235)',
//       'rgb(255, 205, 86)',
//       'rgb(54, 162, 235)',
//       'rgb(255, 205, 86)',
//       'rgb(54, 162, 235)',
//       'rgb(255, 205, 86)',
//       'rgb(255, 99, 132)',
//     ],
//     hoverOffset: 200
//   }]
// }

import l from "lodash";

export default function DailyCashInflow(props) {

  const [state, setState] = useState( {
    labels: ['Jan', 'Feb', 'March', 'April', 'May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
    datasets: [
      {
        label: 'Sales Data',
        backgroundColor: 'rgba(75,192,192,0.5)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75,192,192,0.5)',
        hoverBorderColor: 'rgba(75,192,192,1)',
        data: [0, 0, 0, 0, 0,0,0,0,0,0,0,0],
      },
    ],
  })

  const updateChartData = (newData) => {
    const updatedData = [...state.datasets[0].data];

    newData.forEach((entry) => {
      const index = entry.month - 1; // Adjust the index to match zero-based arrays
      updatedData[index] = entry.totalCashInflow;
    });

    setState((prevState) => ({
      ...prevState,
      datasets: [
        {
          ...prevState.datasets[0],
          data: updatedData,
        },
      ],
    }));
  };
  useEffect(() => {
    console.log(props)
    const dataFromProps = props.data;
    if (!dataFromProps)  return;
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
      <h5 className="label-heading">Monthly Insights</h5>
      {/* <ul className="chat-user-total">
        <li><i className="fa fa-circle current-users"></i> ICU</li>
        <li><i className="fa fa-circle old-users"></i> OPD</li>
      </ul> */}
      <Bar
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