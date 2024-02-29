/* eslint-disable react/prop-types */
export default function MovieChip({ data, setSelected }) {
    const handleClick = () => {
      setSelected((prev) => prev.filter((item) => item !== data));
    };
    return (
      <div style={{ backgroundColor: "#148b09", color:"#FFFFFF",padding: "12px", borderRadius: "20px" }}>
        {data}&nbsp; &nbsp; <span style={{color:"#095d00", cursor:"pointer"}} onClick={handleClick}>X</span>
      </div>
    );
}