// Search Query - Premium Responsive Component
// Version: 1.0.1

function View() {
  const { useState } = dc;
  const [term, setTerm] = useState("DATACORE.flexilis");
  const queryString = `@page and $name.contains("${term}")`;
  const files = dc.useQuery(queryString);

  return (
    <div style={{
      padding: "24px",
      background: "rgba(122, 70, 241, 0.02)",
      border: "1px solid rgba(122, 70, 241, 0.15)",
      borderRadius: "16px",
      boxShadow: "0 8px 32px rgba(122, 70, 241, 0.04)",
      fontFamily: "'Outfit', 'Inter', sans-serif",
      color: "var(--text-normal)",
      maxWidth: "600px",
      margin: "0 auto"
    }}>
      {/* Header Panel */}
      <div style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        marginBottom: "20px"
      }}>
        <div style={{
          background: "linear-gradient(135deg, #7A46F1, #9F75FF)",
          borderRadius: "10px",
          width: "38px",
          height: "38px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 12px rgba(122, 70, 241, 0.3)"
        }}>
          <dc.Icon icon="search" style={{ width: "18px", height: "18px", color: "#FFF" }} />
        </div>
        <div>
          <h3 style={{ margin: 0, fontSize: "16px", fontWeight: 700, color: "var(--text-normal)", lineHeight: 1.2 }}>Reactive Query Engine</h3>
          <p style={{ margin: 0, fontSize: "11px", color: "var(--text-muted)", fontWeight: 500, letterSpacing: "0.5px" }}>BETO.GROUP STANDALONE MODULE</p>
        </div>
      </div>

      {/* Input Field wrapper */}
      <div style={{ position: "relative", marginBottom: "20px" }}>
        <input 
          value={term} 
          onChange={e => setTerm(e.target.value)} 
          placeholder="Search files in vault..." 
          style={{
            width: "100%",
            padding: "12px 16px",
            fontSize: "14px",
            background: "var(--background-primary)",
            border: "1px solid rgba(122, 70, 241, 0.3)",
            borderRadius: "10px",
            color: "var(--text-normal)",
            outline: "none",
            boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
            transition: "all 0.2s ease",
          }}
          onFocus={e => {
            e.target.style.borderColor = "#7A46F1";
            e.target.style.boxShadow = "0 0 0 3px rgba(122, 70, 241, 0.25)";
          }}
          onBlur={e => {
            e.target.style.borderColor = "rgba(122, 70, 241, 0.3)";
            e.target.style.boxShadow = "0 2px 8px rgba(0,0,0,0.05)";
          }}
        />
      </div>

      {/* Results Title */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid var(--background-modifier-border)",
        paddingBottom: "8px",
        marginBottom: "12px"
      }}>
        <h4 style={{ margin: 0, fontSize: "13px", fontWeight: 600, color: "var(--text-muted)" }}>
          Results for <span style={{ color: "#7A46F1" }}>"{term || "*"}"</span>
        </h4>
        <span style={{
          fontSize: "11px",
          background: "rgba(122, 70, 241, 0.1)",
          color: "#7A46F1",
          padding: "2px 8px",
          borderRadius: "12px",
          fontWeight: 600
        }}>
          {files.length} found
        </span>
      </div>

      {/* Results List */}
      {files.length ? (
        <ul style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
          maxHeight: "300px",
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          gap: "8px"
        }}>
          {files.map(file => (
            <li 
              key={file.$path}
              style={{
                padding: "10px 14px",
                background: "var(--background-primary)",
                border: "1px solid var(--background-modifier-border)",
                borderRadius: "8px",
                fontSize: "13px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                cursor: "pointer",
                transition: "all 0.15s ease",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = "rgba(122, 70, 241, 0.4)";
                e.currentTarget.style.background = "rgba(122, 70, 241, 0.02)";
                e.currentTarget.style.transform = "translateX(4px)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = "var(--background-modifier-border)";
                e.currentTarget.style.background = "var(--background-primary)";
                e.currentTarget.style.transform = "none";
              }}
            >
              <dc.Icon icon="file" style={{ width: "14px", height: "14px", color: "#7A46F1" }} />
              <span style={{ fontWeight: 500, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                {file.$name}
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <div style={{
          textAlign: "center",
          padding: "30px 10px",
          color: "var(--text-muted)"
        }}>
          <dc.Icon icon="inbox" style={{ width: "28px", height: "28px", display: "block", margin: "0 auto 8px auto" }} />
          <p style={{ margin: "8px 0 0 0", fontSize: "13px", fontWeight: 500 }}>No matching vault files found.</p>
        </div>
      )}
    </div>
  );
}

return { View };
