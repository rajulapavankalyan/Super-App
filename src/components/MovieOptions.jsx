/* eslint-disable react/prop-types */
export default function MovieOptions({ data, selected, setSelected }) {
    const isSelected = selected.includes(data.id);
    const handleClick = () => {
      if (selected.includes(data.id)) {
        setSelected((prev) => prev.filter((item) => item !== data.id));
      } else {
        setSelected((prev) => {
          return [...prev, data.id];
        });
      }
    };
    return (
      <div
        onClick={handleClick}
        style={{
          background: data.color,
          textAlign: "center",
          width: "16vw",
          borderRadius:"10px",
          border: isSelected ? "6px solid #11B800" : "",
        }}
      >
        <p style={{color:"#FFFFFF", margin:"10px"}}>{data.id}</p>
        {data.image}
      </div>
    );
  }