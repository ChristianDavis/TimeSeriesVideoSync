import React from 'react'
import { LineChart, Line, YAxis} from 'recharts';

const getGraphDataWindow = (data, playedPercent) => {
  const windowLength = 600 // this is # of intervals
  const syncStartTime = .21
  const start = (playedPercent - syncStartTime) * data.length
  const end = start + windowLength
  return data.slice(start, end)
}

export default function Graph ({ className, data, maxForce, playedPercent}) {
  // the point here is to take a window from the TS data and display it in the graph, for a real time effect
  const graphData = getGraphDataWindow(data, playedPercent)
  return (
    <div className={className}>
      <LineChart width={400} height={200} data={graphData}>
        <YAxis hide={true} domain={[0, maxForce]}/>
  
        <Line
          type="monotone"
          dataKey="force"
          stroke="#8884d8"
          dot={false}
          isAnimationActive={false}
          //animationDuration={5}
        />
      </LineChart>
    </div>
  )
}
