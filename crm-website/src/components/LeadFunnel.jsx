import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import LeadFunnelIcon from './../assets/Icons/Lead Funnel.png';


function LeadFunnel(){
    const chartData = {
        labels: ['Prospect', 'Cold', 'Interested', 'Meeting Scheduled','Call Back', 'Busy/No Answer','Follow Up','Payment Pending','Never Responded','Arabic Speaker','Customer'],
        datasets: [
          {
            label: 'Leads',
            data: [1000, 3000, 5000, 500, 100, 120, 1400, 100,200,400,2000],
            borderColor: [
              'rgba(255, 26, 104, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'            
            ],
              backgroundColor: [
              'rgba(255, 26, 104, 0.5)',
              'rgba(54, 162, 235, 0.5)',
              'rgba(255, 206, 86, 0.5)',
              'rgba(75, 192, 192, 0.5)',
              'rgba(153, 102, 255, 0.5)',
              'rgba(255, 159, 64, 0.5)',
            ],
            borderWidth: 1,
            borderRadius: 3,
            barThickness: 20,
          },
        ],
      };
    
      const chartOptions = {
        indexAxis: 'y',
        layout: {
          padding: {
            left: 10,
            right: 40,
            bottom:5
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
            offset: -35,
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
        <div className="rounded-lg shadow-[0px_0px_10px_0px_rgb(0,0,0,0.08)] h-full col-span-3 overflow-hidden">
             <div className="flex flex-row items-center gap-4 md:px-6 sm:px-4 md:py-4 sm:py-6">
                <img src={LeadFunnelIcon} alt="Lead-Funnel-Icon" className='h-10 w-auto'/>
                <div>
                    <h1 className="text-md font-semibold text-gray-950">
                        OVERALL LEAD FUNNEL
                    </h1>
                    <p className="text-xs font-medium text-gray-400">
                        Lorem ipsum lorem ipsum dolor sit amet
                    </p>
                </div>
             </div>
             <div className='py-0'>
              <Bar data={chartData} plugins={[ChartDataLabels]} options={chartOptions} className='h-80'/>
            </div>
        </div>
    )
    }

export default LeadFunnel;
