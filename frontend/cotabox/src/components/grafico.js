import { Chart } from "react-google-charts";

function Grafico(){
      
    return (

        <Chart
        width={'600px'}
        height={'380px'}
        chartType="PieChart"
        loader={<div>Carregando gráfico</div>}
        data={[
            ['Name', 'Participation'],
          ['Carlos Moura',  5],
          ['Fernanda Oliveira',  15],
          ['Hugo Silva',  20],
          ['Eliza Souza',  20],
          ['Anderson Santos',    40],
          ['Priscila Ribeiro', 30]
        ]}
        options={{
            pieHole: 0.5,
          pieSliceText: 'none',
          legend: {position: 'right', textStyle: {fontSize: 12}, alignment: 'center'},
          slices: {
            0: { color: 'MediumTurquoise' },
            1: { color: 'Gainsboro' },
            2: { color: 'DeepSkyBlue'},
            3: { color: 'MediumPurple' },
            4: { color: 'Tomato' },
        }}
        }
        />
    )
}  

export default Grafico;