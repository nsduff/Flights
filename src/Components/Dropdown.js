function Dropdown({ origin, destination, setOrigin, setDestination }) {
  const destinations = ["VLC", "BCN", "MAD", "MXP", "ATH", "ASS"];
  const origins = ["PRG", "BER", "WAW", "PED"];
  return (
    <div>
      <label for="origin">Origin</label>
      <select name="origin" onChange={(e) => setOrigin(e.target.value)}>
        {origins.map((o, i) => (
          <option key={i}>{o}</option>
        ))}
      </select>
      <label for="destination">Destination</label>
      <select
        name="destination"
        onChange={(e) => setDestination(e.target.value)}
      >
        {destinations.map((d, i) => (
          <option key={i}>{d}</option>
        ))}
      </select>
      <br />
    </div>
  );
}
export default Dropdown;
