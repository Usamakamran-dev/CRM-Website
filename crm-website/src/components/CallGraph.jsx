import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import TodayCallIcon from './../assets/Icons/TodayCall.png';

function CallGraph(){
    const chartData = {
        labels: ['Name', 'Name', 'Name', 'Name', 'Name', 'Name', 'Name', 'Name', 'Name', 'Name'],
        datasets: [
          {
            label: 'Calls',
            data: [20, 40, 60, 80, 100,20,30,15,20,16],
            backgroundColor: [
              'rgba(255, 26, 104, 0.5)',
              'rgba(54, 162, 235, 0.5)'
            ],
            borderColor: [
              'rgba(255, 26, 104, 1)',
              'rgba(54, 162, 235, 1)'
            ],
            borderWidth: 1,
            borderRadius: 30,
            borderSkipped:false,
            barThickness: 20,
          },
        ],
      };

       const chartOptions = {
        indexAxis: 'x',
        layout: {
          padding: 15
        },
        plugins: {
          legend: {
            display : false
          },
          datalabels: {
            display: true,
            color: "gray",
            formatter: Math.round,
            anchor: "end",
            offset: -20,
            align: "start"
          }
        },
        maintainAspectRatio: false,
        scales: {
          x: {
            beginAtZero: true,
            grid: {
                display: false,
              },
          },
          y: {
            beginAtZero: true,
          },
        }
      };

    return(
        <div className="rounded-lg shadow-[0px_0px_10px_0px_rgb(0,0,0,0.08)] h-full col-span-3">
             <div className="flex flex-row items-center gap-4 md:px-6 px-4 md:py-4 py-6">
                <img src={TodayCallIcon} alt="Today-Call-Icon" className='h-10 w-auto'/>
                <div>
                    <h1 className="text-md font-semibold text-gray-950">
                        Today Calls
                    </h1>
                    <p className="text-xs font-medium text-gray-400">
                        Lorem ipsum lorem ipsum dolor sit amet
                    </p>
                </div>
             </div>
            <div className='py-6'>
            <Bar data={chartData}  plugins={[ChartDataLabels]} options={chartOptions} className='h-72' />
            </div>
         </div>
    )
}

export default CallGraph;