import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import SourceLeadIcon from './../assets/Icons/SourceLead.png';

function LeadSource(){
    const chartData = {
        labels: ['PK Office', 'Partner Referral'],
        datasets: [
          {
            label: 'Leads',
            data: [33,40],
            backgroundColor: [
              'rgba(255, 26, 104, 0.5)',
              'rgba(54, 162, 235, 0.5)'
            ],
            borderColor: [
              'rgba(255, 26, 104, 1)',
              'rgba(54, 162, 235, 1)'
            ],
            borderWidth: 1,
            borderRadius: 8,
            barThickness: 60,
          },
        ],
      };
    
      const chartOptions = {
        indexAxis: 'y',
        layout: {
          padding: {
            right:25
          }
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
          },
          y: {
            beginAtZero: true,
            grid: {
              display: false,
            },
          },
        }
      };

    return(
        <div className="rounded-lg shadow-[0px_0px_10px_0px_rgb(0,0,0,0.08)] h-full col-span-2">
        <div className="flex flex-row items-center gap-4 md:px-6 sm:px-4 md:py-4 sm:py-6">
                <img src={SourceLeadIcon} alt="Source-Lead-Icon" className='h-10 w-auto'/>
                <div>
                    <h1 className="text-md font-semibold text-gray-950">
                        LEAD BY SOURCES
                    </h1>
                    <p className="text-xs font-medium text-gray-400">
                        Lorem ipsum lorem ipsum dolor sit amet
                    </p>
                </div>
             </div>
         <div className='p-5'>
              <Bar data={chartData}  plugins={[ChartDataLabels]} options={chartOptions} className='h-72' />
        </div>
    </div>
    )
    }

export default LeadSource;