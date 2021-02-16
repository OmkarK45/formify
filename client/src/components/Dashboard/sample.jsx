import db from "../../sampleDB"
export default function Sample() {
  return (
    <div>
      <table className="submissions responsive">
        <thead>
          <tr>
            {db.schema.map((s, i) => {
              return <th key={i}>{s}</th>
            })}
          </tr>
        </thead>
        <tbody>
          {db.submissions.map((s, i) => {
            return (
              <tr key={i}>
                {db.schema.map((header, index) => {
                  return <td key={index}>{s[header]}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
