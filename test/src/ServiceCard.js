export function ServiceCard({ item }) {
    return (
      <div className="services-card">
        <h2 style={{ marginLeft: "20px" }}>{item.title}</h2>
        <h4
          style={{
            fontWeight: "normal",
            marginLeft: "20px",
            marginRight: "20px",
          }}
        >
          {item.description}
        </h4>
      </div>
    );
  }
  