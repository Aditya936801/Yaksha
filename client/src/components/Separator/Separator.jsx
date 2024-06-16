const Separator = ({ top = 0, left = 0, right = 0, bottom = 0 }) => {
  return (
    <div
      style={{
        ...innerStyles.container,
        marginTop: top,
        marginLeft: left,
        marginRight: right,
        marginBottom: bottom,
      }}
    />
  );
};

const innerStyles = {
  container: {
    height: "1px",
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.1)'
  },
};

export default Separator;
