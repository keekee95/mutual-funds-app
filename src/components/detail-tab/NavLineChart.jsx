import { LineChart } from '@mui/x-charts/LineChart';
/**
 * Visualises NAV data in Linear Chart Format
 * @param {List} data contains list of objects with nav and date
 * @returns 
 */
export default function NavLineChart(props){

    function convertStringToDate(dateString){
        const parts=dateString.split('-')
        return new Date(parts[2],parts[1]-1,parts[0])
    }

    const convertedData=props.data.map(x=>({date:convertStringToDate(x.date), nav:parseFloat(x.nav)})).reverse()

    console.log(`Nav data has ${convertedData.length} entries`)
    
    return(
        <section className="nav-line-chart-section">
            <LineChart
                dataset={convertedData}
                xAxis={[
                    {
                        id: 'Years',
                        label: 'Date',
                        dataKey: 'date',
                        scaleType: 'time',
                        valueFormatter: (date) => date.toISOString().slice(0,10),
                        tickInterval: (date) =>  date.getDate()===1 && getMonth===0
                    }
                ]}
                series={[
                    {
                        id: 'Nav',
                        label: 'Nav(in rupees)',
                        dataKey: 'nav',
                        stack: 'total',
                        showMark: false
                    },
                ]}
                width={1000}
                height={400}
                margin={30}
                />
        </section>
    )
}