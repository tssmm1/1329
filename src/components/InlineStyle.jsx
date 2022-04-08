export const InlineStyle = () => {
  const containerStyle = {
    border: "solid 2px #392eff",
    borderRadius: "20px"
  };
  const titleStyle = {};
  const buttonStyle = {};

  return (
    <div style={containerStyle}>
      <p style={titleStyle}>- Inline STyles -</p>
      <button style={buttonStyle}> FIGHT!! </button>
    </div>
  );
};
