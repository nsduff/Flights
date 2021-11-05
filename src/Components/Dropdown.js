function Dropdown({ setOrigin, setDestination }) {
  const destinations =
    [
      { name: "Valencia", code: "VLC" },
      { name: "Madrid", code: "MAD" },
      { name: "Milan", code: "MXP" },
      { name: "Athens", code: "ATH" },
      { name: "Bollocks", code: "ASS" },
    ]
    ;
  const origins =
    [
      { name: "Prague", code: "PRG" },
      { name: "Berlin", code: "BER" },
      { name: "Warsaw", code: "WAW" },
      { name: "Pardubice", code: "PED" },
    ]

  return (
    <div>
      <label htmlFor="origin">Origin</label>
      <select name="origin" onChange={(e) => setOrigin(e.target.value)}>
        {origins.map((o, i) => (
          <option key={i} value={o.code}>{o.name}</option>
        ))}
      </select>
      <label htmlFor="destination">Destination</label>
      <select
        name="destination"
        onChange={(e) => setDestination(e.target.value)}
      >
        {destinations.map((d, i) => (
          <option key={i} value={d.code}>{d.name}</option>
        ))}
      </select>
      <br />
    </div>
  );
}
export default Dropdown;
