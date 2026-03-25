export default function HowItWorks() {
  return (
    <div style={{ padding: "40px" }}>
      <h1>How It Works</h1>

      <p style={{ marginTop: "20px" }}>
        This section explains how the smart parking system works.
      </p>

      <div style={{ marginTop: "30px" }}>
        <h3>🚗 Vehicle Flow</h3>
        <ul>
          <li>Car enters the parking area</li>
          <li>Camera detects license plate (ANPR)</li>
          <li>System checks availability</li>
          <li>Barrier gate opens automatically</li>
        </ul>
      </div>

      <div style={{ marginTop: "30px" }}>
        <h3>👤 Visitor Flow</h3>
        <ul>
          <li>User books a parking spot</li>
          <li>Receives confirmation</li>
          <li>Arrives and enters smoothly</li>
        </ul>
      </div>
    </div>
  );
}